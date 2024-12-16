import React, { ReactNode, useEffect } from "react";
import logo from "../../public/logo-alt.svg";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { UserProvider } from '@sahil/features/auth/UserContext';
import { useGetUserById } from "@sahil/lib/hooks/users";
import { SplashScreen, Navbar, ContentLayout } from "ui";

import {
  HiOutlineBriefcase,
  HiOutlineCube,
  HiOutlineTruck,
  HiOutlineBuildingStorefront,
  HiMiniArrowLeftCircle, HiArrowPath,
  HiOutlineIdentification,
  HiOutlineMap,
  HiOutlineUsers,
  HiOutlineBuildingOffice2,
  HiOutlineQueueList
} from "react-icons/hi2";

import { Button } from "ui";

type LayoutProps = {
  children: ReactNode;
};


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

  if (!session) {
    return <SplashScreen />;
  }

  return (
    <UserProvider session={session}>
        <Navbar
          links={links}
          logo={logo}
          header="Admin"
          onSignOut={onSignOut}
          user={{
            ...session.user,
            ...currentUser
          }}
        />
      <ContentLayout
        isAuthRoute={isAuthRoute}
        router={router}
        handleBack={handleBack}
        handleRefresh={handleRefresh}
        bottomLinks={links}
      >
        {children}
      </ContentLayout>
    </UserProvider>
  );
}
