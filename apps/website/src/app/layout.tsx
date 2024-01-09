import "../styles/globals.css"
import type { Metadata } from 'next'
import { Alata, Plus_Jakarta_Sans } from 'next/font/google'
import { Navbar, Footer } from "@/components/layout";

const alata = Alata({
  weight: '400', 
  subsets: ['latin'],
  variable: '--font-alata',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Home - Sahil App',
  description: 'Connecting you with suppliers and customers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${alata.variable} ${jakarta.variable} font-alata font-medium antialiased text-zinc-900 min-h-full leading-normal`}>
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
