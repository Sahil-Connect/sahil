import { 
  SectionWrapper, 
  GridContainer, 
  SectionTitle 
} from "@/components/shared";
import Image from "next/image";
import { featuresData } from "@/lib/constants";

export const Features = () => {
  return (
    <SectionWrapper>
      <GridContainer>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">Features</p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
            Smart Infrastructure:
            <br className="hidden md:block" />
            Your Complete Delivery Solution
          </h2>
          <p className="text-lg text-gray-600">
            Discover the core technologies that power our smart locker network, 
            from seamless API integration to intelligent location optimization.
          </p>
        </div>
        <ul className="mb-20 grid gap-y-10 md:gap-x-8 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map(
            ({ id, title, description, image }) => {
              return (
                <li
                  key={id}
                  className="flex flex-col justify-between p-6 bg-gray-50 rounded-lg gap-y-8"
                >
                  <div className="px-8 w-full flex items-center justify-center">
                    <Image
                      src={image}
                      alt={title}
                      className="w-full align-middle justify-self-center object-cover"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="mb-1 font-semibold">
                      {title}
                    </h3>
                    <p className="text-gray-600 text-sm max-w-[50ch]">
                      {description}
                    </p>
                  </div>
                </li>
              );
            }
          )}
        </ul>
      </GridContainer>
    </SectionWrapper>
  );
};
