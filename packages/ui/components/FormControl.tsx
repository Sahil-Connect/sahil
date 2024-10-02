import { FC } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export type FormControlProps = {
  children: any;
  label?: string;
};

type FormControlErrorProps = {
  message?: string;
};

export const FormControlError: FC<FormControlErrorProps> = ({ message }) => {
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */);
  return (
    <label className="label">
      <span className="label-text-alt text-error">{message}</span>
    </label>
  );
};
export const FormControl: FC<FormControlProps> = ({ children, label }) => {
  return (
    <div className="form-control w-full">
      {label && (
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
      )}
      {children}
    </div>
  );
};
