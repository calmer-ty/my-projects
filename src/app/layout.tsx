import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";

import LayoutHeader from "@/commons/layout/LayoutHeader";

import type { Metadata } from "next";
import "./globals.css";
import Wrapper from "@/commons/layout/Wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Projects",
  description: "저의 프로젝트들을 소개합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Wrapper>
            <LayoutHeader />
            <main>{children}</main>
          </Wrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
