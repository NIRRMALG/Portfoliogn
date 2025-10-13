"use client";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { CursorFluid } from "@/components/cursor-fluid";
import { Suspense, useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const theme =
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.className = theme === "dark" ? "scroll-smooth dark" : "scroll-smooth";

    // Dynamically update body styles
    const rootStyles = getComputedStyle(document.documentElement);
    document.body.style.backgroundColor = rootStyles.getPropertyValue("--background");
    document.body.style.color = rootStyles.getPropertyValue("--foreground");
  }, []);

  return (
    <html lang="en" className="scroll-smooth" data-theme="light">
      <head />
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans`}>
        <Suspense fallback={<div>Loading...</div>}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
            {children}
          </ThemeProvider>
        </Suspense>

        {/* Cursor effects */}
        <CursorFluid enabled={true} />

        <Analytics />
      </body>
    </html>
  );
}
