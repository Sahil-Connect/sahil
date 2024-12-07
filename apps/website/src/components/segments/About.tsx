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
          <p className="text-white text-sm font-medium">About Us</p>
          <h1 className="my-8 text-2xl font-medium font-inter">
            <span className="text-white">
              Sahil is a groundbreaking supply chain management platform that empowers small and medium-sized 
              enterprises (SMEs) in challenging business environments.
            </span> {''}
            <span className="text-accent">
              Our platform is committed to providing a seamless 
              experience for all our users, ensuring they can focus on what matters most - growing their 
              business.
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
          <div className="mt-8 flex flex-col gap-3 lg:flex-row w-full lg:max-w-fit">
            <Card
              subtitle="Satisfied Clients"
              title="100+"
              description="Our devotion to quality and innovation propels us forward"
              className="h-96 justify-end bg-green-100 lg:h-auto"
            />
            <div className="flex flex-col gap-3 lg:justify-between">
              <Card
                subtitle="Reduction in Supply Chain Costs"
                title="45%"
                description="Through our optimized inventory and procurement processes"
                className="bg-red-100"
              />
              <Card
                subtitle="Suppliers and Manufacturers"
                title="20+"
                description="We connect trusted suppliers with the right customers"
                className="bg-blue-100"
              />
            </div>
            <Card
              subtitle="On-time Deliveries"
              description="Thanks to our route optimization for seamless logistics"
              className="hidden h-96 bg-green-100 md:w-96 lg:h-auto lg:flex"
              image={about}
            />
          </div>
        </GridContainer>
      </div>
    </SectionWrapper>
  );
};
