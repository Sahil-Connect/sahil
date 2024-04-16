import {
  HiPlus,
  HiOutlineBuildingOffice,
  HiOutlineUsers,
  HiOutlineTruck,
  HiOutlineBugAnt,
  HiOutlineBriefcase,
} from "react-icons/hi2";
import Link from "next/link";
import { Avatar, Card } from "ui";

export const AgentToolBar = () => {
  return (
    <Card>
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <Avatar
            alt="Hello"
            src="https://avatars.githubusercontent.com/u/21015204?v=4"
          />
          <div>
            <p>Welcome back</p>
            <h1 className="text-2xl">Keji Lumori</h1>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-sm btn-primary">
              <HiOutlineUsers /> Register User
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content grow  w-full z-[1] menu p-2 border bg-base-100 rounded-box mt-4"
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
    </Card>
  );
};
