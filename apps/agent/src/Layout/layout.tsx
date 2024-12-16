import React, { ReactNode, useEffect } from "react";
import logo from "../../public/logo-alt.svg";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import { Navbar } from "ui";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { UserProvider, useUser } from '../context/UserContext';
import { useGetUserById } from "@sahil/lib/hooks/users";

import {
  HiOutlineBriefcase,
  HiOutlineCube,
  HiOutlineTruck,
  HiOutlineBuildingStorefront,
  HiMiniArrowLeftCircle, HiArrowPath
} from "react-icons/hi2";

import { Button } from "ui";

type LayoutProps = {
  children: ReactNode;
};

const links = [
  {
    name: "Businesses",
    href: "/businesses",
    icon: HiOutlineBriefcase,
  },
  {
    name: "Couriers",
    href: "/couriers",
    icon: HiOutlineTruck,
  },
  {
    name: "Orders",
    href: "/orders",
    icon: HiOutlineCube,
  },
  {
    name: "Suppliers",
    href: "/suppliers",
    icon: HiOutlineBuildingStorefront,
  },
];


export default function Layout({ children, ...props }: LayoutProps) {
  const router = useRouter();
  const { data: session } = useSession();
  const isAuthRoute = router.pathname.startsWith('/auth');
 
  const { data: currentUser, loading: userLoading } = useGetUserById(session?.user?.id);
  useEffect(() => {
    NProgress.configure({ 
      showSpinner: false,
      trickleSpeed: 200,
      minimum: 0.08
    });

    const handleStart = () => {
      NProgress.start();
    };

    const handleStop = () => {
      NProgress.done();
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

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
    <UserProvider session={session}>
      {session?.user && (
        <Navbar
          links={links}
          logo={logo}
          header="Agent"
          onSignOut={onSignOut}
          user={{
            ...session.user,
            ...currentUser
          }}
        />
      )}
      <main className={isAuthRoute ? "p-0" : "p-4 space-y-4"}>
        {!isAuthRoute && router.pathname !== "/" && (
          <div className="flex items-center justify-between p-2 rounded-lg bg-gray-50">
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
    </UserProvider>
  );
}
