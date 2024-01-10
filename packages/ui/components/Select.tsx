import { FormControl, FormControlError } from './FormControl';
import { BaseInputProps } from '../types';

type SelectProps = BaseInputProps<any> & {
  options: any[];
};

export const Select = ({
  options,
  label = 'Select Input',
  name,
  register,
  errors,
}: SelectProps) => {
  return (
    <FormControl label={label}>
      <select
        className='select select-sm select-bordered w-full max-w-lg'
        title={label}
        {...register(name)}
      >
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
      {errors[name] && <FormControlError message={errors[name]?.message} /> }
    </FormControl>
  );
};
