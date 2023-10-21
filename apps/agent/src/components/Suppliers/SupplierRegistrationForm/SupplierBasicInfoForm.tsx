import { FC, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSupplierFormStore } from "./useSupplierFormStore";
import { useRouter } from 'next/router';
import { useParams } from "next/navigation";

const INITIAL_STEP = "Business Info";
const steps = ["Business Info", "Contact Details", "Preferences"] as const;

const supplierBasicInfoSchema = z.object({
  contactName: z.string().min(2, { message: "required" }).trim(),
  description: z.string().trim(),
  supplierName: z.string().min(2, { message: "required" }).trim(),
});

type FormData = z.infer<typeof supplierBasicInfoSchema>;

type Props = {};

const stepRouteSchema = z.object({
  step: z.array(z.enum(steps)).default([INITIAL_STEP]),
});

export const SupplierBasicInfoForm: FC<Props> = () => {
  const { currentStep, goToStep, updateStepData, formData } =
  useSupplierFormStore((state) => state);

  const defaultValues = {

  }
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(supplierBasicInfoSchema),
  });
  
  const router = useRouter();
  const params = useParams();
  const result = stepRouteSchema.safeParse(params);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const validatedInput = supplierBasicInfoSchema.parse(data);
    updateStepData(validatedInput);
    goToStep("next");
    router.push(`/suppliers/new/contact_details`);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <div className="form-control">
          <label className="label">
            <span className="label-text">
              What is the name of your business?
            </span>
          </label>
          <input
            type="text"
            placeholder="Energy Suppliers"
            className="input input-sm input-bordered w-full"
            {...register("supplierName")}
            defaultValue={formData.supplierName}
          />
          {errors.supplierName?.message && (
            <label className="label">
              <span className="label-text-alt text-error">
                {errors.supplierName?.message}
              </span>
            </label>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Who manages this business?</span>
          </label>
          <input
            type="text"
            placeholder="John Doe"
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
            <span className="label-text">Describe your business</span>
          </label>
          <input
            type="textarea"
            placeholder="Description"
            className="textarea textarea-bordered w-full"
            {...register("description")}
          />
        </div>
        <input
          type="submit"
          className="btn btn-sm btn-primary"
          value="Continue"
        />
      </form>
    </>
  );
};
