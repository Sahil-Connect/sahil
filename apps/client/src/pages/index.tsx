import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Stats, Stat } from "ui";
const inter = Inter({ subsets: ['latin'] });


const stats: Stat = [
  {
    title: ""
  }
]

export default function Home() {
  return (
    <main
      className={`min-h-screen p-4`}
    >
      <h1>Hello</h1>
    </main>
  )
}
