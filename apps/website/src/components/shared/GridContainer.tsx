import { ReactNode } from 'react';
import { twMerge } from "tailwind-merge";

interface GridContainerProps{
  children: ReactNode;
  className?: string;
};

export const GridContainer = ({ children, className } : GridContainerProps) => {
  const defaultClass = "w-full max-w-7xl mx-auto px-4 lg:px-8 lg:max-w-full"
  const mergedClass = twMerge(defaultClass, className)
  return (
    <div className={defaultClass}>
      {children}
    </div>
  );
};