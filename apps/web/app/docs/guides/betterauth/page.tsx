const BetterAuthGuidePage = () => (
  <div className="p-8 max-w-3xl">
    <h1 className="text-3xl font-semibold text-neutral-300 mb-4">BetterAuth Integration Guide</h1>
    <p className="text-neutral-400 mb-4">Learn how to add authentication to your BuiltStack project using BetterAuth.</p>
    <ol className="list-decimal list-inside text-neutral-400 mb-4 space-y-2">
      <li>Sign up at <a href="https://betterauth.dev" className="text-blue-400 underline">BetterAuth</a> and create a new application.</li>
      <li>Copy your client ID and secret from the BetterAuth dashboard.</li>
      <li>Install the BetterAuth SDK in your project: <code className="bg-neutral-800 px-2 py-1 rounded">npm install betterauth</code></li>
      <li>Configure your environment variables with your BetterAuth credentials.</li>
      <li>Follow the BuiltStack CLI prompts to enable authentication, or manually add the integration in your codebase.</li>
    </ol>
    <p className="text-neutral-400">For advanced usage, see the <a href="https://docs.betterauth.dev" className="text-blue-400 underline">BetterAuth docs</a>.</p>
  </div>
);

export default BetterAuthGuidePage;
