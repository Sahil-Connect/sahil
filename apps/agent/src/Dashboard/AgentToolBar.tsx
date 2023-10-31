import {
  HiPlus,
  HiOutlineBuildingOffice,
  HiOutlineUsers,
  HiOutlineTruck,
  HiOutlineBugAnt,
  HiOutlineBriefcase
} from "react-icons/hi2";
import Link from "next/link";

export const AgentToolBar = () => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl">Hi, Keji Lumori</h1>
      <div className="flex gap-2">
        <button className="btn btn-sm btn-outline">
          <HiPlus /> New Order
        </button>
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className="btn btn-sm btn-primary">
            <HiOutlineUsers /> Register
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 my-2"
          >
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
                <HiOutlineBuildingOffice /> Supplier
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
