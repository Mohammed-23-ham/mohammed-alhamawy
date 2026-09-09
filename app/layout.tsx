import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

const socialImage = "/imgs/lP.jpg?v=2";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohammed Al-Hamawy",
  description:
    "Mohammed Al-Hamawy is a front-end and WordPress developer building fast Next.js apps and scalable WordPress websites.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://mohammed-alhamawy.vercel.app",
  ),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/icon.webp", type: "image/png" }],
    shortcut: ["/icon.webp"],
    apple: [{ url: "/icon.webp", type: "image/png" }],
  },
  keywords: [
    "Mohammed Al-Hamawy",
    "mohammed Al-hamawy Portfolio",
    "mohammed al-hamawy",
    "mohammed alhamawy",
    "mohammed alhamawy portfolio",
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
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "Mohammed Al-Hamawy portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Al-Hamawy | Front-End & WordPress Developer",
    description:
      "Fast Next.js apps and scalable WordPress websites built with a focus on UX and Core Web Vitals.",
    images: [socialImage],
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
      <head>
        <meta
          name="google-site-verification"
          content="X-gvcvXbikIWv4dfaHxkPzEaJy-NiDn5GZfDdQdO66I"
        />
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WTPKRKZT');`}
        </Script>
      </head>
      <body className="min-h-full flex flex-col light-bg">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WTPKRKZT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <SmoothCursor />
        {children}
      </body>
    </html>
  );
}
