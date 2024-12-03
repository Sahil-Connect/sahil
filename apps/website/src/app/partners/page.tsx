import { 
  Benefits, 
  Cta,  
  ParterWithUs
} from "@/components/segments";
import { PageTitle } from "@/components/shared";

export const metadata = {
  title: "Partners - Sahil App",
  description:
    "We foster a culture of partnership and building strong, collaborative relationships. Partner with Sahil. Sahil logistics.",
};

export default function PartnersPage() {
  return (
    <>
      <PageTitle
        subtitle="Partners"
        title="Work with Us"
        description="We foster a culture of partnership and building strong, collaborative relationships."
      />
      <ParterWithUs />
      <Benefits />
      <Cta />
    </>
  );
}
