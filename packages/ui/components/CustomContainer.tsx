import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface CustomContainerProps {
  children: ReactNode;
  className?: string;
}

export const CustomContainer = ({
  children,
  className,
}: CustomContainerProps) => {
  const defaultClass = "w-full max-w-7xl mx-auto px-4 lg:px-8 lg:max-w-full";
  const mergedClass = twMerge(defaultClass, className);
  return <div className={mergedClass}>{children}</div>;
};
