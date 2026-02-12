const NextJsGuidePage = () => (
  <div className="p-8 max-w-3xl">
    <h1 className="text-3xl font-semibold text-neutral-300 mb-4">Next.js Guide</h1>
    <p className="text-neutral-400 mb-4">How to use BuiltStack with Next.js for modern web development.</p>
    <ol className="list-decimal list-inside text-neutral-400 mb-4 space-y-2">
      <li>Ensure you have Node.js (v14+) and a package manager (npm, yarn, pnpm, or bun) installed.</li>
      <li>Use the BuiltStack CLI to scaffold a new Next.js app: <code className="bg-neutral-800 px-2 py-1 rounded text-nowrap">npx builtstack create my-app</code></li>
      <li>Navigate to your app folder and start the dev server: <code className="bg-neutral-800 px-2 py-1 rounded text-nowrap">cd my-app &amp;&amp; npm run dev</code></li>
      <li>Edit <code className="bg-neutral-800 px-2 py-1 rounded">app/page.tsx</code> and <code>app/components/</code> to customize your site.</li>
      <li>Configure features like authentication, database, and email using the CLI prompts or by editing config files.</li>
      <li>Deploy your app to Vercel, Netlify, or your preferred platform (see Deployment guide).</li>
    </ol>
    <h2 className="text-2xl font-semibold text-neutral-300 mt-8 mb-4">Tips</h2>
    <ul className="list-disc list-inside text-neutral-400 mb-4 space-y-2">
      <li>Use <b>app/</b> directory for routing and layouts (Next.js 13+).</li>
      <li>Leverage <b>tailwind.config.js</b> for custom styling.</li>
      <li>Check <a href="https://nextjs.org/docs" className="text-blue-400 underline">Next.js docs</a> for advanced features.</li>
    </ul>
    <p className="text-neutral-400">For more, see the CLI and Project Structure guides.</p>
  </div>
);

export default NextJsGuidePage;