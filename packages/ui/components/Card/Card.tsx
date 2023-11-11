import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export type CardProps = {
  children: ReactNode | ReactNode[];
  className?: string;
  title?: string;
  titleSize?: string;
  height?: string;
};

export const Card = ({ children, className, title, titleSize = "md" }: CardProps) => {
  const merged = twMerge("card card-compact card-bordered", className);
  return (
    <div className={merged}>
      <div className="card-body flex-col">
        {title && <h2 className={`card-title text-${titleSize}`}>{title}</h2>}
        {children}
      </div>
    </div>
  );
};
