import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useOrderFormStore } from "@sahil/lib/hooks/useOrderFormStore";
import { CustomProductsCatalogue } from "../CustomProductsCatalogue";
import { RecommendedSuppliers } from "../RecommendedSuppliers";

import {
  HiArrowSmallRight,
  HiMiniMagnifyingGlass,
  HiXMark,
} from "react-icons/hi2";

const productSelectionSchema = z.object({
  // clientId: z.string(),
});

type FormData = z.infer<typeof productSelectionSchema>;

type ProductSelectionProps = {
  navigateToNextStep: (step: string) => void;
};

export const ProductSelection: FC<ProductSelectionProps> = ({
  navigateToNextStep,
}) => {
  const { client, formData, goToStep, updateStepFormData } = useOrderFormStore(
    (state) => state
  );

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    // @ts-ignore
    resolver: zodResolver(productSelectionSchema),
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log("yerrrrr");
    const validatedInput = productSelectionSchema.parse(data);

    updateStepFormData(validatedInput);
    navigateToNextStep("delivery_details");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <CustomProductsCatalogue />
      <div className="flex gap-2">
        <div className="btn btn-sm btn-primary">
          <input type="submit" value="continue" />
          <HiArrowSmallRight />
        </div>
      </div>
    </form>
  );
};

export const SearchProductCatalogue = () => {
  return (
    <div className="card card-compact card-bordered">
      <div className="card-body">
        <div className="flex items-center gap-2 ">
          <div className="form-control flex-grow">
            <input
              type="text"
              className="input input-sm input-bordered w-full"
              placeholder="E.g sugar, meat"
            />
          </div>
          <div>
            <button className="btn btn-sm btn-primary" type="button">
              <HiMiniMagnifyingGlass /> Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
