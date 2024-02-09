import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useOrderFormStore } from "@sahil/lib/hooks/useOrderFormStore";
import { Card, FormControl, FormControlError, Select } from "ui";

import {
  HiArrowSmallRight,
  HiOutlineBolt,
  HiOutlineCalendarDays,
  HiOutlineBuildingOffice,
  HiOutlineMapPin,
} from "react-icons/hi2";
import { StepDirection } from "ui/components/MultiStepForm";

const deliveryDetailsSchema = z.object({
  contactName: z.string().optional(),
  mobileNumber: z.string().optional(),
  deliveryDate: z.string().optional(),
  deliveryType: z.string().optional(),
  scheduleType: z.string().optional(),
  pickupLocation: z.string().optional(),
  deliveryAddress: z.string().optional(),
});

type FormData = z.infer<typeof deliveryDetailsSchema>;

type DeliveryDetailsProps = {
  navigateToNextStep: (step: string) => void;
};

export const DeliveryDetails: FC<DeliveryDetailsProps> = ({
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
    resolver: zodResolver(deliveryDetailsSchema),
  });
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const validatedInput = deliveryDetailsSchema.parse(data);
    updateStepFormData(validatedInput);
    navigateToNextStep("payment_details");
  };
  return (
    <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
      <Card title="Delivery Information" titleSize="sm">
        <div className="flex gap-2">
          <FormControl label="Name">
            <input
              placeholder="Keji Lumuro"
              {...register("contactName")}
              className="input input-sm input-bordered w-full max-w-lg"
            />
            {errors.contactName?.message && (
              <FormControlError message={errors.contactName?.message} />
            )}
          </FormControl>
          <FormControl label="Mobile Number">
            <input
              placeholder="+211-9813231392"
              className="input input-sm input-bordered w-full max-w-lg"
              {...register("mobileNumber")}
            />
            {errors.mobileNumber?.message && (
              <FormControlError message={errors.mobileNumber?.message} />
            )}
          </FormControl>
        </div>
        <div className="flex gap-8">
          <div className="form-control">
            <label className="label cursor-pointer">
              <input
                type="radio"
                className="radio radio-sm"
                {...register("scheduleType")}
              />
              <div className="flex ml-4 items-center gap-2">
                <span className="shadow p-2 rounded-md">
                  <HiOutlineBolt />
                </span>
                <span className="label-text">Immediate</span>
              </div>
            </label>
            {errors.contactName?.message && (
              <FormControlError message={errors.contactName?.message} />
            )}
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <input
                type="radio"
                className="radio radio-sm checked:bg-secondary"
                {...register("scheduleType")}
              />
              <div className="flex ml-4 items-center gap-2">
                <span className="shadow p-2 rounded-md">
                  <HiOutlineCalendarDays />
                </span>
                <span className="label-text">Scheduled</span>
              </div>
            </label>
            {errors.contactName?.message && (
              <FormControlError message={errors.contactName?.message} />
            )}
          </div>
        </div>
        {false && (
          <FormControl label="Date">
            <input type="date" {...register("deliveryDate")} />
            {errors.deliveryDate?.message && (
              <FormControlError message={errors.deliveryDate?.message} />
            )}
          </FormControl>
        )}
      </Card>
      <Card title="Delivery Type" titleSize="sm">
        <div className="flex gap-2">
          <div className="form-control">
            <label className="label cursor-pointer">
              <input
                type="radio"
                className="radio radio-sm checked:bg-secondary"
                {...register("deliveryType")}
              />
              <div className="flex ml-4 items-center gap-2">
                <span className="shadow p-2 rounded-md">
                  <HiOutlineBuildingOffice />
                </span>
                <span className="label-text">Pick Up Location</span>
              </div>
            </label>
            {errors.deliveryType?.message && (
              <FormControlError message={errors.deliveryType?.message} />
            )}
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <input
                type="radio"
                className="radio radio-sm"
                {...register("deliveryType")}
              />
              <div className="flex ml-4 items-center gap-2">
                <span className="shadow p-2 rounded-md">
                  <HiOutlineMapPin />
                </span>
                <span className="label-text">Physical Address</span>
              </div>
            </label>
            {errors.deliveryType?.message && (
              <FormControlError message={errors.deliveryType?.message} />
            )}
          </div>
        </div>
        {false && (
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Choose pick up location</span>
            </label>
            {errors.pickupLocation?.message && (
              <FormControlError message={errors.pickupLocation?.message} />
            )}
          </div>
        )}
      </Card>
      <div className="btn btn-sm btn-primary">
        <input type="submit" value="Continue" />
        <HiArrowSmallRight />
      </div>
    </form>
  );
};
