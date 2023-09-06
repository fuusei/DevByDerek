import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { Navbar } from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Derek Mackey",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      dir="ltr"
      lang="en"
    >
      <head />
      <body className={inter.className}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col" id="app-container">
            <Navbar />
            <main>{children}</main>
            <footer className="bottom-0 text-center text-sm ">
              <span>Made by Derek Mackey.</span>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
