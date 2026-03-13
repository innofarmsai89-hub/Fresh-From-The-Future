import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Geist, Geist_Mono, League_Spartan, Outfit } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { GoogleTagManager } from '@next/third-parties/google'

const spartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-spartan",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], 
  variable: "--font-outfit",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fresh From The Future",
  description: "Sustainable urban farming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Z7JDQGBBK4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z7JDQGBBK4', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spartan.variable} ${outfit.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* 1. Navbar Sticky Wrapper */}
        {/* sticky: keeps it in flow but sticks on scroll */}
        {/* top-0: sticks to the very top */}
        {/* z-[999]: ensures it stays above all other content/images */}
        <div className="sticky top-0 z-[999] w-full">
            <Navbar />
        </div>

        {/* 2. Main Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* 3. Footer */}
        <Footer />
      </body>
      <GoogleTagManager gtmId="GTM-WVLHXKFZ" />
    </html>
  );
}