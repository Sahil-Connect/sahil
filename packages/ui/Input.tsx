import {
  DeepMap,
  FieldError,
  FieldValues,
  UseFormRegister,
  Path,
} from 'react-hook-form';
import { FormControl } from './FormControl';

<<<<<<< HEAD
type InputProps<T extends FieldValues> = {
=======
type InputProps<T> = {
>>>>>>> 2a9f006 (feat: refactored Input & Toggle components)
  label?: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  errors: DeepMap<FieldValues, FieldError>;
<<<<<<< HEAD
  type?: 'text' | 'email' | 'password' | 'number';
  placeholder?: string;
  defaultValue?: string | number;
};

export const Input = <T extends FieldValues>({
=======
  type?: string;
  placeholder?: string;
  defaultValue?: string | number;
  valueAsNumber?: boolean;
};

export const Input = <T,>({
>>>>>>> 2a9f006 (feat: refactored Input & Toggle components)
  name,
  register,
  errors,
  type = 'text',
  placeholder = 'Type here',
  label = name,
  defaultValue,
<<<<<<< HEAD
=======
  valueAsNumber = false,
>>>>>>> 2a9f006 (feat: refactored Input & Toggle components)
}: InputProps<T>) => {
  return (
    <FormControl label={label}>
      <input
        type={type}
        placeholder={placeholder}
        className='input input-bordered w-full max-w-lg'
        defaultValue={defaultValue}
<<<<<<< HEAD
        {...register(name, { valueAsNumber: type === 'number' })}
=======
        {...register(name, { valueAsNumber: valueAsNumber })}
>>>>>>> 2a9f006 (feat: refactored Input & Toggle components)
      />
      {errors[name] && <p className='text-error'>{errors[name]?.message}</p>}
    </FormControl>
  );
};
