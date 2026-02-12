import CommandTabs from "../../components/commandtabs";

const CLICommandsPage = () => {
    return (
        <div className="flex-1 p-8">
            <div className="max-w-4xl">
                <h1 className="text-3xl font-semibold text-neutral-300 mb-4">
                    CLI Commands
                </h1>
                <p className="text-neutral-400 leading-relaxed">
                    Complete reference for BuiltStack CLI commands and options.
                </p>
                <h2 className="text-2xl font-semibold text-neutral-300 mt-8 mb-4">
                Pre requisites:
                </h2>
                <ul className="list-disc list-inside text-neutral-400 leading-relaxed mb-6">
                    <li>Node.js (v14 or later)</li>
                    <li>Package manager (npm, bun, yarn, or pnpm)</li>
                    <li>Git (v2.0 or later)</li>
                </ul>

                <CommandTabs/>
            </div>
        </div>
    );
};

export default CLICommandsPage;