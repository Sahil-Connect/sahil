import {
  DeepMap,
  FieldError,
  FieldValues,
  UseFormRegister,
  Path,
} from 'react-hook-form';
import { FormControl } from './FormControl';

type InputProps<T extends FieldValues> = {
  label?: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  errors: DeepMap<FieldValues, FieldError>;
  type?: 'text' | 'email' | 'password' | 'number' | 'date';
  placeholder?: string;
  defaultValue?: string | number;
};

export const Input = <T extends FieldValues>({
  name,
  register,
  errors,
  type = 'text',
  placeholder = 'Type here',
  label = name,
  defaultValue,
}: InputProps<T>) => {
  return (
    <FormControl label={label}>
      <input
        type={type}
        placeholder={placeholder}
        className='input input-bordered w-full max-w-lg'
        defaultValue={defaultValue}
        {...register(name, { valueAsNumber: type === 'number' })}
      />
      {errors[name] && <p className='text-error'>{errors[name]?.message}</p>}
    </FormControl>
  );
};