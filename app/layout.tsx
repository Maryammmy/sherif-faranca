import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import QueryProvider from "@/provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  fallback: ["system-ui", "arial"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  fallback: ["ui-monospace", "SFMono-Regular", "Consolas", "monospace"],
});

export const metadata: Metadata = {
  title: "Sherif Faranca",
  description:
    "Achieve your fitness goals with Sherif Faranca — personalized workouts, expert tips, and real results. Start your transformation today.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen">
          <QueryProvider>{children}</QueryProvider>
          <Toaster />
        </div>
      </body>
    </html>
  );
}
