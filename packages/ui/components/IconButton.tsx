import { FC, MouseEvent } from "react";
import { Icon, IconProps } from "./Icon";
import { twMerge } from "tailwind-merge";

export type IconButtonProps = IconProps & {
  className?: any;
  title?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const IconButton: FC<IconButtonProps> = ({ className, icon, title, onClick }) => {
  const merged = twMerge("btn btn-xs btn-square", className);
  return (
    <button className={merged} title={title} onClick={onClick}>
      <Icon icon={icon} />
    </button>
  );
};
