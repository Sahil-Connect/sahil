import { FC } from "react";
import { Icon, IconProps } from "./Icon";
import { twMerge } from "tailwind-merge";

export type IconButtonProps = IconProps & {
  className?: any;
  title?: string;
};

export const IconButton: FC<IconButtonProps> = ({ className, icon, title }) => {
  const merged = twMerge("btn btn-xs btn-square", className);
  return (
    <button className={merged} title={title}>
      <Icon icon={icon} />
    </button>
  );
};
