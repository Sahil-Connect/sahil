import React, { ReactChild } from "react";
import { Navbar } from "ui";
type LayoutProps = {
  children: ReactChild | ReactChild[];
};
import {
  HiOutlineBriefcase,
  HiOutlineUserCircle,
  HiOutlineTruck,
  HiOutlineBuildingOffice,
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
];

export default function Layout({ children, ...props }: LayoutProps) {
  return (
    <>
      <Navbar links={links} header="Sahil Client" />
      <main className="min-h-screen p-8">{children}</main>
    </>
  );
}
