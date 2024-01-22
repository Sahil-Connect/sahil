import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, Input, Radio, Select } from "ui";
import {
  HiOutlineCreditCard,
  HiOutlineBanknotes,
  HiArrowSmallRight,
} from "react-icons/hi2";

const businessPreferencesSchema = z.object({
  preferredContactMethod: z.string(),
  preferredPaymentMethod: z.string(),
});

type FormData = z.infer<typeof businessPreferencesSchema>;

export const BusinessPreferencesInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    // @ts-ignore
    resolver: zodResolver(businessPreferencesSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {};
  return (
    <form>
      <Card title="Business Preferences">
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
        <div className="btn btn-sm btn-primary w-fit">
          <input type="submit" value="Continue" />
          <HiArrowSmallRight />
        </div>
      </Card>
    </form>
  );
};
