import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saleem Jaffar | Software Engineering Student & Web Developer",
  description:
    "The personal portfolio of Saleem Jaffar — a software engineering student and web developer focused on building advanced, futuristic and immersive digital experiences.",
  keywords: [
    "Saleem Jaffar",
    "Software Engineering Student",
    "Web Developer",
    "Web Development",
    "React",
    "Next.js",
    "TypeScript",
    "Three.js",
    "React Three Fiber",
    "WebGL",
  ],
  authors: [
    {
      name: "Saleem Jaffar",
    },
  ],
  creator: "Saleem Jaffar",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Saleem Jaffar | Software Engineering Student & Web Developer",
    description:
      "Software engineering student and web developer building advanced, futuristic and immersive digital experiences.",
    type: "website",
    siteName: "Saleem Jaffar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saleem Jaffar | Software Engineering Student & Web Developer",
    description:
      "Software engineering student and web developer building advanced, futuristic and immersive digital experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}