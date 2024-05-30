import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Goldman } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const goldman = Goldman({ weight: '400', subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grazielle's Portfolio",
  description: "Check out my portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={goldman.className}>{children}</body>
    </html>
  );
}
