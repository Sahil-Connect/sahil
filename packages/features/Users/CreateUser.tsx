import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Avatar, Card, Input, Select } from "ui";
import { Users } from "@sahil/lib/graphql/__generated__/graphql";
import Link from "next/link";
import { useRegisterUserAction } from "@sahil/lib/hooks/users";

export const USER_ROLES = ["admin", "agent", "client", "courier"];

const userInfoSchema = z.object({
  name: z.string().min(2, { message: "required" }).trim(),
  email: z.string().email().min(2, { message: "required" }).trim(),
  role: z
    .string()
    .min(1, "Role is required")
    .refine((value) => USER_ROLES.includes(value)),
});

type FormData = z.infer<typeof userInfoSchema>;

export const CreateUser = () => {
    const { registerUser, data, loading, error } = useRegisterUserAction();



  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userInfoSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const validatedInput = userInfoSchema.parse(data);
    console.log(validatedInput);
    const result = await registerUser({
        variables: {
            object: {
                name: validatedInput.name,
                role: validatedInput.role,
            }
        }
    });
    console.log(result);
    console.log(data);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <Card title="Create User">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <Input
          name="name"
          label="Full Name"
          register={register}
          errors={errors}
        />

        <Input
          name="email"
          label="Email Address"
          register={register}
          errors={errors}
        />

        <Select
          name="role"
          label="Select a Role"
          errors={errors}
          register={register}
          options={USER_ROLES}
        />

        <div className="card-actions justify-end">
          <button className="btn btn-sm btn-ghost">Cancel</button>
          <button className="btn btn-sm btn-primary">Save</button>
        </div>
      </form>
    </Card>
  );
};
