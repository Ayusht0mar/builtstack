#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import degit from "degit";
import path from "path";
import fs from "fs-extra";
import ora from "ora";
import { execSync } from "child_process";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

// Get package version
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
let packageVersion = "1.0.0";

try {
  const packageJson = JSON.parse(
    readFileSync(join(__dirname, "../package.json"), "utf-8")
  );
  packageVersion = packageJson.version;
} catch (error) {
  // Fallback if package.json not found
}

// Debug mode
const DEBUG = process.argv.includes("--debug");

// Handle version flag
if (process.argv.includes("--version") || process.argv.includes("-v")) {
  console.log(packageVersion);
  process.exit(0);
}

// Handle help flag
if (process.argv.includes("--help") || process.argv.includes("-h")) {
  console.log(`
    ${chalk.bold.cyanBright("Builtstack")} - Quick project scaffolding

    ${chalk.bold("Usage:")}
      npx builtstack [options]

    ${chalk.bold("Options:")}
      -v, --version    Output the version number
      -h, --help       Display help message
      --debug          Enable debug mode with verbose output

    ${chalk.bold("Examples:")}
      ${chalk.dim("# Create a new project interactively")}
      npx builtstack

      ${chalk.dim("# Enable debug output")}
      npx builtstack --debug

    ${chalk.bold("Supported Stacks:")}
      • Next.js with TypeScript/JavaScript
      • React with Vite
      • Vue.js with Vite
      • Database integration (Prisma, Drizzle)
      • Authentication (Clerk, Better-Auth, AuthJs)
      • Payment providers (Stripe, Razorpay, DodoPayments)
      • Email providers (Resend, Nodemailer, SendGrid)

    ${chalk.dim("Visit https://github.com/yourusername/builtstack for more information")}
  `);
  process.exit(0);
}

// Boilerplate repository mappings
const boilerplates = {
  "nextjsapp-typescript-neon-betterauth-emailpassword-dodo-resend": "https://github.com/Ayusht0mar/nextjsapp-typescript-neon-betterauth-emailpassword-dodo-resend.git",
  "nextjsapp-javascript-neon-betterauth-emailpassword-dodo-resend": "https://github.com/Ayusht0mar/nextjsapp-javascript-neon-betterauth-emailpassword-dodo-resend.git"
};


// Validate project name
function validateProjectName(input) {
  if (!input || input.trim() === "") {
    return "Project name cannot be empty";
  }
  
  if (!/^[a-z0-9-_]+$/i.test(input)) {
    return "Project name can only contain letters, numbers, hyphens, and underscores";
  }
  
  if (input.length > 214) {
    return "Project name must be less than 214 characters";
  }
  
  if (input.startsWith(".") || input.startsWith("-")) {
    return "Project name cannot start with a dot or hyphen";
  }
  
  return true;
}

// Generate template key based on selections
function generateTemplateKey(framework, language, db, auth, authMethod, payment, email) {
  const parts = [framework.toLowerCase()];
  
  if (framework.toLowerCase() !== "none") {
    if (framework.toLowerCase() === "react" || framework.toLowerCase() === "vue") {
      parts.push("vite");
    }
    parts.push(language.toLowerCase());
  }
  
  // Only add options if they're not "none"
  if (db && db !== "none") parts.push(db.toLowerCase());
  if (auth && auth !== "none") parts.push(auth.toLowerCase());
  if (authMethod && authMethod !== "none") parts.push(authMethod.toLowerCase());
  if (payment && payment !== "none") parts.push(payment.toLowerCase());
  if (email && email !== "none") parts.push(email.toLowerCase());
  
  return parts.join("-");
}

// Get fallback template
function getFallbackTemplate(framework, language) {
  const fallbackKey = framework.toLowerCase() === "nextjs" 
    ? `nextjs-${language.toLowerCase()}`
    : `${framework.toLowerCase()}-vite-${language.toLowerCase()}`;
    
  return boilerplates[fallbackKey] || boilerplates["nextjs-typescript"];
}

// Install dependencies
async function installDependencies(projectDir, projectName) {
  const installSpinner = ora("Installing dependencies...").start();
  
  try {
    execSync("npm install", {
      cwd: projectDir,
      stdio: DEBUG ? "inherit" : "pipe",
      timeout: 300000 // 5 minute timeout
    });
    installSpinner.succeed(chalk.greenBright("Dependencies installed successfully!"));
    return true;
  } catch (error) {
    installSpinner.fail(chalk.redBright("Failed to install dependencies"));
    console.log(chalk.yellow(`\nYou can install them manually by running:`));
    console.log(chalk.cyanBright(`  cd ${projectName}`));
    console.log(chalk.cyanBright(`  npm install\n`));
    return false;
  }
}

