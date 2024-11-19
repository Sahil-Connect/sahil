import { FC, useState } from "react";
import useLockBodyScroll from "@sahil/lib/hooks/utilities/useLockBodyScroll";
import { HiMiniXMark } from "react-icons/hi2";

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
        <label
          htmlFor={id}
          className="drawer-button btn btn-sm btn-ghost w-full"
        >
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
          className={`relative menu flex-nowrap p-4 w-full lg:w-3/5 h-full min-h-full overflow-y-auto bg-base-100 text-base-content ${className}`}
        >
          {/* Sidebar content here */}
          {children}

          <label
            htmlFor={id}
            aria-label="close sidebar"
            title="Close Sidebar"
            className="absolute top-0 right-4 text-2xl cursor-pointer"
          >
            <HiMiniXMark />
          </label>
        </div>
      </div>
    </div>
  );
};
