import { PageTitle, GridContainer, ComingSoon } from "@/components/shared";

export const metadata = {
  title: "Features - Sahil App",
  description:
    "Discover the wide range of services we offer. Our innovative solutions are designed to help you streamline your business operations.",
};

export default function FeaturesPage() {
  return (
    <>
      <PageTitle
        title="Features"
        subtitle="Our Services"
        description="Explore the wide range of features we offer to help you revolutionize your business operations."
      />
      <GridContainer>
        <ComingSoon />
      </GridContainer>
    </>
  );
}
