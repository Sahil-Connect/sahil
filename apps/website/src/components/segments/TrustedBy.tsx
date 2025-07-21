import { 
  SectionWrapper, 
  GridContainer 
} from "@/components/shared";

const trustedCompanies = [
  {
    name: "SafeBoda",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop&crop=center",
    description: "Leading ride-hailing platform"
  },
  {
    name: "Glovo",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&crop=center",
    description: "On-demand delivery service"
  },
  {
    name: "Jumia",
    logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=120&h=60&fit=crop&crop=center",
    description: "E-commerce marketplace"
  },
  {
    name: "Bolt",
    logo: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=120&h=60&fit=crop&crop=center",
    description: "Mobility platform"
  },
  {
    name: "Sendy",
    logo: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=120&h=60&fit=crop&crop=center",
    description: "Logistics solutions"
  },
  {
    name: "Twiga Foods",
    logo: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=120&h=60&fit=crop&crop=center",
    description: "Food distribution"
  }
];

export const TrustedBy = () => {
  return (
    <SectionWrapper>
      <GridContainer>
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-6">
            Trusted by leading platforms across Africa
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {trustedCompanies.map((company, index) => (
              <div 
                key={index}
                className="group flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-all duration-300"
              >
                <div className="w-20 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-2 group-hover:bg-gray-200 transition-colors">
                  <img 
                    src={company.logo} 
                    alt={company.name}
                    className="w-full h-full object-cover rounded-lg grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                  {company.name}
                </span>
                <span className="text-xs text-gray-500 text-center mt-1">
                  {company.description}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-gray-100">
          <p className="text-gray-600">
            <span className="font-semibold text-primary">500+ smart lockers</span> deployed across 
            <span className="font-semibold text-primary"> 15 cities</span> in North and East Africa
          </p>
        </div>
      </GridContainer>
    </SectionWrapper>
  );
};
