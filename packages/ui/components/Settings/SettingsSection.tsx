import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface SettingsSectionProps {
  children: ReactNode;
  className?: string;
}

export const SettingsSection = ({ children, className }: SettingsSectionProps) => {
  const defaultClass = "pt-4 flex flex-col lg:flex-row";
  const mergedClass = twMerge(defaultClass, className);
  return <div className={mergedClass}>{children}</div>;
};
