import React, { ReactChild } from "react";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import { Navbar } from "ui";
import logo from "../../public/logo-alt.svg";
type LayoutProps = {
  children: ReactChild | ReactChild[];
};
import {
  HiOutlineShoppingCart,
  HiOutlineUserCircle,
  HiOutlineTruck,
  HiOutlineBuildingOffice,
  HiOutlineCube
} from "react-icons/hi2";

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
    icon: HiOutlineCube,
  }
];

export default function Layout({ children, ...props }: LayoutProps) {
  const router = useRouter();
  const { data: session } = useSession();

  const onSignOut = async () => {
    await signOut({ redirect: false, callbackUrl: "/signin" });
    router.push("/auth/signin");
  };

  return (
    <>
      <Navbar
        links={links}
        header="Sahil Client"
        onSignOut={onSignOut}
        logo={logo}
        user={session?.user}
      />
      <main className="min-h-[calc(100vh-4.5rem)] p-4 bg-gray-50">
        {children}
      </main>
    </>
  );
}
