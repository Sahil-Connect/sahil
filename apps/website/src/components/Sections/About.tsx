import { 
  SectionWrapper, 
  GridContainer, 
} from '@/components/shared';
import Image from "next/image";
import about from "../../../public/about.png";

export const About = () => {
  return (
    <SectionWrapper>
      <GridContainer>
        <div className="grid items-center gap-12 grid-rows-[auto] lg:grid-cols-[1fr_1fr]">
          <div>
            <div className="flex flex-col items-start justify-start">
              <div className="inline-block font-jakarta font-semibold bg-lime px-4 py-1 rounded-[2rem] mb-2">
                <span>About Us</span>
              </div>
              <h3 className="text-xl font-semibold my-3 lg:text-2xl">
                Who are We
              </h3>
            </div>
            <p className="mb-3 text-gray-600">
              We are a dynamic platform that bridges the gap between businesses, suppliers, and customers. Our mission is to simplify procurement processes, foster market connections, and streamline delivery services.
            </p>
            <p className="mb-3 text-gray-600">
              We believe in the power of collaboration and aim to create a thriving ecosystem where businesses can connect with suppliers that match their needs, and customers can find products that meet their preferences.
            </p>
            <p className="mb-3 text-gray-600">
              Our platform is designed to make transactions smoother, faster, and more efficient. We are committed to providing a seamless experience for all our users, ensuring they can focus on what matters
              most - growing their business and satisfying their customers.
            </p>
          </div>
          <div className="relative flex justify-center items-center">
            <Image
              src={about}
              alt={"about-image"}
              loading="lazy"
              className="w-full h-full"
            />
            <div className="absolute left-0 top-0 right-0 bottom-0 z-[-1] bg-[#067a4631] rounded-lg"></div>
          </div>
        </div>
      </GridContainer>
    </SectionWrapper>
  )
}
