import React, { ReactChild } from "react";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import { Navbar } from "ui";
type LayoutProps = {
  children: ReactChild | ReactChild[];
};
import {
  HiOutlineBriefcase,
  HiOutlineQueueList,
  HiOutlineTruck,
  HiOutlineBuildingOffice,
} from "react-icons/hi2";

const links = [
  {
    name: "Deliveries",
    href: "/deliveries",
    icon: HiOutlineQueueList,
  },
  {
    name: "Requests",
    href: "/requests",
    icon: HiOutlineQueueList,
  },
];

export default function Layout({ children, ...props }: LayoutProps) {
  const router = useRouter();
  const onSignOut = async () => {
    await signOut();
    router.push("/auth/signin");
  };
  return (
    <>
      <Navbar links={links} header="Sahil Courier" onSignOut={onSignOut} />
      <main className="min-h-[calc(100vh-4.5rem)] p-4 bg-gray-50">
        {children}
      </main>
    </>
  );
}
