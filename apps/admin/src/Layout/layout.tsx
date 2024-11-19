import React, { ReactNode } from "react";
import logo from "../../public/logo-alt.svg";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import { Navbar } from "ui";
type LayoutProps = {
  children: ReactNode;
};
import {
  HiOutlineUsers,
  HiOutlineQueueList,
  HiOutlineMap,
  HiOutlineIdentification,
  HiOutlineBuildingOffice2,
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
          header="Admin"
          onSignOut={onSignOut}
          user={session?.user}
        />
      )}
      <main className={session?.user ? "p-4" : "p-0"}>{children}</main>
    </>
  );
}
