import React, { ReactNode, useEffect } from "react";
import logo from "../../public/logo-alt.svg";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import { ContentLayout, Navbar } from "ui";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { UserProvider } from '@sahil/features/auth/UserContext';
import { useGetUserById } from "@sahil/lib/hooks/users";
import { SplashScreen } from "ui";

import {
  HiOutlineTruck,
  HiOutlineQueueList,
  HiOutlineUser,
  HiOutlineBell,
  HiOutlineMapPin,
  HiOutlineHome
} from "react-icons/hi2";

import { Button } from "ui";

type LayoutProps = {
  children: ReactNode;
};

const links = [
  {
    name: "Deliveries",
    href: "/deliveries",
    icon: HiOutlineTruck,
  },
  {
    name: "Requests",
    href: "/requests",
    icon: HiOutlineQueueList,
  },
];

const bottomLinks = [
  {
      icon: HiOutlineHome,
      name: 'Home',
      href: '/'
    },
  {
    icon: HiOutlineMapPin,
    name: 'Deliveries',
    href: '/deliveries'
  },
  {
    href: "/requests",
    name: "Requests",
    icon: HiOutlineBell,
  },
  {
      icon: HiOutlineUser,
      name: 'Profile',
      href: '/profile'
    }
]

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


  if (!session && !isAuthRoute) {
    return <SplashScreen />;
  }
  return (
    <UserProvider session={session}>
      <Navbar
        links={links}
        logo={logo}
        header="Courier"
        onSignOut={onSignOut}
        user={{
          ...session?.user,
          ...currentUser
        }}
      />
      <ContentLayout
        isAuthRoute={isAuthRoute}
        router={router}
        handleBack={handleBack}
        handleRefresh={handleRefresh}
        bottomLinks={bottomLinks}
      >
        {children}
      </ContentLayout>
    </UserProvider>
  );
}
