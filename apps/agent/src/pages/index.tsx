import { Montserrat } from 'next/font/google';
// import { Button } from "ui";

const montserrat = Montserrat({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${montserrat.className}`}
    >
      Sahil
    </main>
  );
}
