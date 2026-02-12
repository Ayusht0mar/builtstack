"use client";

import { Github } from "lucide-react";


const GitHubStars = () => {
    return (
        <div className="flex justify-center items-center gap-2 border w-full rounded px-1.5 py-0.5 bg-neutral-900 border-neutral-800 cursor-pointer">
            <Github color="#a1a1a1" size={14} />
            <p className="text-sm text-neutral-500">Open Source on GitHub</p>
        </div>
    );
}

export default GitHubStars;