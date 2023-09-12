import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const supplierInfoSchema = z.object({
  supplierName: z.string().min(2, { message: "required" }),
});

type FormData = z.infer<typeof supplierInfoSchema>

type Props = {}

export const SupplierBasicInfoForm: FC<Props> = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(supplierInfoSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const validtedInput = supplierInfoSchema.parse(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <div className="form-control">
          <label className="label">
            <span className="label-text">What is the name of your business?</span>
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
            {...register("supplierName")}
          />
          {errors.supplierName?.message && (
            <p>{errors.supplierName?.message}</p>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Supplier title</span>
          </label>
          <input
            type="text"
            placeholder="Logistics Manager"
            className="input input-sm input-bordered w-full"
            {...register("supplierName")}
          />
          {errors.supplierName?.message && (
            <p>{errors.supplierName?.message}</p>
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
            {...register("supplierName")}
          />
          {errors.supplierName?.message && (
            <p>{errors.supplierName?.message}</p>
          )}
        </div>
        <input type="submit" className="btn btn-sm btn-primary w-full" />
      </form>
    </>
  );
};
