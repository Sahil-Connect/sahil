import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, Input, Radio, Select } from "ui";
import { useBusinessFormStore } from "@sahil/lib/hooks/useBusinessFormStore";
import {
  HiOutlineCreditCard,
  HiOutlineBanknotes,
  HiArrowSmallRight,
  HiOutlineBuildingOffice,
  HiOutlineMapPin,
} from "react-icons/hi2";

const businessPreferencesSchema = z.object({
  preferredContactMethod: z.string(),
  preferredPaymentMethod: z.string(),
});

type FormData = z.infer<typeof businessPreferencesSchema>;

export const BusinessPreferencesInfo = () => {
  const { formData, goToStep, updateStepFormData } = useBusinessFormStore();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    // @ts-ignore
    resolver: zodResolver(businessPreferencesSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const validatedInput = businessPreferencesSchema.parse(data);
    updateStepFormData(validatedInput);
    goToStep("next");
    router.push(`/businesses/register/summary`);
  };
  return (
    <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
      <Card title="Business Preferences" titleSize="sm">
        <Input
          name="contactName"
          label="Contact Name"
          placeholder="Keji Lumuro"
          register={register}
          errors={errors}
        />
        <div className="flex gap-4">
          <Select
            label="Preferred Contact Method"
            register={register}
            errors={errors}
            name="preferredContactMethod"
            options={["Email", "Mobile", "SMS", "WhatsApp"]}
          />
          <Input
            name="contactNumber"
            label="Contact"
            placeholder="Email or Phone Number"
            register={register}
            errors={errors}
          />
        </div>
      </Card>

      <Card title="Preferred Delivery Method" titleSize="sm">
        <p className="text-gray-500">
          How do you prefer to receive notifications?
        </p>
        <div className="flex gap-8">
          <Radio
            label="Cash on Delivery"
            icon={HiOutlineBanknotes}
            name="preferredPaymentMethod"
            register={register}
            errors={errors}
          />
          <Radio
            label="Momo Pay"
            icon={HiOutlineCreditCard}
            name="preferredPaymentMethod"
            register={register}
            errors={errors}
          />
        </div>
      </Card>

      <Card title="Preferred Delivery Method" titleSize="sm">
        <p className="text-gray-500">
          How do you prefer to receive notifications?
        </p>
        <div className="flex gap-8">
          <Radio
            label="Direct Delivery"
            icon={HiOutlineBuildingOffice}
            name="preferredPaymentMethod"
            register={register}
            errors={errors}
          />
          <Radio
            label="Pick-Up Locations"
            icon={HiOutlineMapPin}
            name="preferredPaymentMethod"
            register={register}
            errors={errors}
          />
        </div>
      </Card>

      <div className="btn btn-sm btn-primary w-fit">
        <input type="submit" value="Continue" />
        <HiArrowSmallRight />
      </div>
    </form>
  );
};
