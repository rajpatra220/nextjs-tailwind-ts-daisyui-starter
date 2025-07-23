import type { Metadata } from "next";
import "@/app/globals.css";
import Drawer from "@/components/Drawer";

export const metadata: Metadata = {
  title: "Next.js + Tailwind CSS + TypeScript + daisyUI Admin Starter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Drawer>{children}</Drawer>
  );
}
