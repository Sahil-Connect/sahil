import { 
  SectionWrapper, 
  GridContainer, 
  Card 
} from "@/components/shared";
import about from "../../../public/delivery.jpg";
import Link from "next/link";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

export const About = () => {
  return (
    <SectionWrapper>
      <div className="bg-primary py-12">
        <GridContainer>
          <div className="text-center">
            <p className="text-white text-sm font-medium">About Us</p>
            <h1 className="my-8 text-2xl font-medium font-inter max-w-4xl mx-auto">
              <span className="text-white">
                Sahil revolutionizes last-mile logistics with smart, secure drop points that eliminate failed deliveries 
                and reduce operational waste.
              </span> {''}
              <span className="text-accent">
                We empower logistics platforms to deliver packages where and when 
                it works best for customers, creating a seamless experience that saves time, fuel, and frustration.
              </span>
            </h1>
            <Link 
              href="/about" 
              className="group px-6 btn border border-accent bg-transparent text-white font-medium rounded-full hover:bg-white hover:text-zinc-900">
              Learn more
              <span className="relative group flex justify-center items-center rounded-full">
                <HiOutlineArrowUpRight className="group-hover:rotate-45 transition" />
              </span>
            </Link>
          </div>
          <div className="mt-8 flex flex-col gap-3 lg:flex-row w-full lg:max-w-fit">
            <Card
              subtitle="Partner Platforms"
              title="50+"
              description="Logistics platforms trust us to optimize their last-mile delivery"
              className="h-96 justify-end bg-green-100 lg:h-auto"
            />
            <div className="flex flex-col gap-3 lg:justify-between">
              <Card
                subtitle="Reduction in Failed Deliveries"
                title="85%"
                description="Through our smart drop point network and optimization"
                className="bg-red-100"
              />
              <Card
                subtitle="Smart Drop Points"
                title="500+"
                description="Secure locations where packages are delivered efficiently"
                className="bg-blue-100"
              />
            </div>
            <Card
              subtitle="Customer Satisfaction"
              description="Packages delivered where and when it works best for recipients"
              className="hidden h-96 bg-green-100 md:w-96 lg:h-auto lg:flex"
              image={about}
            />
          </div>
        </GridContainer>
      </div>
    </SectionWrapper>
  );
};
