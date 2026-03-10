import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ثانوية بلس",
  description: "منصة تعليمية تفاعلية لطلاب الثانوية العامة في مصر",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ backgroundColor: "#0f0f0f", color: "#fff" }}
        dir="rtl"   suppressHydrationWarning
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
