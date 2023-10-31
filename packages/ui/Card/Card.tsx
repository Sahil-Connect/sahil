import { FC, ReactNode } from "react";

export type CardProps = {
  children: ReactNode | ReactNode[];
  title?: string;
  titleSize?: string;
};

export const Card = ({ children, title, titleSize = "md" }: CardProps) => {
  return (
    <div className={"card card-compact shadow bg-white"}>
      <div className="card-body">
        <h2 className={`card-title text-${titleSize}`}>{title}</h2>
        {children}
      </div>
    </div>
  );
};
