import {
  DeepMap,
  FieldError,
  FieldValues,
  UseFormRegister,
  Path,
} from "react-hook-form";
import { FormControl, FormControlError } from "./FormControl";

type ToggleProps<T extends FieldValues> = {
  label?: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  errors: DeepMap<FieldValues, FieldError>;
  isChecked?: boolean;
};

export const Toggle = <T extends FieldValues>({
  name,
  register,
  errors,
  label = name,
  isChecked,
}: ToggleProps<T>) => {
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
      <input
        type="checkbox"
        className={`toggle toggle-lg ${isChecked && "toggle-primary"}`}
        {...register(name)}
      />
      {errorMessage && <FormControlError message={errorMessage} />}
    </FormControl>
  );
};
