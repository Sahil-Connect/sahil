import { FormControl, FormControlError } from "./components/FormControl";
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
  //handle nested errors
  const errorPath = name.split(".");
  let errorMessage;

  if (errorPath.length > 1) {
    errorMessage = errorPath.reduce(
      (obj, key) => obj && obj[key],
      errors
    )?.message;
  } else {
    errorMessage = errors[name]?.message;
  }

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
      {errorMessage && <FormControlError message={errorMessage} />}
    </FormControl>
  );
};
