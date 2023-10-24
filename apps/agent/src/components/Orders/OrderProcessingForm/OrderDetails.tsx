import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useOrderFormStore } from "../../../hooks/useOrderFormStore";
import {
  HiArrowLeft,
  HiArrowRight,
  HiMinus,
  HiPlus,
  HiMiniMagnifyingGlass,
  HiOutlineTruck,
  HiXMark,
} from "react-icons/hi2";

const orderDetailsSchema = z.object({
  clientId: z.string(),
  notes: z.string(),
});

type FormData = z.infer<typeof orderDetailsSchema>;

const businesses = [
  {
    name: "Sunset Juba",
    id: "c6dbf0b7-1a17-4edb-beb4-492c95b5328f",
  },
  {
    name: "Notos Bar & Grill",
    id: "0558c571-a892-400c-9c2a-eeb23341802b",
  },
  {
    name: "Radisson Blu",
    id: "e87924e8-69e4-4171-bd89-0c8963e03d08",
  },
  {
    name: "Amigos Bar & Restaurant",
    id: "328968ca-5d0e-48f1-93da-ae8b8c0e9208",
  },
];

export const OrderDetails = () => {
  const { goToStep, updateStepFormData, formData } = useOrderFormStore(
    (state) => state
  );

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(orderDetailsSchema),
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const validatedInput = orderDetailsSchema.parse(data);
    updateStepFormData(validatedInput);
    goToStep("next");
    router.push(`/orders/new/product_selection`);
  };

  const onExit = () => {
    console.log("Exiting now!!");
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <div className="card card-compact shadow">
        <div className="card-body">
        <h3 className="card-title">Order Details</h3>
          <div className="form-control">
            <div className="label">
              <span className="label-text">Client</span>
            </div>
            <select
              {...register("clientId")}
              className="select select-bordered select-sm w-full max-w-xs"
            >
              {businesses.map((business) => (
                <option value={business.id} key={business.id}>
                  {business.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Notes</span>
            </label>
            <input
              type="textarea"
              placeholder="Notes"
              className="textarea textarea-bordered w-full"
              {...register("notes")}
            />
          </div>
          <div className="card-actions">
            <div className="flex gap-2">
              <button className="btn btn-sm" onClick={() => onExit()}>
                <HiXMark /> Cancel
              </button>
              <div className="btn btn-sm btn-primary">
                <input type="submit" value="continue" />
                <HiArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
