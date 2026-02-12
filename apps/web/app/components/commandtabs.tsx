"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

const commands = [
  { name: 'npm', command: 'npx builtstack@latest' },
  { name: 'bun', command: 'bun create builtstack@latest' },
  { name: 'yarn', command: 'yarn create builtstack@latest' },
  { name: 'pnpm', command: 'pnpm dlx builtstack@latest' },
];

const CommandTabs = () => {

    const [active, setActive] = useState('npm');
    const [copied, setCopied] = useState(false);

    const activeCommand = commands.find((c) => c.name === active)?.command;

    const handleCopy = () => {
        navigator.clipboard.writeText(activeCommand ?? "");
    }   

    return ( 
        <div className="border rounded-lg  border-neutral-900 bg-neutral-950/70 p-1.5 w-full max-w-md mt-4">
            <div className="mx-0.5">
                {commands.map((c) => (
                        <button
                            key={c.name}
                            onClick={() => setActive(c.name)}
                            className={`px-0.5 mx-1 text-sm  ${
                            c.name === active
                                ? 'border-b border-neutral-400 text-neutral-300'
                                : 'text-neutral-500 hover:text-neutral-400'
                            }`}
                        >
                            {c.name}
                        </button>
                    ))}
            </div>
            <pre className="px-2.5 py-2 flex justify-between rounded-md border border-neutral-800/70 bg-neutral-900/20 text-neutral-400">
            <code>{activeCommand}</code>
            <button
                onClick={() => {
                    handleCopy();
                    setCopied(true);
                    setTimeout(() => setCopied(false), 1200);
                }}
            >
                {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
            </pre>
        </div>
     );
}
 
export default CommandTabs;

