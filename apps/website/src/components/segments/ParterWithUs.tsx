import {
  SectionWrapper,
  GridContainer,
  SectionTitle,
  PartnerCard,
} from "@/components/shared";

export const ParterWithUs = () => {
  return (
    <SectionWrapper>
      <GridContainer>
        <SectionTitle 
          subtitle="Partners" 
          title="Partner with Us" 
          textCentered={true}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-8">
          <PartnerCard
            title="Couriers"
            description="Become a courier rider at Sahil, delivery goods and packages from suppliers to businesses or directly to consumers."
            linkHref="/partners/couriers"
            colorScheme="purple"
          />
          <PartnerCard
            title="Businesses"
            description="Join 100+ businesses (retailers) working with Sahil. Work with trusted suppliers to reduce costs and focus on serving your customers"
            linkHref="/partners/businesses"
            colorScheme="neutral"
          />
          <PartnerCard
            title="Suppliers"
            description="Join 15+ suppliers (manufacturers) and expand your market reach. Access a diverse network of businesses and streamline your sales"
            linkHref="/partners/suppliers"
            colorScheme="blue"
          />
        </div>
      </GridContainer>
    </SectionWrapper>
  );
};