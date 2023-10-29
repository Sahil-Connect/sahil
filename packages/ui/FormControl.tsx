import { FC } from "react";

export type FormControlProps = {
  children: any;
  label: string;
};
export const FormControl: FC<FormControlProps> = ({ children, label }) => {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      {children}
    </div>
  );
};
