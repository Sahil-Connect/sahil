import {
    DeepMap,
    FieldError,
    FieldValues,
    UseFormRegister,
    Path,
  } from 'react-hook-form';

export type FormErrors = DeepMap<FieldValues, FieldError>;

export type BaseInputProps<T extends FieldValues> = {
  label?: string;
  name: Path<T>;
  errors: FormErrors;
  defaultValue?: string | number;
  register: UseFormRegister<T>;
}