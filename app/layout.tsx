// File: app/layout.tsx
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css"
import {Inter } from "next/font/google";
interface RootLayoutProps {
  children: React.ReactNode;
}
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={`max-w-[99%] overflow-x-hidden h-auto mx-auto px-2 py-3 ${inter.className}`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
