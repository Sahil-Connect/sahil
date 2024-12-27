import React from 'react';
import { 
  UseFormRegister, 
  FieldErrors, 
  FieldValues, 
  Path 
} from 'react-hook-form';

// Generic type constrained to FieldValues
interface BaseInputProps<TFieldValues extends FieldValues> {
  label: string;
  placeholder: string;
  register: UseFormRegister<TFieldValues>;
  errors: FieldErrors<TFieldValues>;
  name: Path<TFieldValues>;
  type?: string;
}

interface SelectProps<TFieldValues extends FieldValues> {
  label: string;
  name: Path<TFieldValues>;
  register: UseFormRegister<TFieldValues>;
  errors: FieldErrors<TFieldValues>;
  options: { value: string; label: string }[];
}

export const Input = <TFieldValues extends FieldValues>({ 
  label, 
  placeholder, 
  register, 
  errors, 
  name, 
  type = 'text'
}: BaseInputProps<TFieldValues>) => {
  return (
    <div>
      <label htmlFor={name} className="label text-sm p-0 mb-2 font-medium">{label}</label>
      <input 
        type={type}
        placeholder={placeholder} 
        {...register(name)}
        className={`input input-bordered border border-gray-200 w-full text-sm outline-none focus:outline-none focus:border-gray-300 ${errors[name] ? 'input-error' : ''}`}
      />
      {errors[name] && (
        <p className="mt-1 text-red-700 text-sm">
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
};

export const TextArea = <TFieldValues extends FieldValues>({ 
  label, 
  placeholder, 
  register, 
  errors, 
  name
}: BaseInputProps<TFieldValues>) => {
  return (
    <div>
      <label htmlFor={name} className="label text-sm p-0 mb-2 font-medium">{label}</label>
      <textarea 
        placeholder={placeholder} 
        {...register(name)}
        className={`textarea textarea-bordered h-28 resize-none border border-gray-200 w-full text-sm outline-none focus:outline-none focus:border-gray-300 ${errors[name] ? 'textarea-error' : ''}`}
      />
      {errors[name] && (
        <p className="mt-1 text-red-700 text-sm">
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
};

export const Select = <TFieldValues extends FieldValues>({ 
  label, 
  name, 
  register, 
  errors, 
  options 
}: SelectProps<TFieldValues>) => {
  return (
    <div>
      <label htmlFor={name} className="label text-sm p-0 mb-2 font-medium">{label}</label>
      <select 
        {...register(name)}
        className={`select select-bordered border border-gray-200 w-full text-sm outline-none focus:outline-none focus:border-gray-300 ${errors[name] ? 'select-error' : ''}`}
      >
        <option value="" disabled>Select</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errors[name] && (
        <p className="mt-1 text-red-700 text-sm">
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
};