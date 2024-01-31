import Image from "next/image";
import { FC } from "react";
import Link from "next/link";
import { Icon } from "./Icon";
import type { IconType } from "react-icons";
import {
  HiOutlineAdjustmentsHorizontal,
  HiOutlineArrowRightOnRectangle,
} from "react-icons/hi2";

type NavbarLink = {
  name: string;
  href: string;
  icon?: IconType;
};

export type NavbarProps = {
  links: NavbarLink[];
  logo?: any;
  header?: string;
  onSignOut: () => void;
};

export const Navbar: FC<NavbarProps> = ({
  links,
  logo,
  header = "Sahil",
  onSignOut,
}) => {
  return (
    <header className="navbar bg-primary text-white shadow-sm">
      <div className="navbar-start">
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
      </div>
      <nav className="navbar-end">
        <ul className="menu menu-horizontal px-1 hidden lg:flex lg:items-center lg:gap-4">
          {links.map(({ name, href, icon }) => (
            <li key={name}>
              <Link
                href={href}
                className="font-semibold transition-[0.4s] hover:text-green-dark"
              >
                {icon && <Icon icon={icon} />} {name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="dropdown dropdown-end text-gray-600">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full ring ring-primary ring-offset-bg-base-100 ring-offset-2">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://avatars.githubusercontent.com/u/21015204?v=4"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-2"
          >
            {links.map(({ name, href, icon }) => {
              return (
                <li key={name}>
                  <Link href={href} className="font-semibold">
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
      </nav>
    </header>
  );
};

export default Navbar;
