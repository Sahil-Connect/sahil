import { z } from "zod";
import { signIn } from "next-auth/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  useAddUserInvite,
  useRegisterUserAction,
} from "@sahil/lib/hooks/users";
import { Card, Input, Select } from "ui";
import {
  InputMaybe,
  User_Role_Enum,
} from "@sahil/lib/graphql/__generated__/graphql";

export const USER_ROLES = ["admin", "agent", "business", "supplier", "courier"];

const userInfoSchema = z.object({
  name: z.string().min(2, { message: "required" }).trim(),
  email: z
    .string()
    .email()
    .min(2, { message: "required" })
    .trim()
    .toLowerCase(),
  role: z
    .string()
    .min(1, "Role is required")
    .toLowerCase()
    .refine((value) => USER_ROLES.includes(value)),
});

type FormData = z.infer<typeof userInfoSchema>;

export const CreateUser = () => {
  const { registerUser, data, loading, error } = useRegisterUserAction();
  const {
    addUserInvite,
    data: invites,
    loading: inviteLoading,
    error: inviteError,
  } = useAddUserInvite();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userInfoSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const validatedInput = userInfoSchema.parse(data);
    try {
      const object = {
        ...validatedInput,
        role: validatedInput.role as InputMaybe<User_Role_Enum>,
      };

      const invite = await addUserInvite({
        variables: {
          object,
        },
      });

      console.log("Invite:", invite);

      const results = await signIn("email", {
        ...validatedInput,
        redirect: false,
      });

      console.log("Email sign in result:", results);
    } catch (error) {
      console.error("Email sign in failed:", error);
    }

    // const result = await registerUser({
    //   variables: {
    //     object: {
    //       name: validatedInput.name,
    //       role: validatedInput.role,
    //     },
    //   },
    // });
    // console.log(result);
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
          <button type="button" className="btn btn-sm btn-ghost">
            Cancel
          </button>
          <button className="btn btn-sm btn-primary">Save</button>
        </div>
      </form>
    </Card>
  );
};
