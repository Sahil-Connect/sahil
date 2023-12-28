import { 
  SectionWrapper, 
  GridContainer, 
} from '@/components/shared';

export const Features = () => {
  return (
    <SectionWrapper>
      <GridContainer>
        <div className="flex flex-col items-center justify-center lg:flex-row lg:gap-4">
          <div className="mb-10 lg:w-6/12">
            <h1 className="text-center font-bold mb-4 text-2xl lg:text-5xl lg:text-left">
              Navigate through our <span className="block"><span className="yellow-line">core features</span></span>
            </h1>
            <p className="text-center text-gray-600 max-w-[50ch] lg:text-left">
              These features make Sahil the perfect platform for your business. Each feature is designed with your business needs in mind. 
            </p>
          </div>
          <div className="mx-4 lg:mx-0 lg:w-6/12">
            <ol className="relative border-s border-gray-200">
              <li className="mb-10 ms-6 lg:ms-10">
                <span className="absolute flex items-center justify-center w-6 h-6 lg:w-8 lg:h-8 bg-primary rounded-full -start-3 ring-8 ring-green-50">
                  <svg className="text-gray-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M10 7v2h2v8h2V7z"/>
                  </svg>
                </span>
                <h3 className="mb-1 text-lg font-semibold text-gray-900 lg:text-xl">
                  User Registration
                </h3>
                <p className="text-base font-normal text-gray-600">
                  A seamless registration process. This feature ensures a smooth onboarding experience for all users by providing necessary details that help tailor the platform’s services to their specific needs. 
                </p>
              </li>
              <li className="mb-10 ms-6 lg:ms-10">
                <span className="absolute flex items-center justify-center w-6 h-6 lg:w-8 lg:h-8 bg-primary rounded-full -start-3 ring-8 ring-green-50">
                  <svg className="text-gray-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M9 7v2h4v2h-2a2 2 0 0 0-2 2v4h6v-2h-4v-2h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                  </svg>
                </span>
                <h3 className="mb-1 text-lg font-semibold text-gray-900 lg:text-xl">
                  Matching Process
                </h3>
                <p className="text-base font-normal text-gray-600">
                  At the heart of Sahil is a sophisticated matching process. This feature connects businesses with the right suppliers and customers based on various factors such as product type, location, quantity, and price.
                </p>
              </li>
              <li className="ms-6 lg:ms-10">
                <span className="absolute flex items-center justify-center w-6 h-6 lg:w-8 lg:h-8 bg-primary rounded-full -start-3 ring-8 ring-green-50">
                  <svg className="text-gray-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M15 15v-1.5a1.5 1.5 0 0 0-1.5-1.5a1.5 1.5 0 0 0 1.5-1.5V9a2 2 0 0 0-2-2H9v2h4v2h-2v2h2v2H9v2h4a2 2 0 0 0 2-2"/>
                  </svg>
                </span>
                <h3 className="mb-1 text-lg font-semibold text-gray-900 lg:text-xl">
                  Delivery Process
                </h3>
                <p className="text-base font-normal text-gray-600">
                  Sahil is all about efficiency and reliability. We ensure goods are distributed from suppliers to businesses, and from businesses to customers in a timely manner. Users can monitor the progress of their deliveries from start to finish.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </GridContainer>
    </SectionWrapper>
  )
}
