import "../styles/globals.css"
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sahil',
  description: 'Connecting you with suppliers and customers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`text-base font-medium h-full scroll-smooth xxl:text-basexl ${montserrat.className}`}>{children}</body>
    </html>
  );
}
