import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useOrderFormStore } from "@/hooks/useOrderFormStore";
import { Card, FormControl, Input, Select } from "ui";

import {
  HiArrowRight,
  HiOutlineBolt,
  HiOutlineCalendarDays,
  HiOutlineBuildingOffice,
  HiOutlineMapPin,
} from "react-icons/hi2";

const deliveryDetailsSchema = z.object({
  paymentMethod: z.string(),
});

type FormData = z.infer<typeof deliveryDetailsSchema>;

export const DeliveryDetails = ({ navigateToNextStep }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(deliveryDetailsSchema),
  });
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // const validatedInput = .parse(data);
    // navigateToNextStep("");
  };
  return (
    <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
      <Card title="Delivery Information">
        <div className="flex gap-2">
          <FormControl label="Name">
            <Input placeholder="Keji Lumuro" />
          </FormControl>
          <FormControl label="Mobile Number">
            <Input placeholder="+211-9813231392" />
          </FormControl>
        </div>
        <div className="flex gap-8">
          <div className="form-control">
            <label className="label cursor-pointer">
              <input type="radio" name="immediate" className="radio radio-sm" />
              <div className="flex ml-4 items-center gap-2">
                <span className="shadow p-2 rounded-md">
                  <HiOutlineBolt />
                </span>
                <span className="label-text">Immediate</span>
              </div>
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <input
                type="radio"
                name="scheduled"
                className="radio radio-sm checked:bg-secondary"
              />
              <div className="flex ml-4 items-center gap-2">
                <span className="shadow p-2 rounded-md">
                  <HiOutlineCalendarDays />
                </span>
                <span className="label-text">Scheduled</span>
              </div>
            </label>
          </div>
        </div>
        <FormControl label="Date">
          <Input type="date" />
        </FormControl>
      </Card>
      <Card title="Delivery Type">
        <div className="flex gap-2">
          <div className="form-control">
            <label className="label cursor-pointer">
              <input
                type="radio"
                name="pickup"
                className="radio radio-sm checked:bg-secondary"
              />
              <div className="flex ml-4 items-center gap-2">
                <span className="shadow p-2 rounded-md">
                  <HiOutlineBuildingOffice />
                </span>
                <span className="label-text">Pick Up Location</span>
              </div>
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <input type="radio" name="address" className="radio radio-sm" />
              <div className="flex ml-4 items-center gap-2">
                <span className="shadow p-2 rounded-md">
                  <HiOutlineMapPin />
                </span>
                <span className="label-text">Physical Address</span>
              </div>
            </label>
          </div>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Choose pick up location</span>
          </label>
          <Select
            options={["Custom Market", "Souq Konyo Konyo", "Souq Munuki"]}
            title="Pickup Location"
          />
        </div>
      </Card>
      <div className="btn btn-sm btn-primary">
        <input type="submit" value="Continue" />
        <HiArrowRight />
      </div>
    </form>
  );
};
