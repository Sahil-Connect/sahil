import { useForm, SubmitHandler } from "react-hook-form";
import { CheckBoxGroup, Input } from "ui";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const authSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  rememberMe: z.boolean().optional().default(false),
});

type FormData = z.infer<typeof authSchema>;

const LoginForm = () => {
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
    console.log("yerrrr");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <Input
        name="email"
        type="email"
        label="Email Address"
        placeholder="example@domain.com"
        register={register}
        errors={errors}
      />
      <Input
        name="password"
        type="password"
        label="Password"
        register={register}
        errors={errors}
      />

      <div className="flex justify-between items-center">
        <CheckBoxGroup
          name="rememberMe"
          options={[{ value: "", label: "Remember Me" }]}
          register={register}
          errors={errors}
        />
        <a href="#" className="text-sm link">
          Forgot Password?
        </a>
      </div>
      <button className="btn btn-primary w-full capitalize" type="submit">
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
