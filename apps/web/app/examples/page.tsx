"use client";
import { SquareArrowOutUpRight } from "lucide-react";
import { useState, useMemo } from "react";

// Define types for better type safety
type Config = {
  framework: string;
  database: string;
  language: string;
  auth: string;
  authMethod: string;
  payment: string;
  email: string;
  addons: string;
};

// Define options data structure
const OPTIONS = {
  frameworks: [
    { id: 'nextjsapp', title: 'Next.js (app router)', description: 'React Framework', icon: '/logos/nextjs.svg' }
  ],
  languages: [
    { id: 'typescript', title: 'TypeScript', description: 'Typed JavaScript', icon: '/logos/typescript.svg' },
    { id: 'javascript', title: 'JavaScript', description: 'Dynamic JavaScript', icon: '/logos/javascript.svg' }
  ],
  databases: [
    { id: 'neonprisma', title: 'Neon with Prisma', description: 'Serverless Postgres with ORM', icon: '/logos/neon.svg'},
    { id: 'neon', title: 'Neon', description: 'ORM for your database', icon: '/logos/prisma.svg' },
  ],
  auth: [
    { id: 'betterauth', title: 'BetterAuth', description: 'Authentication for your app', icon: '/logos/better-auth.svg' },
  ],
  authMethods: [
    { id: 'emailpassword', title: 'Email and Password', description: 'Third-party authentication', icon: '/logos/oauth.svg' },
    { id: 'oauth', title: 'OAuth', description: 'Email-based authentication', icon: '/logos/email.svg' },
  ],
  payments: [
    { id: 'dodo', title: 'Dodo Payments', description: 'Credit card payments', icon: '/logos/dodo-payments.svg' },
  ],
  emails: [
    { id: 'resend', title: 'Resend', description: 'Email delivery service', icon: '/logos/resend.svg' },
  ],
  addons: [
    { id: 'analytics', title: 'Analytics', description: 'Analytics service', icon: '/logos/vercel-analytics.svg' }
  ]
};

// Component for option buttons
const OptionButton = ({ 
  isSelected, 
  onClick, 
  title
}: {
  isSelected: boolean;
  onClick: () => void;
  title: string;
}) => (
  <button 
    onClick={onClick} 
    className={`flex leading-none rounded transition-colors text-sm text-neutral-500 px-1.5 py-0.5 cursor-pointer ${
      isSelected ? 'border w-full rounded  bg-neutral-900 border-neutral-800 ' : ''
    }`}
  >
    <span className="text-sm">{title}</span>
  </button>
);

// Component for option sections
const OptionSection = ({ 
  title, 
  children 
}: { 
  title: string; 
  children: React.ReactNode; 
}) => (
  <div>
    <div className="flex items-center mb-1">
      <span className="text-xs text-neutral-400">{title}</span>
    </div>
    <div className="flex flex-col space-y-1 text-nowrap">
      {children}
    </div>
  </div>
);

const ExamplesPage = () => {
  // Consolidate all state into a single object
  const [config, setConfig] = useState<Config>({
    framework: 'nextjsapp',
    database: 'neonprisma',
    language: 'typescript',
    auth: 'betterauth',
    authMethod: 'emailpassword',
    payment: 'dodo',
    email: 'resend',
    addons: ''
  });

  // Memoize expensive calculations
  const selectedExample = useMemo(() => {
    const { framework, database, language, auth, authMethod, payment, email, addons } = config;
    return framework + '-' + language + '-' + database + '-' + auth + '-' + authMethod + '-' + payment + '-' + email + (addons ? '-' + addons : '');
  }, [config]);

  const selectedExampleUrl = useMemo(() => 
    `https://${selectedExample}.builtstack.co`, 
    [selectedExample]
  );

  // Generic update function
  const updateConfig = (key: keyof Config, value: string) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  // Toggle function for add-ons
  const toggleAddon = (addon: string) => {
    setConfig(prev => ({ 
      ...prev, 
      addons: prev.addons === addon ? '' : addon 
    }));
  };

  return (
    <div className="max-w-6xl mx-auto h-[calc(100vh-52px)] overflow-hidden">
      <div className="flex item w-full gap-2">
        <div className="border rounded-lg overflow-hidden border-neutral-800/70 w-full h-[calc(100vh-60px)] flex flex-col ">
          <div className="flex justify-between items-center p-2 border-b border-neutral-800/70">
            <p className="text-neutral-600 leading-none">{selectedExample}</p>
            <a href={selectedExampleUrl} target="_blank" rel="noopener noreferrer" className="mr-2">
              <SquareArrowOutUpRight size={16} color="#525252"/>
            </a>
          </div>
          <iframe className="w-full h-full no-scrollbar" src={selectedExampleUrl} title="Example Preview" />
        </div>
        <div className="grid grid-cols-1 min-w-50 gap-6 h-[calc(100vh-60px)] overflow-y-scroll no-scrollbar py-2">
          <OptionSection title="Frameworks">
            {OPTIONS.frameworks.map(option => (
              <OptionButton
                key={option.id}
                isSelected={config.framework === option.id}
                onClick={() => updateConfig('framework', option.id)}
                title={option.title}
              />
            ))}
          </OptionSection>

          <OptionSection title="Database">
            {OPTIONS.databases.map(option => (
              <OptionButton
                key={option.id}
                isSelected={config.database === option.id}
                onClick={() => updateConfig('database', option.id)}
                title={option.title}
              />
            ))}
          </OptionSection>

          <OptionSection title="Language">
            {OPTIONS.languages.map(option => (
              <OptionButton
                key={option.id}
                isSelected={config.language === option.id}
                onClick={() => updateConfig('language', option.id)}
                title={option.title}
              />
            ))}
          </OptionSection>

          <OptionSection title="Authentication">
            {OPTIONS.auth.map(option => (
              <OptionButton
                key={option.id}
                isSelected={config.auth === option.id}
                onClick={() => updateConfig('auth', option.id)}
                title={option.title}
              />
            ))}
          </OptionSection>

          <OptionSection title="Auth Method">
            {OPTIONS.authMethods.map(option => (
              <OptionButton
                key={option.id}
                isSelected={config.authMethod === option.id}
                onClick={() => updateConfig('authMethod', option.id)}
                title={option.title}
              />
            ))}
          </OptionSection>

          <OptionSection title="Payment">
            {OPTIONS.payments.map(option => (
              <OptionButton
                key={option.id}
                isSelected={config.payment === option.id}
                onClick={() => updateConfig('payment', option.id)}
                title={option.title}
              />
            ))}
          </OptionSection>

          <OptionSection title="Email Service">
            {OPTIONS.emails.map(option => (
              <OptionButton
                key={option.id}
                isSelected={config.email === option.id}
                onClick={() => updateConfig('email', option.id)}
                title={option.title}
              />
            ))}
          </OptionSection>

          <OptionSection title="Add-ons">
            {OPTIONS.addons.map(option => (
              <OptionButton
                key={option.id}
                isSelected={config.addons === option.id}
                onClick={() => toggleAddon(option.id)}
                title={option.title}
              />
            ))}
          </OptionSection>
        </div>
      </div>
    </div>
  )
};

export default ExamplesPage;