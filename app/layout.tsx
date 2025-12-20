import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./components/Home/navbar/responsiveNav";
const geistSans = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Portfolio Site",
  description: "Welcome to my portfolio site built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans} antialiased bg-[#0d0d1a] ` }
      >
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
