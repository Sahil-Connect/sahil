import React, { ReactNode } from "react";
import logo from "../../public/logo-alt.svg";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import { Button, Navbar } from "ui";
type LayoutProps = {
  children: ReactNode;
};
import {
  HiOutlineUsers,
  HiOutlineQueueList,
  HiOutlineMap,
  HiOutlineIdentification,
  HiOutlineBuildingOffice2,
  HiMiniArrowLeftCircle, HiArrowPath
} from "react-icons/hi2";

const links = [
  {
    name: "Users",
    href: "/users",
    icon: HiOutlineUsers,
  },
  {
    name: "Zones",
    href: "/zones",
    icon: HiOutlineMap,
  },
  {
    name: "Agents",
    href: "/agents",
    icon: HiOutlineIdentification,
  },
  {
    name: "Orders",
    href: "/orders",
    icon: HiOutlineQueueList,
  },
  {
    name: "Clients",
    href: "/clients",
    icon: HiOutlineBuildingOffice2,
  },
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
