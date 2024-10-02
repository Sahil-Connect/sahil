import React, { ReactNode } from "react";
import logo from "../../public/logo-alt.svg";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import { Navbar } from "ui";
type LayoutProps = {
  children: ReactNode;
};
import {
  HiOutlineBriefcase,
  HiOutlineCube,
  HiOutlineTruck,
  HiOutlineBuildingStorefront,
} from "react-icons/hi2";

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

  const onSignOut = async () => {
    await signOut();
    router.push("/auth/signin");
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
      <main className={session?.user ? "p-4" : "p-0"}>{children}</main>
    </>
  );
}
