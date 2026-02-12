import type { Metadata } from "next";
import "./globals.css";
import { Geist } from 'next/font/google'
import Navbar from "./components/navbar";

const geist = Geist({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "The Foundation for Your Web App - BuiltStack",
  description: "BuiltStack is a powerful open-source framework that provides a solid foundation for building web applications. With its robust features and flexible architecture, BuiltStack empowers developers to create scalable and efficient web apps with ease.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.className}>
      <body className="no-scrollbar">
            <Navbar />
            {children}
      </body>
    </html>
  )
}
