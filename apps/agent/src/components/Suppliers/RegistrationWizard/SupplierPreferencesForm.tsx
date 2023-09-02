import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type Inputs = {
  supplierName: string;
};

type Props = {};

const supplierInfoSchema = z.object({
  supplierName: z.string().min(2, { message: "required" }),
});

export const SupplierPreferencesForm: FC<Props> = () => {
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
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Zones of Operation</span>
          </label>
          <select className="select select-sm w-full max-w-xs">
            <option disabled selected>
              Souq Konyo Konyo
            </option>
            <option>Munuki</option>
            <option>Atlabara</option>
            <option>Hai thoura</option>
          </select>
          {errors.supplierName?.message && (
            <p>{errors.supplierName?.message}</p>
          )}
        </div>
        <input type="submit" className="btn btn-sm btn-primary" />
      </form>
    </>
  );
};
