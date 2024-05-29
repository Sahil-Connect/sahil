import { z } from "zod";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { useOnBoardingFormStore } from "@sahil/lib/hooks/formStores/useOnBoardingFormStore";
import { HiArrowSmallRight } from "react-icons/hi2";
import { Card, Input, Select } from "ui";

const roles = ["business", "supplier"];

const userSchema = z.object({
  name: z.string().min(2, { message: "Must be more than 2 characters" }),
  email: z.string().email("Invalid email."),
  role: z
    .string()
    .min(1, "Role is required")
    .refine((value) => roles.includes(value)),
});

type FormData = z.infer<typeof userSchema>;

type UserDetailsProps = {
  navigateToNextStep: (step: string) => void;
  user:
    | {
        name?: string | null | undefined;
        email?: string | null | undefined;
        image?: string | null | undefined;
      }
    | undefined;
};

export const UserDetails = ({ navigateToNextStep, user }: UserDetailsProps) => {
  const { updateStepFormData, formData } = useOnBoardingFormStore(
    (state) => state
  );
  const role = formData.role as "supplier" | "business";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const validatedInput = userSchema.parse(data);

    // Reset role objects
    const allRoles = ["business", "supplier"];
    const newFormData: any = { ...validatedInput };
    allRoles.forEach((r) => {
      newFormData[r] = null;
    });

    updateStepFormData(newFormData);
    navigateToNextStep("role_details");
  };

  useEffect(() => {
    if (user) {
      const defaultValues = {
        name: user.name as string,
        email: user.email as string,
      };
      reset({ ...formData, ...defaultValues });
    }
  }, [formData, reset, user]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <Card>
        <Input
          name="name"
          label="Your name"
          placeholder="Keji Lumuro"
          register={register}
          errors={errors}
          disabled={user ? true : false}
        />
        <Input
          name="email"
          type="email"
          label="Your Email"
          placeholder="user@example.app"
          register={register}
          errors={errors}
          disabled={user ? true : false}
        />
        <Select
          name="role"
          label="Select a Role"
          errors={errors}
          register={register}
          options={roles}
        />
        <div className="btn btn-sm btn-primary w-fit">
          <input type="submit" value="Continue" />
          <HiArrowSmallRight />
        </div>
      </Card>
    </form>
  );
};
