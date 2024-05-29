import { BaseInputProps } from "../types";
import { FormControl, FormControlError } from "./FormControl";

type Option = {
  value: string;
  label: string;
};

type CheckBoxGroupProps = BaseInputProps<any> & {
  options: Option[];
};

export const CheckBoxGroup = ({
  name,
  register,
  errors,
  options,
  label,
}: CheckBoxGroupProps) => {
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
    <FormControl label={label!}>
      <div className="flex flex-wrap gap-2">
        {options.map((option, index) => (
          <CheckBox
            key={index}
            register={register}
            name={name}
            option={option}
          />
        ))}
      </div>
      {errorMessage && <FormControlError message={errorMessage} />}
    </FormControl>
  );
};

type CheckBoxProps = {
  option: Option;
  name: string;
  register: BaseInputProps<any>["register"];
};

const CheckBox = ({
  name,
  register,
  option: { value, label },
}: CheckBoxProps) => {
  return (
    <label className="label cursor-pointer gap-2">
      <input
        type="checkbox"
        value={value}
        className="checkbox checkbox-primary checkbox-md"
        {...register(name)}
      />
      <span className="label-text">{label}</span>
    </label>
  );
};
