import { FormControl, FormControlError } from "./FormControl";
import { BaseInputProps } from "../types";

type SelectProps = BaseInputProps<any> & {
  options: any[];
  defaultValue?: string;
  disabled?: boolean;
};

export const Select = ({
  options,
  label = "Select Input",
  name,
  register,
  errors,
  defaultValue,
  disabled = false,
}: SelectProps) => {
  return (
    <FormControl>
      <select
        className="select select-sm select-bordered w-full max-w-lg"
        title={label}
        {...register(name)}
        defaultValue={defaultValue}
        disabled={disabled}
      >
        {defaultValue && <option value="">{defaultValue}</option>}
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
      {errors[name] && <FormControlError message={errors[name]?.message} />}
    </FormControl>
  );
};
