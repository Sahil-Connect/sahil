import { FC } from "react";
import { Dropdown } from "../Dropdown";

import {
  HiOutlineShoppingCart,
  HiOutlineUserCircle,
  HiOutlineTruck,
  HiOutlineBuildingOffice,
  HiOutlineCube,
  HiOutlineXMark
} from "react-icons/hi2";

export type TableRowProps = {
  row: Record<string, any>;
};

const options = [
  {
    id: 1,
    label: "Enroute",
    icon: HiOutlineTruck,
  },
  {
    id: 2,
    label: "Delivered",
    icon: HiOutlineCube,
  },
  {
    id: 3,
    label: "Cancelled",
    icon: HiOutlineXMark,
  }
];

export const TableRow = ({ row }: TableRowProps) => {
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src="https://avatars.githubusercontent.com/u/21015204?v=4"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">Hart Hagerty</div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td>
        Zemlak, Daniel and Leannon
        <br />
        <span className="badge badge-ghost badge-sm">
          Desktop Support Technician
        </span>
      </td>
      <td>Purple</td>
      <th>
        <Dropdown CTA="Order Status" options={options} />
      </th>
    </tr>
  );
};
