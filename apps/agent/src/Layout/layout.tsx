import React, { ReactChild } from "react";
import logo from "../../public/logo.png";
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
  return (
    <>
      <Navbar links={links} logo={logo} header="Sahil Agent"/>
      <main className="min-h-screen p-8">{children}</main>
    </>
  );
}
