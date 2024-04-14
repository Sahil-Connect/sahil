import { IconButton } from "./IconButton";
import { JoinGrid } from "./JoinGrid";
import { Icon } from "./Icon";
import { HiOutlineArrowDown } from "react-icons/hi2";

export const SplitButton = () => {
  return (
    <JoinGrid>
      <button className="join-item btn btn-sm btn-primary"><HiOutlineArrowDown /> First Button</button>
      <button
        className="join-item btn btn-sm btn-square btn-primary"
        title="Dropdown"
        style={{ borderLeft: "solid 0.1rem #f8fafc" }}
      >
        <HiOutlineArrowDown />
      </button>
    </JoinGrid>
  );
};
