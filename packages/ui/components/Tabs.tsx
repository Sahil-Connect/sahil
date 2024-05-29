import {
  HiOutlineAdjustmentsVertical,
  HiOutlineExclamationCircle,
  HiOutlineBeaker,
} from "react-icons/hi2";

export const Tabs = () => {
  return (
    <div>
      <div className="tabs tabs-boxed">
        <a className="tab tab-active gap-2">
          <HiOutlineExclamationCircle /> Order Info
        </a>
        <a className="tab  gap-2">
          <HiOutlineAdjustmentsVertical /> Order Preferences
        </a>
        <a className="tab  gap-2">
          <HiOutlineBeaker /> Order Actions
        </a>
      </div>
    </div>
  );
};
