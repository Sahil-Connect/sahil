import { ComingSoon, GridContainer, PageTitle } from "@/components/shared";

export const metadata = {
  title: "Blog - Sahil App",
  description: "Stay updated with the latest news and insights from our team.",
};

export default function BlogPage() {
  return (
    <>
      <PageTitle
        title="Blog"
        subtitle="Latest Updates"
        description="Stay updated with the latest news, updates, and insights from our team."
      />
      <GridContainer>
        <ComingSoon />
      </GridContainer>
    </>
  );
}
