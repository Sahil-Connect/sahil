import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, FormControl, Input } from "ui";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";
import { useBusinessFormStore } from "@sahil/lib/hooks/useBusinessFormStore";
const businessAddressSchema = z.object({
  streetName: z.string().min(2, { message: "Must be more than 2 characters" }),
});

type FormData = z.infer<typeof businessAddressSchema>;

export const BusinessAddressInfo = () => {
  const { formData, goToStep, updateStepFormData } = useBusinessFormStore(
    (state) => state
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    // @ts-ignore
    resolver: zodResolver(businessAddressSchema),
  });

  const router = useRouter();
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const validatedInput = businessAddressSchema.parse(data);
    updateStepFormData(validatedInput);
    goToStep("next");
    router.push(`/businesses/register/preferences`);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <Card title="Address Information">
        <Input
          name="streetName"
          label="Address Title"
          placeholder="Main Branch"
          register={register}
          errors={errors}
        />
        <Input
          name="streetName"
          label="Street Name"
          placeholder="Keji Lumuro"
          register={register}
          errors={errors}
        />
        <Input
          name="streetName"
          label="City"
          placeholder="Keji Lumuro"
          register={register}
          errors={errors}
        />
        <div className="btn btn-sm btn-primary w-fit">
          <input type="submit" value="Continue" />
          <HiArrowSmallRight />
        </div>
      </Card>
    </form>
  );
};
