import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useCourierFormStore } from "@sahil/lib/hooks/formStores/useCourierFormStore";
import { useRouter } from "next/router";
import { useRegisterCourier } from "@sahil/lib/hooks/couriers";
import toast, { Toaster } from "react-hot-toast";

export const CourierFormSummary = () => {
  const router = useRouter();
  const formData = useCourierFormStore((state) => state.formData);

  const { insertCourier, loading, error } = useRegisterCourier();

  const { handleSubmit } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async () => {
    const { name, gender, DOB, email, phoneNumber } = formData;
    const { type, model, license_plate_number, color } = formData;

    const courier = { name, gender, DOB, email, phoneNumber };
    const rides = { type, model, license_plate_number, color };
    const response = await insertCourier({
      variables: {
        object: {
          ...courier,
          rides: {
            data: rides,
          },
        },
      },
    });
    const newCourier = response.data?.insert_couriers_one;
    router.push(`/couriers/${newCourier?.id}`);
  };

  if (error) {
    toast.error("Something went wrong");
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <h3>Save Courier Information</h3>
        <button
          type="submit"
          className={`btn btn-sm btn-primary ${loading && "animate-pulse"}`}
        >
          Submit
        </button>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};
