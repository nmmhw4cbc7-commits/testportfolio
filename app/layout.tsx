import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Philipp Dachtler | AI Engineer & Full-Stack Developer",
  description: "Dunkle, interaktive 3D Creative Developer Landingpage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={`${inter.className} bg-[#050508] text-white overflow-x-hidden selection:bg-purple-900/50`}>
        {children}
      </body>
    </html>
  );
}
