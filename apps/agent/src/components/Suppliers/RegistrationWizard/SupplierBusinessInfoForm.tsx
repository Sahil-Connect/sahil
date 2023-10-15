import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const supplierContactInfoSchema = z.object({
  contactName: z.string().min(2, { message: "required" }),
  contactEmail: z.string(),
  phoneNumber: z.string(),
  streetAddress: z.string()
});

type FormData = z.infer<typeof supplierContactInfoSchema>;

type Props = {
  submitPageForm: any;
};

export const SupplierBusinessInfoForm: FC<Props> = ({ submitPageForm }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(supplierContactInfoSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const validatedInput = supplierContactInfoSchema.parse(data);
    submitPageForm(validatedInput);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 w-full">
        <div className="form-control">
          <label className="label">
            <span className="label-text">
            Who manages this business?
            </span>
          </label>
          <input
            type="text"
            placeholder="Contact name"
            className="input input-sm input-bordered w-full"
            {...register("contactName")}
          />
          {errors.contactName?.message && (
            <p>{errors.contactName?.message}</p>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Contact Email</span>
          </label>
          <input
            type="email"
            placeholder="Contact Email"
            className="input input-sm input-bordered w-full"
            {...register("contactEmail")}
          />
          {errors.contactEmail?.message && (
            <p>{errors.contactEmail?.message}</p>
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
            <p>{errors.phoneNumber?.message}</p>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Street Address</span>
          </label>
          <input
            type="number"
            placeholder="Street Address"
            className="input input-sm input-bordered w-full"
            {...register("streetAddress")}
          />
          {errors.streetAddress?.message && (
            <p>{errors.streetAddress?.message}</p>
          )}
        </div>
        <input type="submit" className="btn btn-sm btn-primary w-full" />
      </form>
    </>
  );
};
