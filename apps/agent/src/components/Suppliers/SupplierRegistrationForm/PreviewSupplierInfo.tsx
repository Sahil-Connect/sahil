import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import { useRegisterSupplier } from "@/hooks/suppliers";
import toast, { Toaster } from "react-hot-toast";

type Props = {};

export const PreviewSupplierInfo: FC<Props> = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const router = useRouter();

  const { error, insertSupplier, loading, supplier } = useRegisterSupplier();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const response = await insertSupplier({
      variables: {
        object: data,
      },
    });
    const supplier = response.data?.insert_suppliers_one;
    router.push(`/suppliers/${supplier?.id}`);
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
