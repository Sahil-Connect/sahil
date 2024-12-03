import {
  SectionWrapper,
  GridContainer,
  SectionTitle,
} from "@/components/shared";
import Image from "next/image";
import { benefitsData } from "@/lib/constants";

export const Benefits = () => {
  return (
    <SectionWrapper>
      <GridContainer>
        <SectionTitle 
          subtitle="Benefits" 
          title="Why Choose Us" 
          textCentered={true}
        />
        <ul className="grid items-center gap-y-12 md:grid-cols-2 md:gap-x-10 lg:grid-cols-3 lg:gap-14">
          {benefitsData.map(({ id, image, title, desc }) => {
            return (
              <li key={id}>
                <div className="flex justify-center flex-nowrap items-center w-16 h-16 p-2 bg-zinc-100 rounded-full mb-5">
                  <div className="flex justify-center items-center">
                    <Image
                      src={image}
                      alt="Benefits Icon"
                      loading="lazy"
                      className="w-full max-w-[60px] max-h-[60px]"
                    />
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-3 lg:text-xl">
                    {title}
                  </h3>
                  <p className="text-gray-600">{desc}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </GridContainer>
    </SectionWrapper>
  );
};
