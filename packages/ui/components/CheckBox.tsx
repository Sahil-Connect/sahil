import { BaseInputProps } from "../types";
import { FormControlError } from "./FormControl";

export const CheckBox = ({
  name,
  register,
  errors,
  label = name,
}: BaseInputProps<any>) => {
  return (
    <div className="form-control">
      <label className="label cursor-pointer gap-2">
        <input
          type="checkbox"
          className="checkbox checkbox-primary checkbox-md"
          {...register(name)}
        />
        <span className="label-text">{label}</span>
      </label>
      {errors[name] && <FormControlError message={errors[name]?.message} />}
    </div>
  );
};
