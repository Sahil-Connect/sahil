import { FormControl, FormControlError } from "./FormControl";
import { BaseInputProps } from "../types";

type InputProps = BaseInputProps<unknown> & {
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
        className="input input-sm input-bordered w-full max-w-lg"
        defaultValue={defaultValue}
        // @ts-ignore 
        {...register(name, { valueAsNumber: type === "number" })}
      />
      {errors[name] && <FormControlError message={errors[name]?.message} />}
    </FormControl>
  );
};
