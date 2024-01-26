import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSupplierFormStore } from "@sahil/lib/hooks/useSupplierFormStore";
import { useRouter } from "next/router";

const supplierBasicInfoSchema = z.object({
  contactName: z.string().min(2, { message: "required" }).trim(),
  description: z.string().trim(),
  name: z.string().min(2, { message: "required" }).trim(),
});

type FormData = z.infer<typeof supplierBasicInfoSchema>;

export const SupplierBasicInfoForm = () => {
  const { formData, goToStep, updateStepFormData } = useSupplierFormStore(
    (state) => ({
      formData: state.formData,
      goToStep: state.goToStep,
      updateStepFormData: state.updateStepFormData,
    })
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(supplierBasicInfoSchema),
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const validatedInput = supplierBasicInfoSchema.parse(data);
    updateStepFormData(validatedInput);
    goToStep("next");
    router.push(`/suppliers/register/contact_details`);
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
            {...register("name")}
            defaultValue={formData.name}
          />
          {errors.name?.message && (
            <label className="label">
              <span className="label-text-alt text-error">
                {errors.name?.message}
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
            defaultValue={formData.contactName}
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
            defaultValue={formData.description}
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
