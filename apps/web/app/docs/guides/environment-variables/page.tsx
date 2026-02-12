const EnvironmentVariablesGuidePage = () => (
  <div className="p-8 max-w-3xl">
    <h1 className="text-3xl font-semibold text-neutral-300 mb-4">Environment Variables Guide</h1>
    <p className="text-neutral-400 mb-4">How to manage environment variables in your BuiltStack project.</p>
    <ol className="list-decimal list-inside text-neutral-400 mb-4 space-y-2">
      <li>Create a <code className="bg-neutral-800 px-2 py-1 rounded">.env</code> file in your project root.</li>
      <li>Add variables like <b>DATABASE_URL</b>, <b>RESEND_API_KEY</b>, etc.</li>
      <li>Never commit your <code>.env</code> file to version control.</li>
      <li>Use environment variable management in your deployment platform for production secrets.</li>
    </ol>
    <p className="text-neutral-400">See the <a href="https://12factor.net/config" className="text-blue-400 underline">12 Factor App</a> for best practices.</p>
  </div>
);

export default EnvironmentVariablesGuidePage;
