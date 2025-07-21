import { 
  SectionWrapper, 
  GridContainer 
} from "@/components/shared";
import { HiOutlineTruck, HiOutlineUser, HiOutlineCog6Tooth, HiOutlineGlobeAlt } from "react-icons/hi2";

export const Cta = () => {
  return (
    <SectionWrapper>
      <GridContainer>
        <div className="py-8 bg-hero bg-secondary bg-no-repeat bg-top rounded-lg">
          <div className="text-white p-10 md:p-16">
            <div className="w-full max-w-3xl mx-auto text-center">
              <div>
                <h3 className="text-2xl font-semibold md:text-4xl">
                  <span className="bg-gradient-to-br from-green-300 to-green-200 text-transparent bg-clip-text">
                    Sahil - because delivery should be easy
                  </span>
                </h3>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <span className="px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium flex items-center gap-2">
                    <HiOutlineTruck className="w-4 h-4" />
                    Easy for drivers
                  </span>
                  <span className="px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium flex items-center gap-2">
                    <HiOutlineUser className="w-4 h-4" />
                    Easy for customers
                  </span>
                  <span className="px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium flex items-center gap-2">
                    <HiOutlineCog6Tooth className="w-4 h-4" />
                    Easy for platforms
                  </span>
                  <span className="px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium flex items-center gap-2">
                    <HiOutlineGlobeAlt className="w-4 h-4" />
                    Easy for expansion
                  </span>
                </div>
                <div className="mt-8 flex items-center justify-center">
                  <a 
                    href="https://agent.sahil.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn bg-white text-zinc-900 font-medium rounded-full"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </GridContainer>
    </SectionWrapper>
  );
};
