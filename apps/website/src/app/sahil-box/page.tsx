import { SahilBox, Cta } from "@/components/segments";
import { PageTitle } from "@/components/shared";

export const metadata = {
  title: "Sahil Box - Sahil App",
  description:
    "Discover Sahil Box - our smart delivery solution that solves the problem of failed deliveries through distributed smart lockers with temporary access codes.",
};

export default function SahilBoxPage() {
  return (
    <>
      <PageTitle
        title="Sahil Box"
        subtitle="Smart Delivery Solution"
        description="Understanding the problem, our solution, and why it works better than traditional delivery methods."
      />
      <SahilBox />
      <Cta />
    </>
  );
}
