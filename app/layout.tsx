import React from "react";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";
import Navbar from "@/components/navbar/Navbar";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JobIt - A Job Finder Application",
  description:
    "Elevate Your Developer Career. Dive into a curated collection of developer job opportunities, unlock new possibilities, and advance your coding journey with JobIt.",
  icons: {
    icon: "/icons/logo/jobit.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.className} bg-natural3 dark:bg-dark1`}>
        <ThemeProvider>
          <Navbar />
          <main className="mb-12 px-6 pt-[6.88rem] md:pt-[7.5rem] lg:px-20">
            <div className="mx-auto max-w-[1400px]">{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
