import React, { ReactNode } from "react";
import logo from "../../public/logo.png";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import { Navbar } from "ui";
type LayoutProps = {
  children: ReactNode;
};
import {
  HiOutlineBriefcase,
  HiOutlineQueueList,
  HiOutlineTruck,
  HiOutlineBuildingOffice,
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
    icon: HiOutlineQueueList,
  },
  {
    name: "Suppliers",
    href: "/suppliers",
    icon: HiOutlineBuildingOffice,
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
      <Navbar
        links={links}
        logo={logo}
        header="Sahil Agent"
        onSignOut={onSignOut}
      />
      <main className="min-h-[calc(100vh-4.5rem)] p-4 bg-gray-50">
        {children}
      </main>
    </>
  );
}
