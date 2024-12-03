import { Card, GridContainer, JourneySection, PageTitle, SectionWrapper } from "@/components/shared";
import about from "../../../public/delivery.jpg";
import { Cta } from "@/components/segments";

export const metadata = {
  title: "About Us - Sahil App",
  description:
    "Discover our mission, vision, and the values that drive us to deliver top-notch services.",
};

export default function AboutPage() {
  return (
    <>
      <PageTitle
        title="About Us"
        subtitle="Our Story"
        description="Get to know us better! Learn more about our mission, our vision, and the values that guide our work."
      />
      <GridContainer>
        <JourneySection />
        <SectionWrapper>
          <div className="pb-12">
            <h1 className="text-2xl font-medium font-inter">
              <span className="text-zinc-900">
                We are a groundbreaking supply chain management platform that empowers small and medium-sized enterprises 
                (SMEs) in challenging business environments.
              </span> {''}
              <span className="text-zinc-500">
                Our platform is committed to providing a seamless 
                experience for all our users, ensuring they can focus on what matters most - growing their 
                business.
              </span>
            </h1>
            <div className="mt-16 flex flex-col gap-3 lg:flex-row w-full lg:max-w-fit">
              <Card
                subtitle="Satisfied Clients"
                title="100+"
                description="Our devotion to quality and innovation propels us forward"
                className="h-96 justify-end bg-blue-50 lg:h-auto"
              />
              <div className="flex flex-col gap-3 lg:justify-between">
                <Card
                  subtitle="Reduction in Supply Chain Costs"
                  title="45%"
                  description="Through our optimized inventory and procurement processes"
                  className="bg-red-50"
                />
                <Card
                  subtitle="Suppliers and Manufacturers"
                  title="20+"
                  description="We connect trusted suppliers with the right customers"
                  className="bg-orange-50"
                />
              </div>
              <Card
                subtitle="On-time Deliveries"
                description="Thanks to our route optimization for seamless logistics"
                className="hidden h-96 bg-green-50 md:w-96 lg:h-auto lg:flex"
                image={about}
              />
            </div>
          </div>
        </SectionWrapper>
      </GridContainer>
      <Cta />
    </>
  );
}
