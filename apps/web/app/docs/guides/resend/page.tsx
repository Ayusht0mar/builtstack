const ResendEmailGuidePage = () => (
  <div className="p-8 max-w-3xl">
    <h1 className="text-3xl font-semibold text-neutral-300 mb-4">Resend Email Service Guide</h1>
    <p className="text-neutral-400 mb-4">Set up transactional email delivery in your BuiltStack project using Resend.</p>
    <ol className="list-decimal list-inside text-neutral-400 mb-4 space-y-2">
      <li>Sign up at <a href="https://resend.com" className="text-blue-400 underline">Resend</a> and create a new sender domain.</li>
      <li>Get your API key from the Resend dashboard.</li>
      <li>Install the Resend SDK: <code className="bg-neutral-800 px-2 py-1 rounded">npm install resend</code></li>
      <li>Add your API key to your <code className="bg-neutral-800 px-2 py-1 rounded">.env</code> file as <b>RESEND_API_KEY</b>.</li>
      <li>Use the BuiltStack CLI or update your code to send emails via Resend.</li>
    </ol>
    <p className="text-neutral-400">For more, see the <a href="https://resend.com/docs" className="text-blue-400 underline">Resend docs</a>.</p>
  </div>
);

export default ResendEmailGuidePage;
