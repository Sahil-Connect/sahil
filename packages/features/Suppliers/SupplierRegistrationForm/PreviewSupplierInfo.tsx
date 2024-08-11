import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import { useRegisterSupplier } from "@sahil/lib/hooks/suppliers";
import toast, { Toaster } from "react-hot-toast";
import { useSupplierFormStore } from "@sahil/lib/hooks/formStores/useSupplierFormStore";

export const PreviewSupplierInfo = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const router = useRouter();
  const formData = useSupplierFormStore((state) => state.formData);

  const { error, insertSupplier, loading, supplier } = useRegisterSupplier();

  const onSubmit: SubmitHandler<FormData> = async () => {
    const response = await insertSupplier({
      variables: {
        object: formData,
      },
    });
    const newSupplier = response.data?.insert_suppliers_one;
    router.push(`/suppliers/${newSupplier?.id}`);
  };

  if (error) {
    toast.error("Something went wrong");
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <h3>Save Supplier Information</h3>
        <input type="submit" className="btn btn-sm btn-primary" />
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};
