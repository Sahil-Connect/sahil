import { useForm, SubmitHandler } from "react-hook-form";
import { Card, Input } from "ui";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { HiArrowSmallRight, HiOutlineUserCircle } from "react-icons/hi2";
import { AuthProviders } from "./AuthProviders";
import { signIn } from "next-auth/react";

const authSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type FormData = z.infer<typeof authSchema>;

export const LoginCard = ({ providers = [] }) => {
  console.log(providers);
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
    <Card className="w-96" title="Agent Login">
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
        <button className="btn btn-primary w-full" type="submit">
          Sign In
        </button>
      </form>
      <div className="card-actions">
        {providers && (
          <div className="w-full">
            <div className="divider">Or sign in with</div>
            <AuthProviders providers={providers} />
          </div>
        )}
      </div>
    </Card>
  );
};
