// File: app/(auth)/layout.tsx
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import "../globals.css"
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`max-w-[99%] mx-auto px-2 py-3 ${inter.className} font-medium bg-background`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
