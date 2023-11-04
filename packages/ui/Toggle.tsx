import {
  DeepMap,
  FieldError,
  FieldValues,
  UseFormRegister,
  Path,
} from 'react-hook-form';
import { FormControl } from './FormControl';

type ToggleProps<T> = {
  label?: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  errors: DeepMap<FieldValues, FieldError>;
  isChecked?: boolean;
};

export const Toggle = <T,>({
  name,
  register,
  errors,
  label = name,
  isChecked,
}: ToggleProps<T>) => {
  return (
    <FormControl label={label}>
      <input
        type='checkbox'
        className={`toggle toggle-lg ${isChecked && 'toggle-primary'}`}
        {...register(name)}
      />
      {errors[name] && <p className='text-error'>{errors[name]?.message}</p>}
    </FormControl>
  );
};
