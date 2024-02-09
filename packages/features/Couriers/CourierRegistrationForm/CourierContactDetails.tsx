import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCourierFormStore } from "@sahil/lib/hooks/useCourierFormStore";
import { Input } from "ui";
import { useRouter } from "next/router";

const courierContactSchema = z.object({
  email: z.string().email({ message: "Invalid email format" }).trim(),
  phoneNumber: z.string().trim(),
});

type FormData = z.infer<typeof courierContactSchema>;

export const CourierContactDetails = () => {
  const { goToStep, updateStepFormData } = useCourierFormStore((state) => ({
    formData: state.formData,
    goToStep: state.goToStep,
    updateStepFormData: state.updateStepFormData,
  }));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    // @ts-ignore
    resolver: zodResolver(courierContactSchema),
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const validatedInput = courierContactSchema.parse(data);
    updateStepFormData(validatedInput);
    goToStep("next");
    router.push(`/couriers/register/vehicle_info`);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <Input
        name="email"
        label="Email Address"
        placeholder="example@domain.com"
        register={register}
        errors={errors}
      />
      <Input
        name="phoneNumber"
        label="Phone Number"
        placeholder="09---"
        register={register}
        errors={errors}
      />
      <button className="btn btn-sm btn-primary">Submit</button>
    </form>
  );
};
