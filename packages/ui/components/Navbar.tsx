import Image from "next/image";
import { FC, ReactNode } from "react";
import Link from "next/link";
import { Icon } from "./Icon";
import type { IconType } from "react-icons";
import {
  HiOutlineAdjustmentsHorizontal,
  HiOutlineArrowRightOnRectangle,
  HiOutlinePlus,
  HiOutlineCog6Tooth,
  HiOutlineBell,
} from "react-icons/hi2";
import { useRouter } from "next/router";

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
  const router = useRouter();

  return (
    <header className="bg-white navbar border-b">
      <div className="navbar-start w-full gap-2">
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
                  className={`btn btn-sm transition duration-300 ${
                    router.pathname === href ? "btn-primary-content text-primary" : "btn-ghost"
                  }`}
                >
                  {icon && <Icon icon={icon} />} {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
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
  const router = useRouter();

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
        {/* for now commented out the notification icon */}
        {/* <div className="relative">
          <Icon icon={HiOutlineBell} />
          <div className="absolute inline-flex items-center justify-center w-3 h-3 text-sm font-bold bg-red-500 border-2 border-white rounded-full -top-1 -end-1" />
        </div> */}
        <Link href="/settings" className="text-sm ml-2">
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
            className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52 space-y-2"
          >
            <li className="border-b font-semibold">
              <p>Quick Menu:</p>
            </li>
            {links.map(({ name, href, icon }) => {
              return (
                <li key={name}>
                  <Link
                    href={href}
                    className={router.pathname === href ? "text-secondary font-semibold" : ""}
                  >
                    <Icon icon={icon} /> {name}
                  </Link>
                </li>
              );
            })}
            <div className="border-t py-2">
              <li>
                <Link
                  href="/settings"
                  className={router.pathname === "/settings" ? "text-secondary font-semibold" : ""}
                >
                  <Icon icon={HiOutlineAdjustmentsHorizontal} /> Settings
                </Link>
              </li>
              <li>
                <button onClick={onSignOut}>
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
