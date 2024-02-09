import { FormControl, FormControlError } from "./FormControl";
import { BaseInputProps } from "../types";
import type { FieldValues } from "react-hook-form";

type InputProps = BaseInputProps<any> & {
  type?: "text" | "email" | "password" | "number" | "date";
  placeholder?: string;
  defaultValue?: string | number;
};

export const Input = ({
  name,
  register,
  errors,
  type = "text",
  placeholder = "Type here",
  label = name,
  defaultValue,
}: InputProps) => {
  return (
    <FormControl label={label}>
      <input
        type={type}
        placeholder={placeholder}
        className="input input-bordered w-full max-w-lg"
        defaultValue={defaultValue}
        {...register(name, { valueAsNumber: type === "number" })}
      />
      {errors[name] && <FormControlError message={errors[name]?.message} />}
    </FormControl>
  );
};
