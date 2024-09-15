import {
  HiOutlineBuildingStorefront,
  HiChevronDown,
  HiOutlineTruck,
  HiOutlineBriefcase,
} from "react-icons/hi2";
import Link from "next/link";
import { Avatar } from "ui";
import { useSession } from "next-auth/react";
import { formatCurrentDate } from "@sahil/lib/dates";

export const AgentToolBar = () => {
  const { data } = useSession();
  const user = data?.user;

  return (
    <div className="flex justify-between items-center my-2 p-2 border rounded-2xl md:p-3">
      <div className="flex items-center gap-2">
        <Avatar alt="Hello" src={user?.image} />
        <div>
          <h1 className="text-lg md:text-xl font-semibold">Hey, {user?.name?.split(' ')[0]}</h1>
          <p className="text-xs md:text-sm text-gray-600">{formatCurrentDate()}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-sm btn-primary capitalize rounded-md">
            <span className="hidden md:block">
              Register  
            </span> <HiChevronDown />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52 space-y-2"
          >
              <li className="border-b font-semibold">
              <p className="">Quick Register:</p>
            </li>
            <li>
              <Link href="/businesses/register/business_info">
                <HiOutlineBriefcase /> Business
              </Link>
            </li>
            <li>
              <Link href="/couriers/register/personal_info">
                <HiOutlineTruck /> Courier
              </Link>
            </li>
            <li>
              <Link href="/suppliers/register/business_info">
                <HiOutlineBuildingStorefront /> Supplier
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
