import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useOrderFormStore } from "../../hooks/useOrderFormStore";
import { useFetchBusinesses } from "@/hooks/businesses";
import { HiArrowSmallRight, HiXMark } from "react-icons/hi2";
import { Card, FormControl } from "ui";

const orderDetailsSchema = z.object({
  clientId: z.string(),
  notes: z.string(),
});

type FormData = z.infer<typeof orderDetailsSchema>;

export const OrderDetails = ({ navigateToNextStep }) => {
  const { goToStep, updateStepFormData, formData, setCurrentClient } =
    useOrderFormStore((state) => state);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    // @ts-ignore
    resolver: zodResolver(orderDetailsSchema),
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const validatedInput = orderDetailsSchema.parse(data);
    const client = businesses.find((business) => business.id === data.clientId);
    updateStepFormData(validatedInput);
    setCurrentClient(client);
    navigateToNextStep("product_selection");
  };

  const onExit = () => {
    router.push("/orders");
  };

  const {
    data: businesses,
    loading: businessLoading,
    error: businessesError,
  } = useFetchBusinesses();
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <Card title="Client Information" titleSize="sm">
        <div className="form-control">
          <div className="label">
            <span className="label-text">Client</span>
          </div>
          <select
            {...register("clientId")}
            className="select select-bordered select-sm w-full max-w-xs bg-gray-100"
          >
            {businesses &&
              businesses.map((business) => (
                <option value={business.id} key={business.id}>
                  {business.name}
                </option>
              ))}
          </select>
        </div>
        <FormControl label="Notes (optional)">
          <input
            type="textarea"
            placeholder="Notes"
            className="textarea textarea-bordered w-full bg-gray-100"
            {...register("notes")}
          />
        </FormControl>
        <div className="card-actions">
          <div className="flex gap-2">
            <button
              className="btn btn-sm"
              onClick={() => onExit()}
              type="button"
            >
              <HiXMark /> Cancel
            </button>
            <div className="btn btn-sm btn-primary">
              <input type="submit" value="continue" />
              <HiArrowSmallRight />
            </div>
          </div>
        </div>
      </Card>
    </form>
  );
};
