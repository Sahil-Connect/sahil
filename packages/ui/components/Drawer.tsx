import { FC, useState } from "react";
import useLockBodyScroll from "@sahil/lib/hooks/utilities/useLockBodyScroll";

export type DrawerProps = {
  id: string;
  children: any;
  CTA: string;
  className?: string;
};

export const Drawer: FC<DrawerProps> = ({ id, children, CTA, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  useLockBodyScroll(isOpen);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="drawer drawer-end">
      <input
        id={id}
        type="checkbox"
        className="drawer-toggle"
        onChange={handleToggle}
      />
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
        <div
          className={`menu p-4 w-2/3 xl:w-1/2 h-full max-h-full bg-base-200 text-base-content ${className}`}
        >
          {/* Sidebar content here */}
          {children}
        </div>
      </div>
    </div>
  );
};
