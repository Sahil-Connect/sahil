import { RegisterNewSupplier } from "@/components/Suppliers";
export default function SupplierRegistrationPage() {
    return (
      <main className="min-h-screen p-4 flex items-start justify-center">
        <div className="space-y-4">
          <div className="flex justify-between items-start">
          <h1 className="text-3xl">Sahil Supplier Registration</h1>
          </div>
          <div className="divider"></div>
          <RegisterNewSupplier />
        </div>
      </main>
    );
  }
  