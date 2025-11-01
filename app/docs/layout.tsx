// File: app/docs/layout.tsx
import React from "react";
import "../globals.css";
import Navbar from "./components/Navbar/Navbar";
import DocsNav from "./components/DocsNav/DocsNav";
import DocsDrawer from "./components/DocsNav/DocsDrawer";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import RightPanel from "./components/RightPanel/RightPanel";
const inter = Inter({ subsets: ["latin"] });

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background`}>
        <Navbar />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="py-10 px-2">
            {/* mobile drawer */}
            <div className="flex justify-between items-center mb-4 md:hidden">
              <DocsDrawer />
            </div>

            <div className="flex gap-4 relative">
              {/* Sidebar Navigation */}
              <aside className="hidden md:block w-60 py-2 ">
                <DocsNav />
              </aside>

              {/* Main Content */}
              <main className="flex-1 px-5 py-2 border-b pb-2">
                {children}
              </main>

              {/* Right Sidebar */}
              <aside className="hidden lg:block w-[244px] px-5 py-2 h-[600px]">
                <RightPanel />
              </aside>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
