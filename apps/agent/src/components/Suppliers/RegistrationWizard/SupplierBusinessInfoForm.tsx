import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type Inputs = {
  supplierName: string;
};

const supplierInfoSchema = z.object({
  supplierName: z.string().min(2, { message: "required" }),
});

export const SupplierBusinessInfoForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(supplierInfoSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const validtedInput = supplierInfoSchema.parse(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 w-full">
    
        <div className="form-control">
          <label className="label">
            <span className="label-text">
              What is the name of your business?
            </span>
          </label>
          <input
            type="text"
            placeholder="Contact name"
            className="input input-sm input-bordered w-full"
            {...register("supplierName")}
          />
          {errors.supplierName?.message && (
            <p>{errors.supplierName?.message}</p>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">
            Contact Email
            </span>
          </label>
          <input
            type="email"
            placeholder="Contact Email"
            className="input input-sm input-bordered w-full"
            {...register("supplierName")}
          />
          {errors.supplierName?.message && (
            <p>{errors.supplierName?.message}</p>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">
            Phone Number
            </span>
          </label>
          <input
            type="number"
            placeholder="Phone Number"
            className="input input-sm input-bordered w-full"
            {...register("supplierName")}
          />
          {errors.supplierName?.message && (
            <p>{errors.supplierName?.message}</p>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">
            Street Address
            </span>
          </label>
          <input
            type="number"
            placeholder="Street Address"
            className="input input-sm input-bordered w-full"
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
