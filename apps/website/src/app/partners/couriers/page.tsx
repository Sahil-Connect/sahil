import { PartnerCourier, PartnerSupplier, PartnerTitle } from "@/components/shared";

export const metadata = {
  title: "Partners - Sahil App",
  description:
    "We foster a culture of partnership and building strong, collaborative relationships. Partner with Sahil. Sahil logistics.",
};

export default function CouriersPage() {
  return (
    <>
      <div className="mt-16 w-full max-w-xl mx-auto px-8 md:px-0 md:mt-20">
        <PartnerTitle 
          title="Couriers"
          description="Become a courier rider at Sahil, delivery goods and packages from suppliers to businesses or directly to consumers."
        />
        <PartnerCourier />
      </div>
    </>
  );
}
