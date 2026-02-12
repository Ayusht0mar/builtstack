import { Terminal } from "lucide-react";
import GitHubStars from "./githubstars";

const Navbar = () => {
    return (
         <div className="flex justify-between items-center max-w-6xl mx-auto my-3">
          <div className="flex items-center gap-4">
            <a href="/" className="rounded-md hover:bg-neutral-900 p-1 px-2 w-fit flex items-center gap-2">
              <Terminal color="#dfdfdf" size={18}/>
              <h1 className="text-sm font-medium text-neutral-300">BuiltStack</h1>
            </a>
            <div className="flex gap-4">
              <button>
                <a href="/docs">
                  <p className="text-sm text-neutral-500 hover:text-neutral-300">Documentation</p>
                </a>
              </button>
              <button>
                <a href="/examples">
                  <p className="text-sm text-neutral-500 hover:text-neutral-300">Examples</p>
                </a>
              </button>
              <button>
                <a href="/sponsors">
                  <p className="text-sm text-neutral-500 hover:text-neutral-300">Sponsors</p>
                </a>
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <GitHubStars/>
          </div>
      </div>
    );
}

export default Navbar;