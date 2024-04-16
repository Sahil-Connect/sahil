import { FC } from "react";

export type DrawerProps = {
  id: string;
  children: any;
  CTA: string;
};

export const Drawer: FC<DrawerProps> = ({ id, children, CTA }) => {
  return (
    <div className="drawer drawer-end">
      <input id={id} type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor={id} className="drawer-button btn btn-ghost w-full">
          {CTA}
        </label>
      </div>
      <div className="drawer-side z-10">
        <label
          htmlFor={id}
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-4 w-1/2 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          {children}
        </div>
      </div>
    </div>
  );
};
