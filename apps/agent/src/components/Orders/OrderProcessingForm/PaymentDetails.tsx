import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useOrderFormStore } from "../../../hooks/useOrderFormStore";
import {
  HiXMark,
  HiOutlineCreditCard,
  HiOutlineBanknotes,
  HiArrowRight,
} from "react-icons/hi2";

const paymentDetailsSchema = z.object({
  paymentMethod: z.string(),
});

type FormData = z.infer<typeof paymentDetailsSchema>;

export const PaymentDetails = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(paymentDetailsSchema),
  });
  return (
    <form className="space-y-2">
      <div className="card card-compact shadow">
        <div className="card-body">
        <h3 className="card-title">Payment Method</h3>
          <div className="flex gap-2">
            <div className="form-control">
              <label className="label cursor-pointer">
                <input type="radio" name="pickup" className="radio radio-sm" />
                <div className="flex ml-4 items-center gap-2">
                  <span className="shadow p-2 rounded-md">
                    <HiOutlineCreditCard />
                  </span>
                  <span className="label-text">Momo Pay</span>
                </div>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <input
                  type="radio"
                  name="address"
                  className="radio radio-sm checked:bg-secondary"
                  checked
                />
                <div className="flex ml-4 items-center gap-2">
                  <span className="shadow p-2 rounded-md">
                    <HiOutlineBanknotes />
                  </span>
                  <span className="label-text">Cash On Delivery</span>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="btn btn-sm">
          <HiXMark /> Cancel
        </button>
        <div className="btn btn-sm btn-primary">
          <input type="submit" value="Continue" />
          <HiArrowRight />
        </div>
      </div>
    </form>
  );
};
