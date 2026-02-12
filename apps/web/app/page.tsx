import CommandTabs from "./components/commandtabs";
import Stack from "./components/stack";
import FAQSection from "./components/faq-section";
import { Circle, Diamond, TerminalIcon } from "lucide-react";


const cli = [
            {
              label: "Select Framework:",
              options: [{ text: "Next.js (App Router)", circle: true }],
            },
            {
              label: "Select Database:",
              options: [
          { text: "Neon", circle: true },
          { text: "Neon with Prisma", circle: true },
              ],
            },
            {
              label: "Select Language:",
              options: [{ text: "TypeScript" }],
            },
            {
              label: "Select Authentication:",
              options: [{ text: "BetterAuth" }],
            },
            {
              label: "Select Auth Method:",
              options: [{ text: "Email & Password" }],
            },
            {
              label: "Select Payment Integration:",
              options: [{ text: "Dodo Payments" }],
            },
            {
              label: "Select Email Service:",
              options: [{ text: "Resend" }],
            },
            {
              label: "Select Add-ons:",
              options: [{ text: "None" }],
            },
          ];


export default function Home() {
  return (
    <div>
      <div className="z-1 flex flex-col gap-2 justify-center items-center py-30">
        <p className="text-center text-neutral-200 leading-tighter text-5xl font-semibold tracking-tight text-balance lg:leading-[1.1] lg:font-semibold xl:text-5xl xl:tracking-tighter max-w-4xl">The Foundation for your Web App</p>
        <p className="text-neutral-500 text-center max-w-3xl text-base text-balance sm:text-lg">Authentication, database, payments, email, and everything else your app needs fully built and ready on day one. Start with a complete foundation, not a blank folder.</p>
        <CommandTabs/>
      </div>
      <Stack/>
      <Terminal/>
      <FAQSection/>


      <footer className="w-full py-4 border-t mt-20 border-t-neutral-900">
        <div className="max-w-6xl flex justify-between items-center mx-auto">
            <p className="text-neutral-500 text-sm">
              © {new Date().getFullYear()} BuiltStack. All rights reserved.
            </p>
            <p className="text-neutral-500 text-sm">Built by 
              <a href="https://ayushtomar.in" target="_blank" rel="noopener noreferrer" className="ml-1 text-neutral-400">Ayush Tomar</a>.
            </p>
        </div>
      </footer>

    </div>
  )
}

const Terminal = () => {
  return (
    <div className="mx-auto rounded-xl border border-neutral-900 bg-neutral-950/70 max-w-2xl my-24">
      <div className="border-b border-neutral-900 p-2 flex items-center ">
          <TerminalIcon color="#a1a1a1" size={18}/>
          <span className="ml-2 text-neutral-400 font-mono text-sm">Terminal</span>
      </div>
      <div className="p-4">
        <div className="bg-neutral-950/50 text-neutral-400 font-mono text-sm overflow-x-auto flex flex-col gap-4">
          <p className="text-neutral-300">
            npx builtstack@latest
          </p>

        {
          cli.map((command, index) => (
            <div key={index}>
              <div className="text-neutral-300 flex items-center gap-2">
                <Diamond color="#d4d4d4" size={10}/>
                <p>
                  {command.label}
                </p>
              </div>
              <div className="ml-4 flex flex-col gap-2 mt-1 mb-1">
                {
                  command.options.map((option, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Circle color="#a1a1a1" size={8}/>
                      <span>{option.text}</span>
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }

        <p>Generating your BuiltStack project...</p>
        <p className="text-neutral-300">Your BuiltStack project is ready!</p>
      </div>
      </div>
    </div>
  )
}
