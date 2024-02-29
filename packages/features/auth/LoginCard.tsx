import Image, { StaticImageData } from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { Card, CheckBox, Input } from "ui";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { AuthProviders } from "./AuthProviders";
import { signIn } from "next-auth/react";

const authSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  rememberMe: z.boolean().optional().default(false),
});

type FormData = z.infer<typeof authSchema>;

type Props = {
  providers: any;
  logo: string | StaticImageData;
};

export const LoginCard = ({ providers = [], logo = "" }: Props) => {
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
    <section className="flex items-center justify-center h-[calc(100vh-7rem)]">
      <Card className="w-96 md:w-2/3 max-w-lg">
        <div className="mx-auto space-y-2 mb-8">
          <Image
            src={logo}
            alt="Sahil"
            loading="eager"
            className="w-24 object-contain mx-auto"
          />
          <h2 className="card-title text-md font-bold">
            Sign in to your account
          </h2>
        </div>
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
            <CheckBox
              name="rememberMe"
              label="Remember me"
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
        <div className="card-actions">
          {providers && (
            <div className="w-full">
              <div className="divider w-1/3 mx-auto"></div>
              <AuthProviders providers={providers} />
            </div>
          )}
          <p className="text-center">
            Don&apos;t have an account?{" "}
            <a href="#" className="text-sm link-primary font-bold">
              Sign Up
            </a>
          </p>
        </div>
      </Card>
    </section>
  );
};
