import { PartnerCourier, PartnerSupplier, PartnerTitle } from "@/components/shared";

export const metadata = {
  title: "Partners - Sahil App",
  description:
    "We foster a culture of partnership and building strong, collaborative relationships. Partner with Sahil. Sahil logistics.",
};

export default function SuppliersPage() {
  return (
    <>
      <div className="mt-16 w-full max-w-xl mx-auto px-8 md:px-0 md:mt-20">
        <PartnerTitle 
          title="Suppliers"
          description="Join 15+ suppliers (manufacturers) and expand your market reach. Access a diverse network of businesses and streamline your sales"
        />
        <PartnerSupplier />
      </div>
    </>
  );
}
