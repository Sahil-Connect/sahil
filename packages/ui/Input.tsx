import {
  DeepMap,
  FieldError,
  FieldValues,
  UseFormRegister,
  Path,
} from 'react-hook-form';
import { FormControl } from './FormControl';

type InputProps<T> = {
  label?: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  errors: DeepMap<FieldValues, FieldError>;
  type?: 'text' | 'email' | 'password' | 'number';
  placeholder?: string;
  defaultValue?: string | number;
  valueAsNumber?: boolean;
};

export const Input = <T,>({
  name,
  register,
  errors,
  type = 'text',
  placeholder = 'Type here',
  label = name,
  defaultValue,
  valueAsNumber = false,
}: InputProps<T>) => {
  return (
    <FormControl label={label}>
      <input
        type={type}
        placeholder={placeholder}
        className='input input-bordered w-full max-w-lg'
        defaultValue={defaultValue}
        {...register(name, { valueAsNumber: valueAsNumber })}
      />
      {errors[name] && <p className='text-error'>{errors[name]?.message}</p>}
    </FormControl>
  );
};
