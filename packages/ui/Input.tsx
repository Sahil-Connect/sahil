import { FC } from "react";

type InputProps = {
  placeholder?: string;
  type?: string;
};

export const Input: FC<InputProps> = ({ type = "text", ...props }) => {
  return (
    <input
      className="input input-sm input-bordered w-full bg-slate-100"
      type={type}
      placeholder={props.placeholder || "..."}
      {...props}
    />
  );
};
