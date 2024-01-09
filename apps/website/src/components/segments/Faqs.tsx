import { 
  SectionWrapper, 
  GridContainer 
} from '@/components/shared';
import { faqData } from '@/lib/constants';

export const Faqs = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col items-center justify-center">
        <div className="inline-block font-jakarta font-semibold bg-lime px-4 py-1 rounded-[2rem] mb-2">
          <span>FAQs</span>
        </div>
        <h3 className="text-xl font-semibold mb-8 md:text-4xl">
          Frequently Asked Questions
        </h3>
      </div>
      <GridContainer>
        {faqData.map (({ id, title, desc }) => {
          return(
            <div key={id} className="collapse collapse-plus max-w-[870px] m-auto bg-base-100 border border-gray-200 rounded-lg mb-3">
              <input type="radio" name="my-accordion-3" /> 
              <div className="collapse-title text-xl">
                <h3 className="text-base md:text-lg">
                  {title}
                </h3>
              </div>
              <div className="collapse-content"> 
                <p className="text-sm text-gray-600 md:text-base">
                  {desc}
                </p>
              </div>
            </div>
          )})
        }
      </GridContainer>
    </SectionWrapper>
  );
};
