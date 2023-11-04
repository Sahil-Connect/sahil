import {
  DeepMap,
  FieldError,
  FieldValues,
  UseFormRegister,
  Path,
} from 'react-hook-form';
import { FormControl } from './FormControl';

<<<<<<< HEAD
type ToggleProps<T extends FieldValues> = {
=======
type ToggleProps<T> = {
>>>>>>> 2a9f006 (feat: refactored Input & Toggle components)
  label?: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  errors: DeepMap<FieldValues, FieldError>;
  isChecked?: boolean;
};

<<<<<<< HEAD
export const Toggle = <T extends FieldValues>({
=======
export const Toggle = <T,>({
>>>>>>> 2a9f006 (feat: refactored Input & Toggle components)
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
