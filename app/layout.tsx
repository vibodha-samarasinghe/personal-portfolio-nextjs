import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import StarsBackground from "@/components/StarsBackground";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Vibodha Samarasinghe | Portfolio",
  description: "ICT Undergraduate Portfolio",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >

      <body
        suppressHydrationWarning
        className="min-h-screen bg-black text-white overflow-x-hidden"
      >

        <StarsBackground />

        {children}

      </body>

    </html>

  );

}