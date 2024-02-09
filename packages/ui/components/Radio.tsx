import { FC } from "react";
import { Icon } from "./Icon";

type RadioProps = {
  label: string;
  icon: any;
  name: string;
  register: any;
  errors: any;
};

export const Radio: FC<RadioProps> = ({
  label,
  icon,
  name,
  register,
  errors,
}) => {
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <input
          type="radio"
          className="radio radio-sm checked:bg-secondary"
          {...register(name)}
        />
        <div className="flex ml-4 items-center gap-2">
          <span className="shadow p-2 rounded-md">
            <Icon icon={icon} />
          </span>
          <span className="label-text">{label}</span>
        </div>
      </label>
    </div>
  );
};
