import { 
  SectionWrapper, 
  GridContainer, 
  SectionTitle
} from "@/components/shared";
import { faqData } from "@/lib/constants";

export const Faqs = () => {
  return (
    <SectionWrapper>
      <SectionTitle 
        subtitle="FAQs" 
        title="Frequently Asked Questions" 
        textCentered={true}
      />
      <GridContainer>
        {faqData.map(({ id, title, desc }) => {
          return (
            <div
              key={id}
              className="collapse collapse-plus max-w-3xl m-auto bg-base-100 border border-gray-200 rounded-lg mb-3"
            >
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title">
                <h3 className="text-base font-medium">{title}</h3>
              </div>
              <div className="collapse-content">
                <p className="text-sm text-gray-500 md:text-base">{desc}</p>
              </div>
            </div>
          );
        })}
      </GridContainer>
    </SectionWrapper>
  );
};
