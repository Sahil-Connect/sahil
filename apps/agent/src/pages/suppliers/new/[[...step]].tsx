import { useRouter } from "next/navigation";
import { RegisterNewSupplier } from "@/components/Suppliers";
import Head from "next/head";

export default function SupplierRegistrationPage() {
  return (
    <>
      <Head>
        <title>Sahil</title>
      </Head>
      <main className="min-h-screen p-4 flex items-start justify-center">
        <div className="space-y-2">
          <h1 className="text-3xl text-center">Supplier Registration Form</h1>
          <div className="divider"></div>
          <RegisterNewSupplier />
        </div>
      </main>
    </>
  );
}
