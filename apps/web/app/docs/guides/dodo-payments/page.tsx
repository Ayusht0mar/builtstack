const DodoPaymentsGuidePage = () => (
  <div className="p-8 max-w-3xl">
    <h1 className="text-3xl font-semibold text-neutral-300 mb-4">Dodo Payments Integration Guide</h1>
    <p className="text-neutral-400 mb-4">Integrate Dodo Payments for seamless payment processing in your BuiltStack app.</p>
    <ol className="list-decimal list-inside text-neutral-400 mb-4 space-y-2">
      <li>Register at <a href="https://dodopayments.com" className="text-blue-400 underline">Dodo Payments</a> and create a merchant account.</li>
      <li>Get your API keys from the Dodo Payments dashboard.</li>
      <li>Install the Dodo Payments SDK: <code className="bg-neutral-800 px-2 py-1 rounded">npm install dodo-payments</code></li>
      <li>Configure your environment variables with your API keys.</li>
      <li>Follow the BuiltStack CLI prompts to enable payments, or add the integration manually in your codebase.</li>
    </ol>
    <p className="text-neutral-400">See the <a href="https://docs.dodopayments.com" className="text-blue-400 underline">Dodo Payments docs</a> for advanced features.</p>
  </div>
);

export default DodoPaymentsGuidePage;
