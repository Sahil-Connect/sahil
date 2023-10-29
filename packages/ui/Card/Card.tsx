import { FC } from "react";

export type CardProps = {
  children: any;
  title?: string;
  titleSize?: string;
};

export const Card: FC<CardProps> = ({ children, title, titleSize = "md" }) => {
  return (
    <div className={"card card-compact card-bordered"}>
      <div className="card-body">
        <h2 className={`card-title text-${titleSize}`}>{title}</h2>
        {children}
      </div>
    </div>
  );
};
