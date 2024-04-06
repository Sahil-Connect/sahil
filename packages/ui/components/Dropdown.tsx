import { FC } from "react";
import { HiArrowDown } from "react-icons/hi2";
import { Icon } from "./Icon";
import type { IconType } from "react-icons";

import {
  HiOutlineArrowSmallDown,
} from "react-icons/hi2";

type DropdownOption = {
  id?: string;
  label?: string;
  icon?: IconType;
  handler?: () => void;
};

export type DropdownProps = {
  CTA?: string;
  options?: DropdownOption[];
};

export const Dropdown: FC<DropdownProps> = ({ options, CTA }) => {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-secondary btn-sm">
        {CTA} <HiOutlineArrowSmallDown />
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 border bg-base-100 rounded-box mt-4 space-y-2"
      >
        {options?.map((option: DropdownOption) =>        <li key={option?.id}>
          <button className="btn btn-sm btn-ghost"><Icon icon={option.icon} /> {option.label}</button>
        </li>)}
      </ul>
    </div>
  );
};
