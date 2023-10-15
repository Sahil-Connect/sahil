import { useRouter } from "next/navigation";
import { RegisterNewSupplier } from "@/components/Suppliers";
import Head from "next/head";
import { z } from "zod";

export default function SupplierRegistrationPage() {
  return (
    <>
      <Head>
        <title>Sahil</title>
      </Head>
      <main className="min-h-screen p-8 flex items-start">
        <div className="space-y-2 w-full">
          <RegisterNewSupplier />
        </div>
      </main>
    </>
  );
}
