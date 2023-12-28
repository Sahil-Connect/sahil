import { 
  SectionWrapper, 
  GridContainer, 
} from '@/components/shared';
import Image from "next/image";
import { benefitsData } from "@/lib/constants";

export const Benefits = () => {
  return (
    <SectionWrapper>
      <GridContainer>
        <div className="mb-8 md:mb-10 lg:mb-14">
          <div className="mb-2 text-sm">
            Explore our Benefits
          </div>
          <h2 className="text-3xl font-semibold md:text-4xl">
            <span className="yellow-line">Why Choose Us</span>
          </h2>
        </div>
        <ul className="grid items-center gap-y-10 md:grid-cols-2 md:gap-x-10 lg:grid-cols-3 lg:gap-14">
          { benefitsData.map (({ id, image, title, desc }) => {
            return(
              <li key={id}>
                <div className="flex justify-center flex-nowrap items-center w-16 h-16 p-2 border border-solid border-lime bg-lime rounded-[8rem] mb-5">
                  <div className="flex justify-center items-center">
                    <Image
                      src={image}
                      alt="Benefits Icon"
                      loading='lazy'
                      className='w-full max-w-[60px] max-h-[60px]'
                    />
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-3 lg:text-xl">{title}</h3>
                  <p className="text-gray-600">{desc}</p>
                </div>
              </li>
            )})
          }
        </ul>
      </GridContainer>
    </SectionWrapper>
  )
}
