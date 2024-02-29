import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from 'ui';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const authSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

type FormData = z.infer<typeof authSchema>;

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(authSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const validatedInput = authSchema.parse(data);
    console.log('yerrrr');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-2'>
      <Input
        name='name'
        label='Full name'
        placeholder='John Doe'
        register={register}
        errors={errors}
      />
      <Input
        name='email'
        type='email'
        label='Email Address'
        placeholder='example@domain.com'
        register={register}
        errors={errors}
      />
      <Input
        name='password'
        type='password'
        label='Password'
        register={register}
        errors={errors}
      />
      <button className='btn btn-primary w-full capitalize mt-2' type='submit'>
        Sign Up
      </button>
    </form>
  );
};

export default RegisterForm;
