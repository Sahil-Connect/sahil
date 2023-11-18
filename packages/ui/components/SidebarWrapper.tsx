import { ReactNode } from "react";

export type SidebarWrapperProps = {
  children: ReactNode | ReactNode[];
};

export const SidebarWrapper = ({ children }: SidebarWrapperProps) => {
  return (
    <div className="flex-1 w-full p-4 bg-gray-50">
      {children}
    </div>
  );
};