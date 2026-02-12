"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        question: "Is BuiltStack free to use?",
        answer:
            "Yes, BuiltStack is completely free to use. You can build and deploy your applications without any cost.",
    },
    {
        question: "How do I get started with BuiltStack?",
        answer:
            "Getting started with BuiltStack is easy. Head over to the documentation to find guides and tutorials that help you set up your first project in minutes.",
    },
    {
        question: "What technologies does BuiltStack support?",
        answer:
            "BuiltStack supports popular databases, authentication providers, payment gateways, and email services. Check the docs for the most up-to-date integrations.",
    },
    {
        question: "Can I contribute to BuiltStack?",
        answer:
            "Absolutely. BuiltStack is open source and we welcome contributions from the community. Visit the GitHub repository to open issues, suggest features, or submit pull requests.",
    },
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleItem = (index: number) => {
        setOpenIndex((current) => (current === index ? null : index));
    };

    return (
        <section className="mt-24 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center">
                    <h2 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-100 sm:text-4xl">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-3 text-sm text-neutral-500 sm:text-base max-w-2xl mx-auto text-balance">
                        Everything you need to know about using BuiltStack, from getting
                        started to shipping production-ready apps.
                    </p>
                </div>

                <div className="mt-10 space-y-3 max-w-2xl mx-auto">
                    {faqs.map((item, index) => (
                        <button
                            key={item.question}
                            type="button"
                            onClick={() => toggleItem(index)}
                            className="w-full cursor-pointer text-left rounded-xl border border-neutral-900 bg-neutral-950/70 px-4 py-3 sm:px-5 sm:py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-900/70 focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-600"
                        >
                            <div className="flex items-center justify-between gap-4">
                                <p className="text-sm font-medium text-neutral-100 sm:text-base">
                                    {item.question}
                                </p>
                                <ChevronDown
                                    className={`h-4 w-4 shrink-0 text-neutral-500 transition-transform duration-200 ${
                                        openIndex === index ? "rotate-180" : "rotate-0"
                                    }`}
                                />
                            </div>
                            <div
                                className={`overflow-hidden text-sm text-neutral-500 transition-all duration-200 ${
                                    openIndex === index
                                        ? "mt-2 max-h-40 opacity-100"
                                        : "max-h-0 opacity-0"
                                }`}
                            >
                                <p className="leading-relaxed">{item.answer}</p>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;