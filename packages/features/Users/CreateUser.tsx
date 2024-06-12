import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Avatar, Card, Input, Select } from "ui";
import { Users } from "@sahil/lib/graphql/__generated__/graphql";
import Link from "next/link";

export const USER_ROLES = ["Admin", "Agent", "Client", "Courier"];

const supplierBasicInfoSchema = z.object({
  name: z.string().min(2, { message: "required" }).trim(),
});

type FormData = z.infer<typeof supplierBasicInfoSchema>;

export const CreateUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(supplierBasicInfoSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const validatedInput = supplierBasicInfoSchema.parse(data);
  };
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
