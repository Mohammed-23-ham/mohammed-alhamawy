import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SmoothCursor } from "@/components/ui/smooth-cursor"

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohammed Al-Hamawy",
  description: "My personal portfolio with my projects and experience.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    
    <html
      lang="en"
      className={`${plusJakartaSans.variable} h-full antialiased`}
    >
      <head>
        <meta property="og:image" content="./enterface.jpg" />
      </head>
      <body className="min-h-full flex flex-col light-bg">
        <SmoothCursor />
        {children}
        </body>
    </html>
  );
}
