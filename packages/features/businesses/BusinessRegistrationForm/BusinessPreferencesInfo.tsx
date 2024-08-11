import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, Input, RadioGroup, Select } from "ui";
import { useBusinessFormStore } from "@sahil/lib/hooks/formStores/useBusinessFormStore";
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

  const paymentOptions = [
    {
      label: "Cash on Delivery",
      value: "cash",
      icon: HiOutlineBanknotes,
    },
    {
      label: "Momo Pay",
      value: "momo",
      icon: HiOutlineCreditCard,
    },
  ];

  const deliveryOptions = [
    {
      label: "Direct Delivery",
      value: "delivery",
      icon: HiOutlineBuildingOffice,
    },
    {
      label: "Pick-Up Locations",
      value: "pick-up",
      icon: HiOutlineMapPin,
    },
  ];
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

      <RadioGroup
        label="Preferred Payment Method"
        options={paymentOptions}
        name="preferredPaymentMethod"
        register={register}
        errors={errors}
      />

      <RadioGroup
        label="Preferred Delivery Method"
        options={deliveryOptions}
        name="preferredPaymentMethod"
        register={register}
        errors={errors}
      />

      <div className="btn btn-sm btn-primary w-fit">
        <input type="submit" value="Continue" />
        <HiArrowSmallRight />
      </div>
    </form>
  );
};
