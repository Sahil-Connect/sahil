import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSupplierFormStore } from "./useSupplierFormStore";
import { useRouter } from "next/router";

type Props = {};

const supplierPrefencesSchema = z.object({
  supplierName: z.string().min(2, { message: "required" }),
});

type FormData = z.infer<typeof supplierPrefencesSchema>;

export const SupplierPreferencesForm: FC<Props> = () => {
  const { currentStep, nextStep, prevStep, updateStepData } =
    useSupplierFormStore((state) => state);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(supplierPrefencesSchema),
  });
  const router = useRouter();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const validatedInput = supplierPrefencesSchema.parse(data);
    updateStepData(validatedInput);
    nextStep(currentStep);
    router.push(`/suppliers/new/preview`);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Zones of Operation</span>
          </label>
          <select className="select select-sm w-full max-w-xs" title="zone">
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
