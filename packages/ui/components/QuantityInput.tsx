import {
  HiMinus,
  HiPlus,
  HiOutlineArrowRight,
  HiOutlineShoppingCart,
  HiXMark,
  HiOutlineSparkles,
} from "react-icons/hi2";
import { Products } from "@sahil/lib/graphql/__generated__/graphql";
export const QuantityInput = () => {
  // TODO document why this arrow function is empty
  return (
    <div className="flex justify-between w-full">
      <div className="flex gap-2 items-center">
        <button
          className="btn btn-sm"
          onClick={() => {}}
          type="button"
          title="Decrement Item"
        >
          <HiMinus />
        </button>
        <input
          type="text"
          value="1"
          className="input input-sm input-bordered w-full max-w-xs font-bold text-center"
        />
        <button
          className="btn btn-sm btn-secondary"
          onClick={() => {}}
          type="button"
          title="Increase Item"
        >
          <HiPlus />
        </button>
      </div>
    </div>
  );
};
