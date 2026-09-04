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
  description:
    "Mohammed Al-Hamawy is a front-end and WordPress developer building fast Next.js apps and scalable WordPress websites.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Mohammed Al-Hamawy",
    "front-end developer",
    "Next.js developer",
    "WordPress developer",
    "React developer",
  ],
  authors: [{ name: "Mohammed Al-Hamawy" }],
  openGraph: {
    title: "Mohammed Al-Hamawy | Front-End & WordPress Developer",
    description:
      "Fast Next.js apps and scalable WordPress websites built with a focus on UX and Core Web Vitals.",
    type: "website",
    url: "/",
    siteName: "Mohammed Al-Hamawy",
    images: [{ url: "/imgs/lP.jpg", width: 1200, height: 630, alt: "Mohammed Al-Hamawy portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Al-Hamawy | Front-End & WordPress Developer",
    description:
      "Fast Next.js apps and scalable WordPress websites built with a focus on UX and Core Web Vitals.",
    images: ["/imgs/lP.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    
    <html
      lang="en"
      className={`${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col light-bg">
        <SmoothCursor />
        {children}
        </body>
    </html>
  );
}
