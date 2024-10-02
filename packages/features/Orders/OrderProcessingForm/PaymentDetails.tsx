import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useOrderFormStore } from "@sahil/lib/hooks/formStores/useOrderFormStore";
import { Card, Icon, RadioGroup } from "ui";
import {
  HiXMark,
  HiArrowSmallRight,
} from "react-icons/hi2";
import { PaymentMethodOptions } from "../OrderPreferences";

const paymentDetailsSchema = z.object({
  paymentMethod: z.string(),
});

type FormData = z.infer<typeof paymentDetailsSchema>;

type PaymentDetailsProps = {
  navigateToNextStep: (step: string) => void;
};

export const PaymentDetails: FC<PaymentDetailsProps> = ({
  navigateToNextStep,
}) => {
  const updateStepFormData = useOrderFormStore(
    (state) => state.updateStepFormData
  );
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    // @ts-ignore
    resolver: zodResolver(paymentDetailsSchema),
  });
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const validatedInput = paymentDetailsSchema.parse(data);

    updateStepFormData(validatedInput);
    navigateToNextStep("summary");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <Card title="Payment Method" titleSize="sm">
        <div className="flex gap-2">
        <PaymentMethodOptions register={register} errors={errors}/>
        </div>
        <div className="card-actions">
          <div className="flex gap-2">
            <button className="btn btn-sm">
              <HiXMark /> Cancel
            </button>
            <div className="btn btn-sm btn-primary">
              <input type="submit" value="Continue" />
              <HiArrowSmallRight />
            </div>
          </div>
        </div>
      </Card>
    </form>
  );
};
