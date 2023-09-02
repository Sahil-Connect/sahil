import { RegisterNewSupplier } from "@/components/Suppliers";
export default function SupplierRegistrationPage() {
  return (
    <main className="min-h-screen p-4 flex items-start justify-center">
      <div className="space-y-2">
        <h1 className="text-3xl text-center">Supplier Registration Form</h1>
        <div className="divider"></div>
        <RegisterNewSupplier />
      </div>
    </main>
  );
}
