import { FormControl, FormControlError } from "./FormControl";
import {
  DeepMap,
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

type SelectProps<T extends FieldValues> = {
  options: any[];
  label?: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  errors: DeepMap<FieldValues, FieldError>;
};

export const Select = <T extends FieldValues>({
  options,
  label = "Select Input",
  name,
  register,
  errors,
}: SelectProps<T>) => {
  return (
    <FormControl label={label}>
      <select
        className="select select-sm select-bordered w-full max-w-lg"
        title={label}
        {...register(name)}
      >
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
      {errors[name] && <FormControlError message={errors[name]?.message} />}
    </FormControl>
  );
};
