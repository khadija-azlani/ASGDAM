import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Navbar from "./nav";
import Footer from "./footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://asgdam.vercel.app"),
  
  title: {
    default: "ASGDAM ",
    template: "%s | ASGDAM",
  },

  description:
    "ASGDAM is a digital magazine bridging science, technology, philosophy, health, history, and culture through well-researched and analytical articles.",

  keywords: [
    "ASGDAM",
    "Digital Magazine",
    "Knowledge",
    "Science",
    "Technology",
    "Philosophy",
  
    "History",
    "Culture",
    "Moroccan Culture",
  ],

  authors: [
    {
      name: "Khadija Z.",
    },
  ],

  creator: "Khadija Z.",
  publisher: "ASGDAM",
  applicationName: "ASGDAM",
  category: "Magazine",

  icons: {
    icon: "/logo.jfif",
    shortcut: "/logo.jfif",
    apple: "/logo.jfif",
  },

  openGraph: {
    title: "ASGDAM | A World of Wisdom & Knowledge",
    description:
      "A digital magazine bridging science, technology, philosophy, health, history, and culture.",
    url: "https://asgdam.vercel.app",
    siteName: "ASGDAM",
    images: [
      {
        url: "/logo.jfif",
        width: 1200,
        height: 630,
        alt: "ASGDAM Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ASGDAM | A World of Wisdom & Knowledge",
    description:
      "A digital magazine for knowledge, intellect, science, technology, and culture.",
    images: ["/logo.jfif"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
