import { useForm, SubmitHandler } from "react-hook-form";
import { useRegisterSupplier } from "@/hooks/suppliers";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type Inputs = {
  supplierName: string;
};

const supplierSchema = z.object({
  supplierName: z.string().min(2, { message: "required" }),
});

export const RegisterNewSupplier = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(supplierSchema),
  });
  const { registerSupplier, loading, error } = useRegisterSupplier();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const validtedInput = supplierSchema.parse(data);

    const supplier = await registerSupplier({
      variables: {
        object: {
          name: validtedInput.supplierName,
        },
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <div className="form-control">
        <input
          type="text"
          placeholder="Supplier name"
          className="input input-sm input-bordered w-full"
          {...register("supplierName")}
        />
        {errors.supplierName?.message && <p>{errors.supplierName?.message}</p>}
      </div>
      <input type="submit" className="btn btn-sm btn-primary" />
    </form>
  );
};
