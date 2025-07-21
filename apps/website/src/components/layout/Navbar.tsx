import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import { GridContainer } from "../shared";
import { HiOutlineBars3, HiHome, HiInformationCircle, HiCog6Tooth, HiCube, HiUserGroup, HiEnvelope } from "react-icons/hi2";

const links = [
  {
    name: "Home",
    href: "/",
    icon: HiHome,
  },
  {
    name: "About Us",
    href: "/about",
    icon: HiInformationCircle,
  },
  {
    name: "Features",
    href: "/features",
    icon: HiCog6Tooth,
  },
  {
    name: "Sahil Box",
    href: "/sahil-box",
    icon: HiCube,
  },
  {
    name: "Partner with Us",
    href: "/partners",
    icon: HiUserGroup,
  },
  {
    name: "Contact Us",
    href: "/contact",
    icon: HiEnvelope,
  },
];

export const Navbar = () => {
  return (
    <header className="w-full h-16 lg:h-20 bg-gray-50 border-b border-b-gray-300 lg:border-none">
      <GridContainer className="px-2">
        <nav className="navbar p-0 lg:h-20">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <HiOutlineBars3 size={24} />
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-gray-50 rounded-box w-52"
              >
                {links.map(({ name, href, icon: Icon }) => {
                  return (
                    <li key={name}>
                      <Link
                        href={href}
                        className="text-zinc-900 text-base transition duration-300 ease-linear hover:text-primary flex items-center gap-2"
                      >
                        <Icon size={18} />
                        {name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <Link href="/">
              <Image
                src={logo}
                alt={"Sahil"}
                loading="eager"
                className="w-20 max-w-full object-contain"
              />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex lg:border lg:bg-white lg:px-4 lg:rounded-full">
            <ul className="menu menu-horizontal px-1 lg:gap-x-6">
              {links.map(({ name, href, icon: Icon }) => {
                return (
                  <li key={name}>
                    <Link
                      href={href}
                      className="px-2 py-2 text-zinc-900 transition duration-300 hover:text-primary focus:text-primary lg:rounded-full flex items-center gap-2"
                    >
                      <Icon size={18} />
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="navbar-end">
            <a 
              href="https://agent.sahil.app/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary font-medium text-white rounded-full"
            >
              Get Started
            </a>
          </div>
        </nav>
      </GridContainer>
    </header>
  );
};
