import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSupplierFormStore } from "./useSupplierFormStore";
import { useRouter } from "next/router";

const supplierContactInfoSchema = z.object({
  contactName: z.string().min(2, { message: "required" }),
  contactEmail: z.string(),
  phoneNumber: z.string(),
  streetAddress: z.string(),
});

type FormData = z.infer<typeof supplierContactInfoSchema>;

type Props = {};

export const SupplierBusinessInfoForm: FC<Props> = () => {
  const { currentStep, goToStep, updateStepFormData } =
    useSupplierFormStore((state) => state);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(supplierContactInfoSchema),
  });
  const router = useRouter();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const validatedInput = supplierContactInfoSchema.parse(data);
    updateStepFormData(validatedInput);
    goToStep("next");
    router.push(`/suppliers/new/preferences`);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 w-full">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Who manages this business?</span>
          </label>
          <input
            type="text"
            placeholder="Contact name"
            className="input input-sm input-bordered w-full"
            {...register("contactName")}
          />
          {errors.contactName?.message && (
            <label className="label">
              <span className="label-text-alt text-error">
                {errors.contactName?.message}
              </span>
            </label>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email Address</span>
          </label>
          <input
            type="email"
            placeholder="john@sahil.com"
            className="input input-sm input-bordered w-full"
            {...register("contactEmail")}
          />
          {errors.contactEmail?.message && (
            <label className="label">
              <span className="label-text-alt text-error">
                {errors.contactEmail?.message}
              </span>
            </label>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input
            type="number"
            placeholder="Phone Number"
            className="input input-sm input-bordered w-full"
            {...register("phoneNumber")}
          />
          {errors.phoneNumber?.message && (
            <label className="label">
              <span className="label-text-alt text-error">
                {errors.phoneNumber?.message}
              </span>
            </label>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Street Address</span>
          </label>
          <input
            type="text"
            placeholder="Street Address"
            className="input input-sm input-bordered w-full"
            {...register("streetAddress")}
          />
          {errors.streetAddress?.message && (
            <label className="label">
              <span className="label-text-alt text-error">
                {errors.streetAddress?.message}
              </span>
            </label>
          )}
        </div>
        <input type="submit" className="btn btn-sm btn-primary w-full" />
      </form>
    </>
  );
};
