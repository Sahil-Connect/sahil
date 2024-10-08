import React, { ReactChild } from "react";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import { Navbar } from "ui";
import logo from "../../public/logo-alt.svg";
type LayoutProps = {
  children: ReactChild | ReactChild[];
};
import {
  HiOutlineBriefcase,
  HiOutlineUserCircle,
  HiOutlineTruck,
  HiOutlineCreditCard,
} from "react-icons/hi2";

const links = [
  {
    name: "Products",
    href: "/products",
    icon: HiOutlineBriefcase,
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
    name: "Billing",
    href: "/billing",
    icon: HiOutlineCreditCard,
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
      {session?.user && (
        <Navbar
          links={links}
          header="Client"
          onSignOut={onSignOut}
          logo={logo}
          user={session?.user}
        />
      )}
      <main className={session?.user ? "p-4" : "p-0"}>{children}</main>
    </>
  );
}
