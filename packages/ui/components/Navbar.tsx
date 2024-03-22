import Image from "next/image";
import { FC } from "react";
import Link from "next/link";
import { Icon } from "./Icon";
import type { IconType } from "react-icons";
import {
  HiOutlineAdjustmentsHorizontal,
  HiOutlineArrowRightOnRectangle,
  HiOutlinePlus
} from "react-icons/hi2";

type NavbarLink = {
  name: string;
  href: string;
  icon: IconType;
};

export type NavbarProps = {
  links: NavbarLink[];
  logo?: any;
  header?: string;
  onSignOut?: () => void;
  user?: any;
};

export const Navbar: FC<NavbarProps> = ({
  links,
  logo,
  header = "Sahil",
  onSignOut,
  user = {},
}) => {
  console.log(user?.image);
  return (
    <header className="navbar shadow border-b">
      <div className="navbar-start gap-8">
        <Link
          href="/"
          className="font-semibold flex items-center text-base lg:text-lg"
        >
          {logo && (
            <Image
              src={logo}
              alt="Sahil"
              loading="eager"
              className="h-10 w-8 object-contain md:w-16"
            />
          )}
          {header}
        </Link>
        <nav>
          <ul className="menu menu-horizontal px-1 hidden lg:flex lg:items-center lg:gap-2">
            {links.map(({ name, href, icon }) => (
              <li key={name}>
                <Link
                  href={href}
                  className="transition-[0.4s] hover:text-green-dark"
                >
                  {icon && <Icon icon={icon} />} {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="navbar-end gap-4">
        <button className="btn btn-sm btn-primary">New Order <HiOutlinePlus /> </button>
        <div className="dropdown dropdown-end text-gray-600">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt={user?.name} src={user?.image} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-2"
          >
            {links.map(({ name, href, icon }) => {
              return (
                <li key={name}>
                  <Link href={href}>
                    <Icon icon={icon} /> {name}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link href="/settings">
                <Icon icon={HiOutlineAdjustmentsHorizontal} /> Settings
              </Link>
            </li>
            <li>
              <button onClick={onSignOut}>
                <Icon icon={HiOutlineArrowRightOnRectangle} /> Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
