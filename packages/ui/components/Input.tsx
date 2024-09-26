import { FormControl, FormControlError } from "./FormControl";
import { BaseInputProps } from "../types";
import type { FieldValues } from "react-hook-form";

type InputProps = BaseInputProps<any> & {
  type?: "text" | "email" | "password" | "number" | "date" | "tel";
  placeholder?: string;
  defaultValue?: string | number;
  disabled?: boolean;
};

export const Input = ({
  name,
  register,
  errors,
  type = "text",
  placeholder = "Type here",
  label = name,
  defaultValue,
  disabled = false,
}: InputProps) => {
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
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        disabled={disabled}
        // className="input input-sm input-bordered w-full max-w-lg"
        className="py-3 px-4 block w-full border outline-none border-zinc-200 rounded-lg text-sm placeholder-neutral-500"
        {...register(name, { valueAsNumber: type === "number" })}
      />
      {errorMessage && <FormControlError message={errorMessage} />}
    </FormControl>
  );
};

type TextAreaProps = BaseInputProps<any> & {
  placeholder?: string;
  defaultValue?: string | number;
  disabled?: boolean;
};

export const TextArea = ({
  name,
  register,
  errors,
  placeholder = "Type here",
  label = name,
  defaultValue,
  disabled,
}: TextAreaProps) => {
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
      <textarea
        placeholder={placeholder}
        defaultValue={defaultValue}
        disabled={disabled}
        className="input input-bordered w-full h-20 max-w-lg"
        {...register(name)}
      />
      {errorMessage && <FormControlError message={errorMessage} />}
    </FormControl>
  );
};
