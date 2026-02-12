"use client"
import { CircleEllipsis, CreditCard, Database, Mail, ScanFace, Terminal } from "lucide-react";
import Image from "next/image";

const StackList = [
    {
        name: "Framework",
        icon: Terminal,
        content: [
            {
                title: "Next.js",
                logo: "/logos/nextjs.svg"
            }
        ]
    },
    {
        name: "Database",
        icon: Database,
        content: [
            {
                title: "Neon",
                logo: "/logos/neon.svg"
            },
            {
                title: "Supabase",
                logo: "/logos/supabase.svg"
            }
        ]
    },
    {
        name: "Authentication",
        icon: ScanFace,
        content: [
            {
                title: "BetterAuth",
                logo: "/logos/better-auth.svg"
            }
        ]
    },
    {
        name: "Payment",
        icon: CreditCard,
        content: [
            {
                title: "Dodo Payments",
                logo: "/logos/dodo-payments.svg"
            }
        ]
    },
    {
        name: "Email",
        icon: Mail,
        content: [
            {
                title: "Resend",
                logo: "/logos/resend.svg"
            }
        ]
    },
    {
        name: "Add ons",
        icon: CircleEllipsis,
        content: [
            {
                title: "Vercel Analytics",
                logo: "/logos/vercel-analytics.svg"
            }
        ]
    }
]

const Stack = () => {


    return (
        <div>
                <div className="grid grid-cols-6 max-w-4xl mx-auto">
                    {StackList.map((item) => (
                        <div className="relative group" key={item.name}>
                            <div key={item.name} className={`flex flex-col justify-between items-center gap-2 py-4 `}>
                                <item.icon/>
                                <p>{item.name}</p>
                            </div>
                            <div className="flex-col justify-center items-center gap-2  absolute  bottom-24 w-full rounded-md hidden group-hover:flex">
                                {item.content.map((subitem) => (
                                    <div key={subitem.title} className="flex justify-center items-center gap-2 border w-full rounded px-2 py-1 bg-neutral-900 border-neutral-800">
                                        <Image src={subitem.logo} alt={subitem.title} width={14} height={14} className="overflow-hidden"/>
                                        <p className="text-sm text-neutral-400">{subitem.title}</p>
                                    </div>
                                ))}
                            </div>
                        </div>


                    ))}
                </div>
        </div>
    )
}

export default Stack;