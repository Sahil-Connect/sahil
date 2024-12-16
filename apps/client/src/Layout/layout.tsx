import React, { ReactNode } from "react";
import logo from "../../public/logo-alt.svg";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import { Navbar } from "ui";

import {
  HiOutlineBriefcase,
  HiOutlineCube,
  HiOutlineTruck,
  HiOutlineBuildingStorefront,
  HiMiniArrowLeftCircle, HiArrowPath,
  HiOutlineShoppingCart,
  HiOutlineUserCircle,
  HiOutlineDocumentChartBar
} from "react-icons/hi2";

import { Button } from "ui";

type LayoutProps = {
  children: ReactNode;
};


const links = [
  {
    name: "Products",
    href: "/products",
    icon: HiOutlineShoppingCart,
  },
  {
    name: "Orders",
    href: "/orders",
    icon: HiOutlineTruck,
  },
  {
    name: "Account",
    href: "/account",
    icon: HiOutlineUserCircle,
  },
  {
    name: "Inventory",
    href: "/inventory",
    icon: HiOutlineCube
  },
  {
    name: "Reports",
    href: "/reports",
    icon: HiOutlineDocumentChartBar
  }
];

export default function Layout({ children, ...props }: LayoutProps) {
  const router = useRouter();
  const { data: session } = useSession();
  const isAuthRoute = router.pathname.startsWith('/auth');

  const onSignOut = async () => {
    await signOut();
    router.push("/auth/signin");
  };

  const handleBack = () => {
    router.back();
  };

  const handleRefresh = () => {
    router.replace(router.asPath);
  };

  return (
    <>
      {session?.user && (
        <Navbar
          links={links}
          logo={logo}
          header="Agent"
          onSignOut={onSignOut}
          user={session?.user}
        />
      )}
      <main className={isAuthRoute ? "p-0" : "p-4 space-y-4"}>
        {!isAuthRoute && router.pathname !== "/" && (
          <div className="flex items-center justify-between">
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
        {children}
      </main>
    </>
  );
}
