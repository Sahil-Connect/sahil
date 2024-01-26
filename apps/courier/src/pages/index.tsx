import Image from "next/image";
import { Inter } from "next/font/google";
import { useFetchCouriers } from "@/hooks/account";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data, error, loading } = useFetchCouriers();
  console.log(data);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <p>Hello, World</p>
    </main>
  );
}
