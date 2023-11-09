import { HiArrowDown } from "react-icons/hi2";
export const Dropdown = ({ helper }) => {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-circle btn-ghost btn-xs text-info">
        <HiArrowDown />
      </label>
      <div
        tabIndex={0}
        className="card compact dropdown-content z-[1] shadow bg-base-100 rounded-box w-64"
      >
        <div className="card-body">
          <h2 className="card-title">You needed more info?</h2>
          <p>Here is a description!</p>
        </div>
      </div>
    </div>
  );
};
