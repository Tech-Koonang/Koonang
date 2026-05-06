import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ParticleBackground } from "@/components/layout/particle-background";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { ClientOnly } from "@/components/providers/client-only-provider";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Koonang.io - AI-powered Web Architecture Studio",
  description: "AI-powered Web Architecture Studio landing page with deep space aesthetic and interactive wizard.",
  icons: {
    icon: "/koonang-icon.png",
    shortcut: "/koonang-icon.png",
    apple: "/koonang-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-TCB1N34XZ0" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TCB1N34XZ0');
          `}
        </Script>
      </head>
      <body className="min-h-screen text-slate-800 dark:text-slate-200 font-sans selection:bg-firefly/30 selection:text-firefly relative transition-colors duration-500">
        <ClientOnly>
          <LanguageProvider defaultLanguage="id" storageKey="koonang-language">
            <ThemeProvider defaultTheme="dark" storageKey="koonang-theme">
              <ParticleBackground />
              <Navbar />
              {children}
              <Footer />
              <WhatsAppButton />
            </ThemeProvider>
          </LanguageProvider>
        </ClientOnly>
      </body>
    </html>
  );
}
