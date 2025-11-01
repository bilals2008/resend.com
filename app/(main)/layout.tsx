// File: app/layout.tsx
import { ThemeProvider } from "@/components/theme-provider";
import "../globals.css";
import { Domine } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { siteMetadata } from "../metadata/siteMeatadata";

// const inter = Inter({ subsets: ["latin"] });
const domine = Domine({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // jo weights chahiyein wo add karo
});
 export const metadata = siteMetadata
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`max-w-[99%] mx-auto px-2 py-3 ${domine.className} font-medium`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
