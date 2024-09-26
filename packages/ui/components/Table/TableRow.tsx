import { FC } from "react";
import { Dropdown } from "../Dropdown";
import Link from "next/link";

import {
  HiOutlineShoppingCart,
  HiOutlineUserCircle,
  HiOutlineTruck,
  HiOutlineBuildingOffice,
  HiOutlineCube,
  HiOutlineXMark,
} from "react-icons/hi2";

export type TableRowProps = {
  row: Record<string, any>;
};

const options = [
  {
    id: 1,
    label: "Available",
    icon: HiOutlineTruck,
  },
  {
    id: 2,
    label: "Out of Stock",
    icon: HiOutlineCube,
  },
  {
    id: 3,
    label: "Sale",
    icon: HiOutlineXMark,
  },
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
          <div className="space-y-2">
            <div className="font-bold">
              <Link href={`/inventory/${row.id}`}>{row.name}</Link>
            </div>
            <div className="flex gap-2">
              <span className="badge badge-outline badge-sm">Groceries</span>
              <span className="badge badge-outline badge-sm">Groceries</span>
            </div>
          </div>
        </div>
      </td>
      <td>15,000 SSP</td>
      <td>15 available</td>
      <th>
        <Dropdown CTA="Available" options={options} />
      </th>
    </tr>
  );
};
