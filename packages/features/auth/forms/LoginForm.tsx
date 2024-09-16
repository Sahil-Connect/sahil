import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { signIn } from "next-auth/react";
import { Input } from "ui";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAddUserInvite } from "@sahil/lib/hooks/users";
import {
  InputMaybe,
  User_Role_Enum,
} from "@sahil/lib/graphql/__generated__/graphql";

const authSchema = z.object({
  email: z
    .string()
    .email()
    .transform((value) => value.toLowerCase()),
});

type FormData = z.infer<typeof authSchema>;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(authSchema),
  });
  const { addUserInvite } = useAddUserInvite();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (loading) return;
    const validatedInput = authSchema.parse(data);
    setLoading(true);
    try {
      const object = {
        ...validatedInput,
        role: "user" as InputMaybe<User_Role_Enum>,
      };

      await addUserInvite({
        variables: {
          object,
        },
      });

      const results = await signIn("email", {
        ...validatedInput,
        redirect: false,
      });

      setResult(
        results?.ok
          ? "An invite has been sent to your inbox!"
          : "An error occurred while sending invite!"
      );

      console.log("Email sign in result:", results);
    } catch (error) {
      console.error("Email sign in failed:", error);
      setResult("An error occurred while sending invite!");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        name="email"
        type="email"
        label="Email Address"
        placeholder="example@domain.com"
        register={register}
        errors={errors}
      />

      {result && <p className="text-center text-base">{result}</p>}

      <button
        className={`btn btn-primary w-full capitalize ${
          loading && "animate-pulse"
        }`}
        type="submit"
      >
        {loading ? "Signing in..." : "Sign in With Email"}
      </button>
    </form>
  );
};

export default LoginForm;
