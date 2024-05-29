import { z } from "zod";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { useOnBoardingFormStore } from "@sahil/lib/hooks/formStores/useOnBoardingFormStore";
import { HiArrowSmallRight } from "react-icons/hi2";
import { USER_DETAILS_SCHEMA, USER_ROLES } from "./constants";
import { Card, Input, Select } from "ui";

type FormData = z.infer<typeof USER_DETAILS_SCHEMA>;

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
    resolver: zodResolver(USER_DETAILS_SCHEMA),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const validatedInput = USER_DETAILS_SCHEMA.parse(data);

    // Reset role objects
    const allRoles = ["business", "supplier"];
    const newFormData: any = { ...validatedInput, preference: {} };
    allRoles.forEach((r) => {
      newFormData[r] = {};
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
          options={USER_ROLES}
        />
        <div className="btn btn-sm btn-primary w-fit">
          <input type="submit" value="Continue" />
          <HiArrowSmallRight />
        </div>
      </Card>
    </form>
  );
};
