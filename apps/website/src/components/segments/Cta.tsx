import { 
  SectionWrapper, 
  GridContainer 
} from "@/components/shared";

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
                    Ready to Take the Next Step?
                  </span>
                </h3>
                <p className="text-sm mt-3">
                  Sign up today and use our services to grow your business
                </p>
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
