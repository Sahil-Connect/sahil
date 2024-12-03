import { FC } from "react";

export type JoinGridProps = {
  children: any;
  cols?: number;
};
export const JoinGrid: FC<JoinGridProps> = ({ children, cols = 2 }) => {
  return (
    <div className={`join grid bg-rose-900 ${cols ? `grid-cols-${cols}` : "grid-cols-2"}`}>
      {children}
    </div>
  );
};
