import { PartnerBusiness, PartnerTitle } from "@/components/shared";

export const metadata = {
  title: "Partners - Sahil App",
  description:
    "We foster a culture of partnership and building strong, collaborative relationships. Partner with Sahil. Sahil logistics.",
};

export default function BusinessesPage() {
  return (
    <>
      <div className="mt-16 w-full max-w-xl mx-auto px-8 md:px-0 md:mt-20">
        <PartnerTitle 
          title="Businesses"
          description="Join 100+ businesses (retailers) working with Sahil. Work with trusted suppliers to reduce costs and focus on serving your customers"
        />
        <PartnerBusiness />
      </div>
    </>
  );
}
