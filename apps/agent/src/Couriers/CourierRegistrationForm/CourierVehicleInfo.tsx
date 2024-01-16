import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCourierFormStore } from "@/hooks/useCourierFormStore";
import { Input, Select } from "ui";
import { useRouter } from "next/router";

const courierVehicleSchema = z.object({
  type: z.string().trim(),
  model: z.string().nonempty({ message: "Vehicle model is required" }).trim(),
  license_plate_number: z
    .string()
    .toUpperCase()
    .nonempty({ message: "License plate number is required" })
    .regex(/^[A-Z0-9]{1,7}$/i, {
      message:
        "Invalid license plate number format (up to 5 characters, letters and numbers only)",
    })
    .trim(),
  color: z.string().nonempty({ message: "Vehicle color is required" }).trim(),
});

type FormData = z.infer<typeof courierVehicleSchema>;

export const CourierVehicleInfo = () => {
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
    resolver: zodResolver(courierVehicleSchema),
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const validatedInput = courierVehicleSchema.parse(data);
    updateStepFormData(validatedInput);
    goToStep("next");
    router.push(`/couriers/register/summary`);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <Select
        label="Vehicle Type"
        name="type"
        options={["Car", "Bike"]}
        register={register}
        errors={errors}
      />
      <Input label="Model" name="model" register={register} errors={errors} />
      <Input
        label="License Plate Number"
        name="license_plate_number"
        register={register}
        errors={errors}
      />
      <Input label="Color" name="color" register={register} errors={errors} />
      <button className="btn btn-sm btn-primary">Submit</button>
    </form>
  );
};
