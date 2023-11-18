import { ReactNode } from "react";

export type MinHeightProps = {
  children: ReactNode | ReactNode[];
};

export const MinHeight = ({ children }: MinHeightProps) => {
  return (
    <div className="min-h-screen bg-[#999999]">
      {children}
    </div>
  );
};