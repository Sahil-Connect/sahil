import Image from "next/image";
import { FC } from "react";
import Link from "next/link";
import { Icon } from "./Icon";
import type { IconType } from "react-icons";

type NavbarLink = {
  name: string;
  href: string;
  icon?: IconType;
};

export type NavbarProps = {
  links: NavbarLink[];
  logo: string;
};

export const Navbar: FC<NavbarProps> = ({ links, logo }) => {
  return (
    <header className="navbar bg-white shadow-sm">
      <div className="navbar-start">
        <Link
          href="/"
          className="font-semibold flex items-center text-base lg:text-lg"
        >
          <Image
            src={logo}
            alt="Sahil"
            loading="eager"
            className="h-10 w-8 object-contain md:w-16"
          />
          Sahil Agent
        </Link>
      </div>
      <nav className="navbar-end">
        <ul className="menu menu-horizontal px-1 hidden lg:flex lg:items-center lg:gap-4">
          {links.map(({ name, href, icon }) => (
            <li key={name}>
              <Link
                href={href}
                className="text-base font-semibold transition-[0.4s] hover:text-green-dark"
              >
                {icon && <Icon icon={icon} />} {name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="dropdown dropdown-end">
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links.map(({ name, href }) => {
              return (
                <li key={name}>
                  <Link href={href} className="text-base font-semibold">
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
