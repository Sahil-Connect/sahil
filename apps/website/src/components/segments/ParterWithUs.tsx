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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-5 sm:overflow-hidden">
          <PartnerCard 
            title="Couriers"
            description="Become a courier rider at Sahil, delivery goods and packages from suppliers to businesses or directly to consumers."
            link="/partners/couriers"
            className="col-span-1"
          />
          <div className="flex flex-col justify-between col-span-1 gap-4 lg:gap-8">
            <PartnerCard 
              title="Businesses"
              description="Join 100+ businesses (retailers) working with Sahil. Work with trusted suppliers to reduce costs and focus on serving your customers"
              link="/partners/businesses"
            />
            <PartnerCard 
              title="Suppliers"
              description="Join 15+ suppliers (manufacturers) and expand your market reach. Access a diverse network of businesses and streamline your sales"
              link="/partners/suppliers"
            />
          </div>
        </div>
      </GridContainer>
    </SectionWrapper>
  );
};
