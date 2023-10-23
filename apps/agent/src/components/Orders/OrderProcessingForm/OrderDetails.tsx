import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useOrderFormStore } from "./useOrderFormStore";

const orderDetailsSchema = z.object({
  clientId: z.string(),
});

export const OrderDetails = () => {
  return (
    <form className="space-y-2">
      <h3 className="text-xl">OrderDetails</h3>
      <div className="form-control">
        <div className="label">
          <span className="label-text">Client</span>
        </div>
        <select className="select select-bordered select-sm w-full max-w-xs">
          <option>Select Client</option>
          <option>Han Solo</option>
          <option>Greedo</option>
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
        />
      </div>
      <input
        type="submit"
        className="btn btn-sm btn-primary"
        value="continue"
      />
    </form>
  );
};
