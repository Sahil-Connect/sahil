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
  readOnly?: boolean;
};

export const RadioGroup: FC<RadioGroupProps> = ({
  label,
  name,
  register,
  errors,
  options,
  readOnly = false,
}) => {
  //handle nested errors
  const errorPath = name.split(".");
  let errorMessage;

  if (errors && errorPath.length > 1) {
    errorMessage = errorPath.reduce(
      (obj, key) => obj && obj[key],
      errors
    )?.message;
  } else if (errors) {
    errorMessage = errors[name]?.message;
  }

  return (
    <FormControl label={label!}>
      <div className="flex flex-wrap gap-2">
        {options.map((option, index) => (
          <Radio 
            key={index} 
            register={register} 
            name={name} 
            option={option} 
            readOnly={readOnly}
          />
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
  readOnly?: boolean;
};

export const Radio = ({
  name,
  register,
  option: { value, label, icon },
  readOnly = false,
}: RadioProps) => {
  return (
    <label className={`label cursor-pointer ${readOnly ? 'opacity-50' : ''}`}>
      <input
        type="radio"
        value={value}
        className="radio radio-sm checked:bg-secondary"
        {...(register ? register(name) : {})}
        disabled={readOnly}
      />
      <div className="flex ml-4 items-center gap-2">
        {icon && (
          <span className="shadow p-2 rounded-md">
            <Icon icon={icon} />
          </span>
        )}
        <span className="label-text">{label}</span>
      </div>
    </label>
  );
};
