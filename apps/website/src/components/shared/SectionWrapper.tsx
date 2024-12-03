import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
}

export const SectionWrapper = ({
  children,
  className,
}: SectionWrapperProps) => {
  const defaultClass = "pt-20 pb-4 px-0 lg:pt-24";
  const mergedClass = twMerge(defaultClass, className);
  return <section className={mergedClass}>{children}</section>;
};
