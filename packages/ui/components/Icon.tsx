import type { IconType } from "react-icons";

export type IconProps = {
  icon: IconType;
};

export const Icon = ({ icon, size = "20" }: IconProps) =>
  icon({
    size,
  });
