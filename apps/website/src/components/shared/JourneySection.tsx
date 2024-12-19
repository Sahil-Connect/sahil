import { SectionWrapper } from "./SectionWrapper";

const valuesData = [
  { name: '1. Inclusivity. We offer dual interfaces – an agent-assisted dashboard for users with limited digital literacy and an advanced client dashboard for tech-savvy users.'},
  { name: '2. Innovation. Our AI-powered matching algorithm connects businesses with the right suppliers, while our blockchain-based quality control ensures transparency and trust.'},
  { name: '3. Integration. We facilitate vertical market expansion, helping businesses explore new opportunities along the value chain'},
];

export const JourneySection = () => {
  return (
    <SectionWrapper>
      <div className="-mt-16 flex flex-col gap-3 lg:flex-row">
        <div className="mt-8 flex w-auto h-96 flex-col items-start justify-center rounded-lg bg-purple-50 lg:h-auto lg:mt-0">
          <div className="p-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" fillRule="evenodd" d="M3 2.25a.75.75 0 0 1 .75.75v.54l1.838-.46a9.75 9.75 0 0 1 6.725.738l.108.054A8.25 8.25 0 0 0 18 4.524l3.11-.732a.75.75 0 0 1 .917.81a47.8 47.8 0 0 0 .005 10.337a.75.75 0 0 1-.574.812l-3.114.733a9.75 9.75 0 0 1-6.594-.77l-.108-.054a8.25 8.25 0 0 0-5.69-.625l-2.202.55V21a.75.75 0 0 1-1.5 0V3A.75.75 0 0 1 3 2.25" clipRule="evenodd"/>
            </svg>
            <p className="mt-4 text-sm">Founder&#39;s Story</p>
            <h3 className="mt-4 text-base font-inter font-semibold">Our journey began back in 2023</h3>
            <div className="my-2 border-b border-b-gray-300" />
            <p className="text-sm">
              Sahil was born out of struggles many small businesses face when running their 
              day-to-day operations to keep their businesses afloat.
            </p>
            <p className="my-2 text-sm font-medium">That is:</p>
            <p className="text-sm">
              • Finding reliable suppliers <br />
              • Negotiating prices <br />
              • Managing orders <br />
              • Ensuring timely deliveries and much more
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 w-fit">
          <div className="mt-8 flex w-auto pt-0 flex-col items-start justify-center rounded-lg bg-blue-50 lg:mt-0">
            <div className="p-8">
              <h3 className="text-2xl font-semibold">Mission</h3>
              <div className="my-2 border-b border-b-gray-300" />
              <p className="mt-8 text-sm">
                To revolutionize how businesses connect, procure, and grow by leveraging cutting-edge technology and 
                a deep understanding of local market dynamics.
              </p>
            </div>
          </div>
          <div className="mt-4 flex w-auto pt-0 flex-col items-start justify-center rounded-lg bg-green-50 lg:mt-0">
            <div className="p-8">
              <h3 className="text-2xl font-semibold">Vision</h3>
              <div className="my-2 border-b border-b-gray-300" />
              <p className="mt-8 text-sm">
                To create an inclusive, efficient, and sustainable business ecosystem that drives economic growth and 
                empowers entrepreneurs across diverse markets.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 flex w-auto h-96 flex-col items-start justify-center rounded-lg bg-yellow-50 lg:h-auto lg:mt-0">
          <div className="p-8">
            <h3 className="text-2xl font-inter font-semibold">What We Do</h3>
            <div className="my-1 border-b border-b-gray-300 md:my-2" />
            <p className="my-2 text-sm md:my-4">
              Our platform is built on three core pillars:
            </p>
            <ul className="flex flex-col">
              {valuesData.map (({ name }) => {
                return(
                  <li key={name} className="flex items-center gap-x-2 my-1 md:my-2">
                    <span className="text-sm">{name}</span>
                  </li>
                )})
              }
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
