import { ReactNode } from "react";

export type MinHeightProps = {
  children: ReactNode | ReactNode[];
};

export const MinHeight = ({ children }: MinHeightProps) => {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
};