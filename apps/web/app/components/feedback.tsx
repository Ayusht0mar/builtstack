"use client";

import { useState, useRef, useEffect } from "react";

const Feedback = () => {


    const [feedbackOpen, setFeedbackOpen] = useState(false);
    const feedbackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!feedbackOpen) return;
        function handleClickOutside(event: MouseEvent) {
            if (feedbackRef.current && !feedbackRef.current.contains(event.target as Node)) {
                setFeedbackOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [feedbackOpen]);

    return (
        <div ref={feedbackRef}>
            <button onClick={() => setFeedbackOpen(!feedbackOpen)}>
                <p className="text-sm text-neutral-500 hover:text-neutral-300 leading-none">Feedback</p>
            </button>
            {
                feedbackOpen && (
                    <div className="absolute mt-2 border border-neutral-900 bg-neutral-900 p-2 rounded-lg min-w-[400px] z-50 shadow-xl">
                        <div className="flex flex-col my-1 gap-1">
                            <h3 className="text-neutral-300 leading-none">Give Feedback</h3>
                            <p className="text-sm text-neutral-500">We'd love to hear what went well or how we can improve</p>
                        </div>
                        <div className="flex flex-col items-end mt-2">
                            <textarea
                                placeholder="Your feedback..."
                                className="w-full p-2 h-24 rounded bg-neutral-800 border border-neutral-800 text-sm text-neutral-300 resize-none no-scrollbar focus:outline-none focus:border-neutral-700"
                                rows={5}
                            />
                            <button className="mt-2 px-3 py-1 bg-neutral-50 text-neutral-900 rounded text-sm w-fit">
                                Submit
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Feedback;