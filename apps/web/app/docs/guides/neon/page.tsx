const NeonDatabaseGuidePage = () => (
  <div className="p-8 max-w-3xl">
    <h1 className="text-3xl font-semibold text-neutral-300 mb-4">Neon Database Integration Guide</h1>
    <p className="text-neutral-400 mb-4">How to connect your BuiltStack project to a Neon serverless Postgres database.</p>
    <ol className="list-decimal list-inside text-neutral-400 mb-4 space-y-2">
      <li>Sign up at <a href="https://neon.tech" className="text-blue-400 underline">Neon</a> and create a new database.</li>
      <li>Copy your database connection string from the Neon dashboard.</li>
      <li>Set the connection string in your <code className="bg-neutral-800 px-2 py-1 rounded">.env</code> file as <b>DATABASE_URL</b>.</li>
      <li>Run the BuiltStack CLI and select Neon as your database provider, or update your ORM config manually.</li>
      <li>Deploy your app and verify the connection.</li>
    </ol>
    <p className="text-neutral-400">For more details, visit the <a href="https://neon.tech/docs" className="text-blue-400 underline">Neon docs</a>.</p>
  </div>
);

export default NeonDatabaseGuidePage;
