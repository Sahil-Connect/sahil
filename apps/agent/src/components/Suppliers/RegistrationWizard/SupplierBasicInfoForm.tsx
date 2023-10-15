import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const supplierBasicInfoSchema = z.object({
  contactName: z.string().min(2, { message: "required" }).trim(),
  description: z.string().trim(),
  supplierName: z.string().min(2, { message: "required" }).trim(),
});

type FormData = z.infer<typeof supplierBasicInfoSchema>;

type Props = {
  submitPageForm: any;
};

export const SupplierBasicInfoForm: FC<Props> = ({ submitPageForm }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(supplierBasicInfoSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const validatedInput = supplierBasicInfoSchema.parse(data);
    submitPageForm(validatedInput);
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
          />
          {errors.supplierName?.message && (
            <p>{errors.supplierName?.message}</p>
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
          {errors.contactName?.message && <p>{errors.contactName?.message}</p>}
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
        <input type="submit" className="btn btn-sm btn-primary w-full" />
      </form>
    </>
  );
};
