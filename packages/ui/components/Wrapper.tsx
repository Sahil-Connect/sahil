import { ReactNode } from "react";

export type WrapperProps = {
  children: ReactNode | ReactNode[];
};

export const Wrapper = ({ children }: WrapperProps) => {
  return <div className="min-h-screen p-8 bg-gray-50">{children}</div>;
};
