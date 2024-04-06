import { FC } from "react";
export type DrawerProps = {
  children: any;
  CTA: string;
};
export const Drawer: FC<DrawerProps> = ({ children, CTA }) => {
  return (
    <div className="drawer drawer-end bg-rose-100 bg-opacity-10">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-4"
          className="drawer-button btn-sm btn btn-ghost w-full"
        >
          {CTA}
        </label>

              {/** conflict with steps component requires higher z-index */}
      <div className="drawer-side z-10">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="bg-base-100 h-full p-8">
        {children}
        </div>
      </div>
      </div>

    </div>
  );
};
