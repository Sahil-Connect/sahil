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
  HiOutlineBell,
  HiArrowsRightLeft,
  HiOutlineEye,
  HiOutlineBuildingStorefront,
  HiOutlineBriefcase,
  HiOutlineTruck,
  HiOutlineCube,
  HiOutlineShieldExclamation
} from "react-icons/hi2";
import { useRouter } from "next/router";
import { useGetUserById } from "@sahil/lib/hooks/users";
import { useUser } from '@sahil/features/auth/UserContext';

type NavbarLink = {
  name: string;
  href: string;
  icon: IconType;
};

type ProfileType = 'admin' | 'supplier' | 'agent' | 'business';

type UserWithProfile = {
  id: string;
  name: string;
  email: string;
  image: string;
  profileType: ProfileType;
  canSwitchProfiles?: boolean;
};

export type NavbarProps = {
  children?: ReactNode;
  links: NavbarLink[];
  logo?: any;
  header?: string;
  onSignOut?: () => void;
  user?: UserWithProfile;
  onProfileSwitch?: (profileType: ProfileType) => void;
};

const MapRoleToIcon = {
  admin: HiOutlineShieldExclamation,
  supplier: HiOutlineBriefcase,
  agent: HiOutlineTruck,
  business: HiOutlineBriefcase,
}

export const Navbar: FC<NavbarProps> = ({
  links,
  logo,
  header = "Sahil",
  onSignOut,
  user,
  onProfileSwitch,
}) => {
  const router = useRouter();
  const { currentUser } = useUser();

  // Merge session user with current user data
  const userData = {
    ...user,
    ...currentUser
  };

  const isActive = (href: string) => router.pathname === href;


  return (
    <header className="bg-white navbar border-b">
      <div className="w-full flex items-center gap-2">

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
                    className={`px-2 py-2 text-sm transition duration-300 hover:text-green-dark relative
                      ${isActive(href) ? 'bg-primary text-white' : 'bg-transparent'}`}
                  >
                    {icon && <Icon icon={icon} />} {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <Right user={userData} links={links} onSignOut={onSignOut} onProfileSwitch={onProfileSwitch} />
    </header>
  );
};

export default Navbar;

type ViewAsProps = {
  currentRole: string;
  isAdmin: boolean;
  onRoleSwitch?: (type: ProfileType) => void;
};

const ViewAs: FC<ViewAsProps> = ({ currentRole, isAdmin, onRoleSwitch }) => {
  if (!currentRole) return null;

  return (
    <div className="flex items-center gap-2">
      <div className="badge badge-lg badge-info capitalize py-4 text-foreground text-sm gap-2">
        <Icon icon={MapRoleToIcon[currentRole as keyof typeof MapRoleToIcon]} /> {currentRole}
      </div>
      {isAdmin && (
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-sm btn-ghost"
            title="View as different role"
          >
            <Icon icon={HiOutlineEye} />
          </div>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow border bg-base-100 rounded-lg w-48 mt-2">
            <li className="menu-title px-2 pt-0">
              <span className="text-xs text-gray-500">View as:</span>
            </li>
            {(['supplier', 'agent', 'business'] as ProfileType[]).map((type) => (
              <li key={type}>
                <button
                  onClick={() => onRoleSwitch?.(type)}
                  className={`capitalize ${type === currentRole ? 'bg-primary/10' : ''}`}
                >
                  {type}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Right = ({
  user,
  links,
  onSignOut,
  onProfileSwitch,
  children,
}: {
  user: any;
  links: NavbarLink[];
  onSignOut?: () => void;
  onProfileSwitch?: (profileType: ProfileType) => void;
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
      <div className="flex items-center gap-2">
        {user.role && (
          <ViewAs
            currentRole={user.role}
            isAdmin={user.role === 'admin'}
            onRoleSwitch={onProfileSwitch}
          />
        )}

        <Link
          href="/notifications"
          className="text-sm flex items-center gap-2"
        >
          <Icon icon={HiOutlineBell} />
        </Link>

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
                  rel="noopener noreferrer"
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