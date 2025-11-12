import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/AppShell";
import Script from "next/script";

const inter = Inter({ 
  subsets: ["latin", "vietnamese"],
  display: 'swap',
  variable: '--font-inter',
  fallback: ['system-ui', '-apple-system', 'sans-serif'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Hội Nhập Kinh Tế Quốc Tế Của Việt Nam",
  description: "Khám phá hành trình phát triển kinh tế Việt Nam - từ khái niệm, tác động đến giải pháp bền vững",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${inter.variable} font-sans antialiased min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50`}>
        <Script
          src="https://cdn.jsdelivr.net/npm/disable-devtool"
          strategy="beforeInteractive"
          disable-devtool-auto="true"
        />
        <AppShell>
          {children}
        </AppShell>
      </body>
    </html>
  );
}
