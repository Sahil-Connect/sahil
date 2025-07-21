import {
  SectionWrapper,
  GridContainer,
  SectionTitle,
  PartnerCard,
  PartnerCardProps,
} from "@/components/shared";

const partnerDetails: PartnerCardProps[] = [
  {
    title: "Couriers",
    description: "Become a courier rider at Sahil, delivery goods and packages from suppliers to businesses or directly to consumers.",
    linkHref: "/partners/couriers",
    colorScheme: "slate"
  },
  {
    title: "Businesses",
    description: "Join 100+ businesses (retailers) working with Sahil. Work with trusted suppliers to reduce costs and focus on serving your customers.",
    linkHref: "/partners/businesses",
    colorScheme: "neutral"
  },
  {
    title: "Suppliers",
    description: "Join 15+ suppliers (manufacturers) and expand your market reach. Access a diverse network of businesses and streamline your sales.",
    linkHref: "/partners/suppliers",
    colorScheme: "gray"
  }
];

export const ParterWithUs = () => {
  return (
    <SectionWrapper>
      <GridContainer>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">Partners</p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
            Join Our Network:
            <br className="hidden md:block" />
            Partnership Opportunities That Scale
          </h2>
          <p className="text-lg text-gray-600">
            Discover how businesses, suppliers, and logistics partners can leverage 
            our smart locker infrastructure to transform their delivery operations.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-4">
          {partnerDetails.map((partner, index) => (
            <PartnerCard
              key={index}
              title={partner.title}
              description={partner.description}
              linkHref={partner.linkHref}
              colorScheme={partner.colorScheme}
            />
          ))}
        </div>
      </GridContainer>
    </SectionWrapper>
  );
};