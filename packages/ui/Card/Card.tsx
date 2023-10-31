import { FC, ReactNode } from "react";

export type CardProps = {
  children: ReactNode | ReactNode[];
  className?: string;
  title?: string;
  titleSize?: string;
};

export const Card = ({ children, className, title, titleSize = "md" }: CardProps) => {
  return (
    <div className={`card card-compact shadow bg-white ${className}`}>
      <div className="card-body">
        <h2 className={`card-title text-${titleSize}`}>{title}</h2>
        {children}
      </div>
    </div>
  );
};
