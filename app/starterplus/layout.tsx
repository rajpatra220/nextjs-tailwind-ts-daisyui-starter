import type { Metadata } from "next";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Next.js + Tailwind CSS + TypeScript + daisyUI Starter Plus",
  description: "A starter for building modern web applications using Next.js, Tailwind CSS, TypeScript and daisyUI.",
};

export default function StarterplusLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Navbar />
        {children}
      <Footer />
    </div>
  );
}
