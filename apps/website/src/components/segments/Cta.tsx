import { SectionWrapper, GridContainer } from "@/components/shared";
import Link from "next/link";
import ctaYellow from "../../../public/cta-yellow.svg";
import Image from "next/image";

export const Cta = () => {
  return (
    <SectionWrapper>
      <GridContainer>
        <div className="flex flex-col items-start gap-y-10 bg-secondary rounded-lg py-8 px-6 md:py-12 md:px-10 md:items-center lg:py-14 lg:px-12 lg:gap-x-28 lg:flex-row">
          <div className="w-full max-w-full lg:max-w-[55%]">
            <div className="mb-8 md:mb-11">
              <p className="text-green-100 text-sm mb-4">
                Ready to Take the Next Step?
              </p>
              <h2 className="text-white text-xl font-semibold md:text-4xl">
                Join us today &amp; experience the difference!
              </h2>
            </div>
            <div className="flex flex-col items-center mb-11 gap-4 md:flex-row">
              <h3 className="text-2xl text-white font-semibold uppercase sm:text-3xl">
                <span className="bg-gradient-to-br from-green-400 to-green-300 text-transparent bg-clip-text">
                  Coming soon
                </span>
              </h3>
            </div>
            <p className="text-base text-white mb-8 lg:mb-11">
              Download the sahil app now, sign up for free and use our services
              to grow your business.
            </p>
            <div className="mb-4 flex items-start">
              <Link href={"/"} className="btn btn-base-100 font-medium">
                Get Started
              </Link>
            </div>
          </div>
          <div className="w-full max-w-full hidden lg:block">
            <Image
              src={ctaYellow}
              alt={"cta-image"}
              className="align-middle justify-self-center object-cover"
            />
          </div>
        </div>
      </GridContainer>
    </SectionWrapper>
  );
};
