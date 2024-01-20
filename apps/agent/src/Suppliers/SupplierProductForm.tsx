import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Toggle } from "ui";

export const supplierProductSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(3, "Name cannot be less than 3 characters.").trim(),
  description: z.string().min(1, "Description cannot be less than 10.").trim(),
  inStock: z.boolean(),
  price: z.number().min(0, "Price cannot be negative."),
  quantity: z.number().min(0, "Quantity cannot be negative."),
  discount: z
    .number()
    .min(0, "Discount cannot be negative.")
    .max(90, "Discount cannot be more than 90."),
});

export type ProductFormData = z.infer<typeof supplierProductSchema>;

type SupplierProductFormProps = {
  onSubmit: SubmitHandler<ProductFormData>;
  loading?: boolean;
  initial?: ProductFormData;
};

const SupplierProductForm = ({
  loading,
  onSubmit,
  initial,
}: SupplierProductFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ProductFormData>({
    // @ts-ignore
    resolver: zodResolver(supplierProductSchema),
  });

  useEffect(() => {
    if (initial) {
      setValue("id", initial.id);
      setValue("name", initial.name || "");
      setValue("description", initial.description || "");
      setValue("inStock", initial.inStock || false);
      setValue("price", initial.price || 0);
      setValue("quantity", initial.quantity || 0);
      setValue("discount", initial.discount || 0);
    }
  }, [initial, setValue]);

  const price = watch("price");
  const discount = watch("discount");
  const inStock = watch("inStock");

  const discountedPrice = Math.round(price - price * (discount / 100));

  const showDiscountedPrice = discount > 0 && discount < 90 && discountedPrice;

  return (
    <form
      onSubmit={handleSubmit(onSubmit, (errors) => console.log(errors))}
      className="flex flex-col gap-1"
    >
      <Input label="Name" name="name" register={register} errors={errors} />
      <Input
        label="Description"
        name="description"
        register={register}
        errors={errors}
      />
      <div className="w-full flex gap-4">
        <Input
          label="Price (SSP)"
          name="price"
          type="number"
          register={register}
          errors={errors}
          defaultValue={0}
        />
        <Input
          label="Quantity"
          name="quantity"
          type="number"
          register={register}
          errors={errors}
          defaultValue={0}
        />
      </div>
      <div className="w-full flex gap-4">
        <div className="w-full">
          <Input
            label="Discount (%)"
            name="discount"
            type="number"
            register={register}
            errors={errors}
            defaultValue={0}
          />
          {showDiscountedPrice && (
            <p className="text-sm text-primary">
              New Price {discountedPrice} SSP
            </p>
          )}
        </div>

        <Toggle
          label="Available"
          name="inStock"
          register={register}
          errors={errors}
          isChecked={inStock}
        />
      </div>

      <div className="my-4 flex flex-row justify-end gap-4">
        <button
          type="submit"
          className={`btn normal-case btn-primary ${
            loading && "animate-pulse"
          }`}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default SupplierProductForm;
