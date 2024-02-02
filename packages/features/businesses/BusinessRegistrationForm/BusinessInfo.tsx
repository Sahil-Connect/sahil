import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useBusinessFormStore } from "@sahil/lib/hooks/useBusinessFormStore";
import { Card, Input } from "ui";
import { HiArrowSmallRight } from "react-icons/hi2";

const businessInfoSchema = z.object({
  name: z.string().min(2, { message: "Must be more than 2 characters" }),
  businessType: z
    .string()
    .min(2, { message: "Must be more than 2 characters" }),
});

type FormData = z.infer<typeof businessInfoSchema>;

export const BusinessInfo = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(businessInfoSchema),
  });

  const router = useRouter();

  const { goToStep, updateStepFormData } = useBusinessFormStore();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log("clicked", updateStepFormData);
    const validatedInput = businessInfoSchema.parse(data);
    updateStepFormData(validatedInput);
    goToStep("next");
    router.push(`/businesses/register/address_info`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <Card title="Business Info" titleSize="sm">
        <Input
          name="name"
          label="Name of your business"
          placeholder="Keji Lumuro"
          register={register}
          errors={errors}
        />
        <Input
          name="businessType"
          label="Type of Business"
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
