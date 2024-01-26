import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import type { NextPage } from "next";
import { Card, Input } from "ui";
import { HiArrowSmallRight } from "react-icons/hi2";
import { useRegisterUserAction } from "@/hooks/users";
import { getProviders, signIn, useSession, signOut } from "next-auth/react";

const userSchema = z.object({
  name: z.string().min(2, { message: "Must be more than 2 characters" }),
  email: z.string().min(2, { message: "Must be more than 2 characters" }),
});

type FormData = z.infer<typeof userSchema>;

const OnboardingPage: NextPage = ({ providers }: any) => {
  const { registerUser } = useRegisterUserAction();


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    // @ts-ignore
    resolver: zodResolver(userSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const validatedInput = userSchema.parse(data);
    const result = await registerUser({
      variables: {
        object: {
          name: "Emmanuel Gatwech",
          role: "admin",
        },
      },
    });
    console.log(result);
    // router.push(`/);
  };

  const { data: session } = useSession();
  return (
    <div className="p-4">
      <h1 className="text-2xl">Welcome to Sahil</h1>
      <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <Input
            name="name"
            label="Your name"
            placeholder="Keji Lumuro"
            register={register}
            errors={errors}
          />
          <Input
            name="email"
            type="email"
            label="Your Email"
            placeholder="keji@sahil.app"
            register={register}
            errors={errors}
          />
        </Card>
        <div className="btn btn-sm btn-primary w-fit">
          <input type="submit" value="Continue" />
          <HiArrowSmallRight />
        </div>
      </form>
    </div>
  );
};

export default OnboardingPage;
