import type { IconType } from "react-icons";

export type IconProps = {
  icon: IconType;
  size?: string;
};

export const Icon = ({ icon, size = "20" }: IconProps) =>
  icon({
    size,
  });
