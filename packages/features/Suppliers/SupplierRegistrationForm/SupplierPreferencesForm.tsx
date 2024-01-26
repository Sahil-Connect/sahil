import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSupplierFormStore } from "@sahil/lib/hooks/useSupplierFormStore";
import { useRouter } from "next/router";

const supplierPrefencesSchema = z.object({
  zone: z.string(),
});

type FormData = z.infer<typeof supplierPrefencesSchema>;

export const SupplierPreferencesForm = () => {
  const { goToStep, updateStepFormData } = useSupplierFormStore((state) => ({
    goToStep: state.goToStep,
    updateStepFormData: state.updateStepFormData,
  }));
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
    updateStepFormData(validatedInput);
    goToStep("next");
    router.push(`/suppliers/register/preview`);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Zones of Operation</span>
          </label>
          <select
            {...register("zone")}
            className="select select-sm w-full max-w-xs"
            title="zone"
            defaultValue="Souq Konyo Konyo"
          >
            <option disabled>Souq Konyo Konyo</option>
            <option>Munuki</option>
            <option>Atlabara</option>
            <option>Hai thoura</option>
          </select>
          {errors.zone?.message && <p>{errors.zone?.message}</p>}
        </div>
        <input type="submit" className="btn btn-sm btn-primary" />
      </form>
    </>
  );
};
