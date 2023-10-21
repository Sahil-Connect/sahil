import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/router";
import { useSupplierFormStore } from "./useSupplierFormStore";

type Props = {
  submitForm: (formData: Record<string, any>) => any;
};

export const PreviewSupplierInfo: FC<Props> = ({ submitForm }) => {
  const { currentStep, formData } = useSupplierFormStore(
    (state) => state
  );
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const router = useRouter();
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const response = await submitForm(formData);
    console.log(response);
    // router.push(`/suppliers/1`);
  };

  console.log(formData);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Hello, there!</h3>
      <input type="submit" />
    </form>
  );
};
