import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Curly Braces — Olya Yeritspokhyan",
    template: "%s · Curly Braces",
  },
  description:
    "Notes from a senior mobile engineer working in Swift, SwiftUI, and Flutter.",
  authors: [{ name: "Olya Yeritspokhyan" }],
  openGraph: {
    title: "Curly Braces — Olya Yeritspokhyan",
    description:
      "Notes from a senior mobile engineer working in Swift, SwiftUI, and Flutter.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-bg text-ink">
        {children}
      </body>
    </html>
  );
}
