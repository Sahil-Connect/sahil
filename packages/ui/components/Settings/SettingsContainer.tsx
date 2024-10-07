import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface SettingsContainerProps {
  children: ReactNode;
  className?: string;
}

export const SettingsContainer = ({ children, className }: SettingsContainerProps) => {
  const defaultClass = "w-full rounded-xl bg-white p-4 sm:p-6 border";
  const mergedClass = twMerge(defaultClass, className);
  return <div className={mergedClass}>{children}</div>;
};
