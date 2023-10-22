import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useOrderFormStore } from "./useOrderFormStore";

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
      <h3 className="text-xl">Payment Details</h3>
      <div className="form-control">
        <div className="label">
          <span className="label-text">Preferred Payment Method</span>
        </div>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Cash</span>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-red-500"
            checked
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Momo Pay</span>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-blue-500"
            checked
          />
        </label>
      </div>
      <input
        type="submit"
        className="btn btn-sm btn-primary"
        value="continue"
      />
    </form>
  );
};
