import { FC } from "react";
import { Icon } from "./Icon";
import type { IconType } from "react-icons";
import { BaseInputProps } from "../types";
import { FormControl, FormControlError } from "./FormControl";

type Option = {
  value: string;
  label: string;
  icon?: IconType;
};

type RadioGroupProps = BaseInputProps<any> & {
  options: Option[];
};

export const RadioGroup: FC<RadioGroupProps> = ({
  label,
  name,
  register,
  errors,
  options,
}) => {
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
          <Radio key={index} register={register} name={name} option={option} />
        ))}
      </div>
      {errorMessage && <FormControlError message={errorMessage} />}
    </FormControl>
  );
};

type RadioProps = {
  option: Option;
  name: string;
  register: BaseInputProps<any>["register"];
};

const Radio = ({
  name,
  register,
  option: { value, label, icon },
}: RadioProps) => {
  return (
    <label className="label cursor-pointer">
      <input
        type="radio"
        value={value}
        className="radio radio-sm checked:bg-secondary"
        {...register(name)}
      />
      <div className="flex ml-4 items-center gap-2">
        <span className="shadow p-2 rounded-md">
          <Icon icon={icon!} />
        </span>
        <span className="label-text">{label}</span>
      </div>
    </label>
  );
};
