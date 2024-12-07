import { GridContainer } from "../shared";
import Image from "next/image";
import Link from "next/link";
import RoundIcon from "../../../public/round.svg";
import MockupMobile from "../../../public/agent-mobile.svg";
import MockupDesktop from "../../../public/agent-desktop.svg";
import { HiOutlineChevronRight, HiOutlineInformationCircle } from "react-icons/hi2";

export const Hero = () => {
  return (
    <section className="relative w-full py-64 pt-16 bg-hero bg-zinc-50 bg-no-repeat bg-top overflow-hidden">
      <GridContainer>
        <div className="lg:mb-24">
          <div className="flex justify-center">
            <p className="py-1.5 px-4 bg-white border border-gray-200 text-sm text-zinc-900 rounded-full transition hover:border-gray-300 focus:outline-none focus:border-gray-300">
              Empowering businesses
            </p>
          </div>
          <div className="mt-5 max-w-5xl mx-auto text-center">
            <h1 className="font-bold font-jakarta text-zinc-900 text-2xl md:text-5xl lg:text-6xl">
              Connecting businesses with{" "}
              <span className="bg-clip-text bg-gradient-to-tl from-primary to-green-600 text-transparent">suppliers</span> &{" "}
              <span className="bg-clip-text bg-gradient-to-tl from-primary to-green-600 text-transparent">customers</span>
            </h1>
          </div>
          <div className="mt-5 max-w-[60ch] mx-auto text-center">
            <p className="text-base text-gray-600">
              A logistics platform for emerging markets, linking small businesses 
              with suppliers to automate procurement and distribution.
            </p>
          </div>
          <div className="mt-8 gap-3 flex justify-center">
            <a 
              href="https://agent.sahil.app/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary font-medium text-white rounded-full" 
            >
              Get Started
              <HiOutlineChevronRight className="shrink-0 size-4" />
            </a>
            <Link 
              href="/about" 
              className="relative group btn border bg-white text-zinc-800 font-medium rounded-full hover:bg-white"
            >
              Learn more
              <span className="flex justify-center items-center bg-gray-50 rounded-full size-7">
                <HiOutlineInformationCircle className="shrink-0 size-4" />
              </span>
            </Link>
          </div>
        </div>
        <div className="hidden relative md:flex md:items-center w-full max-w-3xl mx-auto">
          <Image
            src={RoundIcon}
            alt={"round-icon"}
            loading="eager"
            className="animate-bounce md:absolute md:left-0 md:bottom-0 md:block"
          />
          <Image
            src={RoundIcon}
            alt={"round-icon"}
            loading="eager"
            className="animate-bounce md:absolute md:top-0 md:right-0 md:block"
          />
        </div>
        <div className="flex items-center justify-center mt-6 lg:mt-36 xl:mt-40">
          <div className="absolute px-5 w-full bottom-0 flex items-center justify-evenly sm:justify-between md:hidden">
            <Image
              src={MockupMobile}
              alt={"sahil-agent-app"}
              loading="eager"
              className="relative top-6 object-cover border-2 border-zinc-950 rounded-lg"
            />
          </div>
          <div className="hidden absolute w-full bottom-0 max-w-4xl mx-auto md:flex md:items-center md:justify-evenly sm:justify-between md:w-auto lg:-bottom-28 lg:gap-6">
            <Image
              src={MockupDesktop}
              alt={"sahil-agent-app"}
              loading="eager"
              className="relative object-cover md:top-72 lg:top-20"
            />
          </div>
        </div>
      </GridContainer>
    </section>
  );
};
