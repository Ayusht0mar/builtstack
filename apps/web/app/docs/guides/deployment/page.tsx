const DeploymentGuidePage = () => (
  <div className="p-8 max-w-3xl">
    <h1 className="text-3xl font-semibold text-neutral-300 mb-4">Deployment Guide</h1>
    <p className="text-neutral-400 mb-4">How to deploy your BuiltStack project to production.</p>
    <ol className="list-decimal list-inside text-neutral-400 mb-4 space-y-2">
      <li>Choose a deployment platform (Vercel, Netlify, AWS, etc.).</li>
      <li>Set up environment variables in your platform's dashboard.</li>
      <li>Push your code to a Git repository (GitHub, GitLab, etc.).</li>
      <li>Connect your repository to your deployment platform.</li>
      <li>Trigger a deployment and verify your app is live.</li>
    </ol>
    <p className="text-neutral-400">For platform-specific steps, see their respective documentation.</p>
  </div>
);

export default DeploymentGuidePage;
