import { 
  SectionWrapper, 
  GridContainer, 
  SectionTitle
} from "@/components/shared";
import { faqData } from "@/lib/constants";

export const Faqs = () => {
  return (
    <SectionWrapper>
      <GridContainer>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
            Essential Answers:
            <br className="hidden md:block" />
            Your Guide to the Platform
          </h2>
          <p className="text-lg text-gray-600">
            Explore common inquiries about leveraging our smart locker network, 
            from setup and integration to security and scalability.
          </p>
        </div>
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
