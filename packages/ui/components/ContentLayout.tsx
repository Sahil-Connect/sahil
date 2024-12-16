import {
    HiOutlineBriefcase,
    HiOutlineCube,
    HiOutlineTruck,
    HiOutlineBuildingStorefront,
    HiMiniArrowLeftCircle, 
    HiArrowPath
} from "react-icons/hi2";
import { Button } from "./Button";
import Link from "next/link";

type NavLink = {
  name: string;
  href: string;
  icon: React.ComponentType<any>;
};

export const ContentLayout = ({ 
    children,
    isAuthRoute,
    router,
    handleBack,
    handleRefresh,
    bottomLinks
}: { 
    children: React.ReactNode, 
    isAuthRoute: boolean, 
    router: any, 
    handleBack: () => void, 
    handleRefresh: () => void,
    bottomLinks?: NavLink[]
}) => {
  return (
    <main className={isAuthRoute ? "p-0" : "p-2 space-y-4 bg-gradient-to-b from-gray-50 to-white pb-20 md:pb-4"}>
      {!isAuthRoute && router.pathname !== "/" && (
        <div className="flex items-center justify-between p-2 rounded-lg bg-transparent">
          <Button
            onClick={handleBack}
            variant="ghost"
            size="sm"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <HiMiniArrowLeftCircle className="w-5 h-5 mr-1" />
            Back
          </Button>
          <Button
            onClick={handleRefresh}
            variant="ghost"
            size="sm"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            Refresh
            <HiArrowPath className="w-5 h-5 ml-1" />
          </Button>
        </div>
      )}
      <div className="border border-2 border-gray-200 rounded-lg p-2">
        {children}
      </div>
      
      {bottomLinks && (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden">
          <div className="flex justify-around p-2">
            {bottomLinks.map((link) => {
              const Icon = link.icon;
              const isActive = router.pathname === link.href;
              
              return (
                <div 
                key={link.href}
                className={`flex flex-col items-center justify-center gap-2`}
              >
                <Link 
                  href={link.href} 
                  className={`flex items-center justify-center gap-2 p-2 rounded-full transition-all duration-200 ease-in-out ${isActive ? 'flex items-center justify-center rounded-full bg-primary/50 border-secondary/40 border-2  shadow-sm' : ''}`}
                >
                  <link.icon 
                    size={20} 
                    className="transition-all duration-200 text-muted-foreground hover:scale-110" 
                  />
                </Link>
                <span
                  className="text-xs md:text-sm font-medium whitespace-nowrap transition-colors duration-200"
                >
                  {link.name}
                </span>
              </div>
              );
            })}
          </div>
        </nav>
      )}
    </main>
  );
};
