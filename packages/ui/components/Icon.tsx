import type { IconType } from "react-icons";

export type IconProps = {
  icon: IconType;
};

// @ts-ignore
export const Icon = ({ icon, size = "20" }: IconProps) =>
  icon({
    size,
  });
