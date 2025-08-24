import type { Metadata } from "next";
import { Source_Code_Pro, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ReactNode } from "react";

const sourceCodePro = Source_Code_Pro({
  variable: "--font-scp",
  subsets: ["latin"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ann✺b",
  description: "Ann Bordetsky",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sourceCodePro.variable} ${sourceSans.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          // enableSystem
          disableTransitionOnChange
        >
          <Nav />
          <main
            className={"font-mono w-full max-w-3xl mx-auto min-h-screen px-4"}
          >
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
