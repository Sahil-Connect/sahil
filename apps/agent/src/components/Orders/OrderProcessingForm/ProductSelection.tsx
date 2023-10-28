import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useOrderFormStore } from "../../../hooks/useOrderFormStore";
import { ProductsCatalogue } from "../ProductsCatalogue";
import { RecommendedSuppliers } from "../RecommendedSuppliers";

import { HiArrowRight, HiMiniMagnifyingGlass, HiXMark } from "react-icons/hi2";

const productSelectionSchema = z.object({
  clientId: z.string(),
});

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
            <button className="btn btn-sm btn-primary">
              <HiMiniMagnifyingGlass /> Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProductSelection = () => {
  const { client, formData, updateStepFormData } = useOrderFormStore((state) => state);

  console.log(client);
  return (
    <>
      <form className="space-y-2">
      <SearchProductCatalogue />
      <ProductsCatalogue />
        <div className="flex gap-2">
          <button className="btn btn-sm">
            <HiXMark /> Cancel
          </button>
          <div className="btn btn-sm btn-primary">
            <input type="submit" value="continue" />
            <HiArrowRight />
          </div>
        </div>
      </form>
    </>
  );
};
