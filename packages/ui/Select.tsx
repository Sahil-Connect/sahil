import { FC } from "react";

type SelectProps = {
  options: any[];
  title?: string;
};

export const Select: FC<SelectProps> = ({ options, title = "Select Input" }) => {
  return (
    <select
      className="select select-sm select-bordered bg-slate-100"
      title={title}
    >
      {options.map((option, index) => (
        <option key={index}>{option}</option>
      ))}
    </select>
  );
};
