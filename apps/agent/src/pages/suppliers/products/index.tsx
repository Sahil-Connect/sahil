import { ProductsCatalogue } from "@sahil/features/Products/ProductsCatalogue";

export default function SupplierProductsPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl">Supplier Page</h1>
            <p>
              Users can register through agents, an app, or USSD codes and set
              delivery preferences.
            </p>
          </div>
        </div>
        <ProductsCatalogue />
      </div>
    </main>
  );
}
