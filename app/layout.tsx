import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from "./providers";
import Head from "next/head";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Derek Mackey',
  description: 'Personal Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <header></header>
          <main>{children}</main>
          <footer className="bottom-0 text-center text-sm ">
            <span>Made by Derek Mackey.</span>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
