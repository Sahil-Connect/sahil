import { faqData } from "../../data/constants"

const Faqs = () => {
  return (
    <section className="pt-16 pb-8 px-0 lg:pt-24">
      <div className="flex flex-col items-center justify-center">
        <div className="inline-block font-semibold bg-[#84faa1] px-4 py-1 rounded-[2rem] mb-2">
          FAQs
        </div>
        <h3 className="text-h2 font-semibold mb-8 lg:text-h2xl">
          Frequently Asked Questions
        </h3>
      </div>

      <div className="container">
        { faqData.map (({ id, title, desc }) => {
          return(
            <div key={id} className="collapse collapse-plus max-w-[870px] m-auto bg-base-100 border border-[#d2d6db] rounded-lg mb-3">
              <input type="radio" name="my-accordion-3" /> 
              <div className="collapse-title text-xl font-semibold">
                <h3 className="text-h3">
                  {title}
                </h3>
              </div>
              <div className="collapse-content"> 
                <p className="text-base xxl:text-basexl">
                  {desc}
                </p>
              </div>
            </div>
          )})
        }
      </div>
    </section>
  )
}

export default Faqs
