import { FC, ReactNode } from "react";

export type CardProps = {
  children: ReactNode | ReactNode[];
  className?: string;
  title?: string;
  titleSize?: string;
  height?: string;
};

export const Card = ({ children, className, title, titleSize = "md", height = "h-full" }: CardProps) => {
  return (
    <div className={`card card-compact card-bordered bg-base-100 w-full ${height} ${className}`}>
      <div className="card-body flex-col">
        <h2 className={`card-title text-${titleSize}`}>{title}</h2>
        {children}
      </div>
    </div>
  );
};
