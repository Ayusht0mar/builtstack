const TroubleshootingGuidePage = () => (
  <div className="p-8 max-w-3xl">
    <h1 className="text-3xl font-semibold text-neutral-300 mb-4">Troubleshooting Guide</h1>
    <ul className="list-disc list-inside text-neutral-400 mb-4 space-y-2">
      <li><b>Build errors?</b> Ensure all dependencies are installed and your environment variables are set correctly.</li>
      <li><b>Database connection issues?</b> Double-check your <code className="bg-neutral-800 px-2 py-1 rounded">DATABASE_URL</code> and network access.</li>
      <li><b>Email not sending?</b> Verify your Resend API key and sender domain configuration.</li>
      <li><b>Authentication not working?</b> Check your BetterAuth credentials and callback URLs.</li>
      <li><b>Still stuck?</b> Reach out via support@builtstack.dev or GitHub issues for help.</li>
    </ul>
  </div>
);

export default TroubleshootingGuidePage;
