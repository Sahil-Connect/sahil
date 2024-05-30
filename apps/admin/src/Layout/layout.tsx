import React, { ReactNode } from "react";
import logo from "../../public/logo-alt.svg";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import { Navbar } from "ui";
type LayoutProps = {
  children: ReactNode;
};
import { HiOutlineUserGroup, HiOutlineGlobeAlt } from "react-icons/hi2";

const links = [
  {
    name: "Users",
    href: "/users",
    icon: HiOutlineUserGroup,
  },
  {
    name: "Zones",
    href: "/zones",
    icon: HiOutlineGlobeAlt,
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
        header="Sahil Admin"
        onSignOut={onSignOut}
        user={session?.user}
      />
      <main className="p-4 bg-gray-50">{children}</main>
    </>
  );
}
