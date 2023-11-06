import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCourierFormStore } from '@/hooks/useCourierFormStore';
import { Input, Select } from 'ui';
import { useRouter } from 'next/router';

const courierInfoSchema = z.object({
  name: z.string().min(6, { message: 'Must be at least 6 letters.' }).trim(),
  gender: z.string(),
  DOB: z.coerce.date().refine(
    (dateOfBirth) => {
      const eighteenYearsAgo = new Date();
      eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
      return dateOfBirth <= eighteenYearsAgo;
    },
    {
      message: 'Must be at least 18 years old.',
    }
  ),
});

type FormData = z.infer<typeof courierInfoSchema>;

export const CourierPersonalInfo = () => {
  const { formData, goToStep, updateStepFormData } = useCourierFormStore(
    (state) => ({
      formData: state.formData,
      goToStep: state.goToStep,
      updateStepFormData: state.updateStepFormData,
    })
  );

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(courierInfoSchema),
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const validatedInput = courierInfoSchema.parse(data);
    updateStepFormData(validatedInput);
    goToStep('next');
    router.push(`/couriers/register/contact_details`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-2'>
      <Input
        name='name'
        label='Full Name'
        register={register}
        errors={errors}
      />

      <Select
        label='Gender'
        options={['Male', 'Female']}
        name='gender'
        register={register}
        errors={errors}
      />

      <Input
        type='date'
        name='DOB'
        label='Date of Birth'
        register={register}
        errors={errors}
      />

      <button className='btn btn-sm btn-primary'>Submit</button>
    </form>
  );
};