// Update package.json with the correct project name
async function updatePackageJson(projectDir, projectName) {
  const packageJsonPath = path.join(projectDir, 'package.json');
  
  try {
    if (await fs.pathExists(packageJsonPath)) {
      const packageJson = await fs.readJson(packageJsonPath);
      packageJson.name = projectName;
      await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });
      
      if (DEBUG) {
        console.log(chalk.dim(`Updated package.json name to: ${projectName}`));
      }
    }
  } catch (error) {
    console.log(chalk.yellow(`Warning: Could not update package.json name: ${error.message}`));
  }
}

// Main CLI function
async function run() {
  try {
    // Welcome message
    console.log(chalk.cyanBright.bold("\n🚀 Welcome to Builtstack!\n"));
    console.log(chalk.dim("Let's create your next amazing project...\n"));

    // Project name prompt
    const { projectName } = await inquirer.prompt([
      {
        type: "input",
        name: "projectName",
        message: "What is your project name?",
        default: "my-app",
        validate: validateProjectName,
        transformer: (input) => chalk.cyanBright(input)
      }
    ]);

    // Check if directory exists
    const projectDir = path.join(process.cwd(), projectName);
    if (await fs.pathExists(projectDir)) {
      console.log(chalk.redBright(`\n❌ Directory '${projectName}' already exists!`));
      
      const { overwrite } = await inquirer.prompt([
        {
          type: "confirm",
          name: "overwrite",
          message: "Do you want to overwrite it?",
          default: false
        }
      ]);
      
      if (!overwrite) {
        console.log(chalk.yellow("Operation cancelled"));
        process.exit(0);
      }
      
      const removeSpinner = ora("Removing existing directory...").start();
      await fs.remove(projectDir);
      removeSpinner.succeed("Directory removed");
    }

    // Framework selection
    const { framework } = await inquirer.prompt([
      {
        type: "list",
        name: "framework",
        message: "Which framework would you like to use?",
        choices: [
          { name: "Next.js (App Router)", value: "nextjsapp" }
        ]
      }
    ]);

    if (framework === "none") {
      console.log(chalk.yellow("Okay! You can set up your project manually."));
      process.exit(0);
    }

    // Language selection
    const { language } = await inquirer.prompt([
      {
        type: "list",
        name: "language",
        message: "Which language would you like to use?",
        choices: [
          { name: "TypeScript - JavaScript with syntax for types", value: "typescript" },
          { name: "JavaScript - The language of the web", value: "javascript" }
        ]
      }
    ]);

    // Database selection
    const { db } = await inquirer.prompt([
      {
        type: "list",
        name: "db",
        message: "Choose your Database and ORM:",
        choices: [
          { name: "Neon", value: "neon" },
          { name: "Neon with Prisma", value: "neonprisma" },
        ]
      }
    ]);

    let auth = "none";
    let authMethod = "none";
    let payment = "none";
    let email = "none";

    // Authentication selection (only if database is selected)
    if (db !== "none") {
      const authAnswer = await inquirer.prompt([
        {
          type: "list",
          name: "auth",
          message: "Which authentication strategy would you like to use?",
          choices: [
            { name: "Better-Auth - Modern auth library", value: "betterauth" },
          ]
        }
      ]);
      auth = authAnswer.auth;

      // OAuth method selection (only if auth is not "none")
        const methodAnswer = await inquirer.prompt([
          {
            type: "list",
            name: "authMethod",
            message: "Which authentication method would you like to use?",
            choices: [
              { name: "Email and Password", value: "emailpassword" },
              { name: "OAuth (Google, GitHub, etc.)", value: "oauth" },
            ]
          }
        ]);
        authMethod = methodAnswer.authMethod;
      

      // Payment provider selection
      const paymentAnswer = await inquirer.prompt([
        {
          type: "list",
          name: "payment",
          message: "Choose a payment provider:",
          choices: [
            { name: "Dodo Payments - Simple payment solution", value: "dodo" },
          ]
        }
      ]);
      payment = paymentAnswer.payment;

      // Email provider selection
      const emailAnswer = await inquirer.prompt([
        {
          type: "list",
          name: "email",
          message: "Choose an email provider:",
          choices: [
            { name: "Resend - Modern email API", value: "resend" },
          ]
        }
      ]);
      email = emailAnswer.email;
    }

    // Generate template key and get repository
    const templateKey = generateTemplateKey(framework, language, db, auth, authMethod, payment, email);

    if (DEBUG) {
      console.log(chalk.dim(`\nTemplate key: ${templateKey}`));
    }

    let repoUrl = boilerplates[templateKey];

    // Use fallback if exact match not found
    if (!repoUrl) {
      console.log(chalk.yellow(`\n⚠️  Specific template not available for: ${templateKey}`));
      console.log(chalk.yellow(`Using closest match instead...\n`));
      repoUrl = getFallbackTemplate(framework, language);
    }

    if (DEBUG) {
      console.log(chalk.dim(`Repository: ${repoUrl}\n`));
    }

    // Clone repository
    console.log(chalk.magentaBright(`📦 Creating ${projectName}...`));
    const cloneSpinner = ora("Downloading template...").start();

    try {
      const emitter = degit(repoUrl, {
        cache: false,
        force: true,
        verbose: DEBUG
      });

      if (DEBUG) {
        emitter.on("info", (info) => {
          cloneSpinner.text = chalk.dim(info.message);
        });
      }

      await emitter.clone(projectDir);
      cloneSpinner.succeed(chalk.greenBright("Template downloaded successfully!"));
      
      // Update package.json with the correct project name
      await updatePackageJson(projectDir, projectName);
      
    } catch (error) {
      cloneSpinner.fail(chalk.redBright("Failed to download template"));
      throw new Error(`Template download failed: ${error.message}`);
    }

    // Ask about dependency installation
    const { autoInstall } = await inquirer.prompt([
      {
        type: "confirm",
        name: "autoInstall",
        message: "Would you like to install dependencies now?",
        default: true
      }
    ]);

    if (autoInstall) {
      await installDependencies(projectDir, projectName);
    }

    // Success message and next steps
    console.log(chalk.greenBright.bold(`\n✅ Project ${projectName} created successfully!\n`));

    console.log(chalk.bold("📋 Next steps:"));
    console.log(chalk.cyanBright(`  cd ${projectName}`));
    
    if (!autoInstall) {
      console.log(chalk.cyanBright(`  npm install`));
    }

    // Environment setup instructions
    if (db !== "none" || auth !== "none" || payment !== "none" || email !== "none") {
      console.log(chalk.cyanBright(`  # Set up your environment variables in .env`));
    }

    console.log(chalk.cyanBright(`  npm run dev\n`));

    // Additional setup notes
    console.log(chalk.bold("⚙️  Configuration needed:"));
    
    if (auth !== "none") {
      console.log(chalk.yellow(`  • ${auth.toUpperCase()} - Configure authentication credentials`));
    }

    if (db !== "none") {
      console.log(chalk.yellow(`  • ${db.toUpperCase()} - Set up database connection`));
    }

    if (payment !== "none") {
      console.log(chalk.yellow(`  • ${payment.toUpperCase()} - Add API keys for payment processing`));
    }

  
    if (email !== "none") {
      console.log(chalk.yellow(`  • ${email.toUpperCase()} - Configure email provider credentials`));
    }

    console.log(chalk.dim(`\n💡 Need help? Visit: https://github.com/yourusername/builtstack\n`));

  } catch (error) {
    // Handle specific error types
    if (error.isTtyError) {
      console.error(chalk.redBright("\n❌ Prompt couldn't be rendered in the current environment"));
      console.error(chalk.yellow("Try running in a different terminal or with --debug flag"));
    } else if (error.message && error.message.includes("User force closed")) {
      console.log(chalk.yellow("\n\n👋 Operation cancelled by user"));
      process.exit(0);
    } else {
      console.error(chalk.redBright("\n❌ Error:"), error.message);
      
      if (DEBUG) {
        console.error(chalk.dim("\nFull error details:"));
        console.error(error.stack);
      } else {
        console.error(chalk.dim("Run with --debug for more details"));
      }
    }
    
    process.exit(1);
  }
}

// Handle uncaught errors
process.on("uncaughtException", (error) => {
  console.error(chalk.redBright("\n❌ Uncaught Exception:"), error.message);
  if (DEBUG) {
    console.error(error.stack);
  }
  process.exit(1);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error(chalk.redBright("\n❌ Unhandled Rejection:"), reason);
  if (DEBUG) {
    console.error("Promise:", promise);
  }
  process.exit(1);
});

// Handle CTRL+C gracefully
process.on("SIGINT", () => {
  console.log(chalk.yellow("\n\n👋 Operation cancelled by user"));
  process.exit(0);
});

// Run the CLI
run().catch((err) => {
  console.error(chalk.redBright("❌ Fatal Error:"), err.message);
  process.exit(1);
});
