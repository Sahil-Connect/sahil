import Image from "next/image";
import { FC, ReactNode } from "react";
import Link from "next/link";
import { Icon } from "./Icon";
import type { IconType } from "react-icons";
import {
  HiOutlineInformationCircle,
  HiOutlineArrowRightOnRectangle,
  HiOutlineUser,
  HiOutlineCog6Tooth,
  HiOutlineBell
} from "react-icons/hi2";

type NavbarLink = {
  name: string;
  href: string;
  icon: IconType;
};

export type NavbarProps = {
  children?: ReactNode;
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
  user,
}) => {
  return (
    <header className="bg-white navbar border-b">
      <div className="w-full flex items-center gap-2">
        {/* mobile hamburger */}
        <div className="dropdown dropdown-start text-gray-600 lg:hidden">
          <div
            tabIndex={0}
            role="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-10 p-2 border shadow bg-base-100 rounded-lg w-fit space-y-2"
          >
            <li className="border-b font-semibold">
              <p>Quick Menu:</p>
            </li>
            {links.map(({ name, href, icon }) => {
              return (
                <li key={name}>
                  <Link href={href}>
                    <Icon icon={icon} /> {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="navbar-start flex w-full gap-2">
          <Link
            href="/"
            className="flex items-center text-base font-semibold lg:text-lg"
          >
            {logo && (
              <Image
                src={logo}
                alt="Sahil"
                loading="eager"
                className="w-10 max-w-full object-cover"
              />
            )}
            {header}
          </Link>
          <nav>
            <ul className="menu menu-horizontal px-1 hidden lg:flex lg:items-center lg:gap-2 flex-nowrap">
              {links.map(({ name, href, icon }) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="px-2 py-1 text-sm transition duration-300 hover:text-green-dark"
                  >
                    {icon && <Icon icon={icon} />} {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <Right user={user} links={links} onSignOut={onSignOut} />
    </header>
  );
};

export default Navbar;

const Right = ({
  user,
  links,
  onSignOut,
  children,
}: {
  user: any;
  links: NavbarLink[];
  onSignOut?: () => void;
  children?: ReactNode;
}) => {
  if (!user) {
    return (
      <div className="navbar-end">
        <Link href="/auth/signin" className="btn btn-primary">
          Sign In
        </Link>
      </div>
    );
  }

  return (
    <div className="navbar-end">
      <div className="flex items-center gap-0">
        <Link 
          href="/notifications"
          className="text-sm ml-2"
        >
          <Icon icon={HiOutlineBell} />
        </Link>
        <Link 
          href="/settings/profile"
          className="text-sm ml-2"
        >
          <Icon icon={HiOutlineCog6Tooth} />
        </Link>
        <div className="divider divider-horizontal h-6 m-auto" />
        <div className="dropdown dropdown-end text-gray-600">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt={user.name} src={user.image} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow border bg-base-100 rounded-lg w-fit space-y-2"
          >
            <div className="flex items-center gap-2 border-b py-1">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img alt={user.name} src={user.image} />
                </div>
              </div>
              <div>
                <h4 className="text-sm leading-tight">{user.name}</h4>
                <p className="text-xs">{user.email}</p>
              </div>
            </div>
            <div>
              <li>
                <Link href="/settings/profile">
                  <Icon icon={HiOutlineUser} /> View profile
                </Link>
              </li>
              <li>
                <Link href="/settings/general">
                  <Icon icon={HiOutlineCog6Tooth} /> Account settings
                </Link>
              </li>
            </div>
            <div className="border-t pt-2">
              <li>
                <a 
                  href="https://sahil.app/help"
                  target="_blank" 
                >
                  <Icon icon={HiOutlineInformationCircle} /> Help & Support
                </a>
              </li>
            </div>
            <div className="border-t pt-2">
              <li>
                <button onClick={onSignOut} className="text-red-600">
                  <Icon icon={HiOutlineArrowRightOnRectangle} /> Logout
                </button>
              </li>
            </div>
          </ul>
        </div>
      </div>
      {children}
    </div>
  );
};
