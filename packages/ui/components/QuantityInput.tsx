import { useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi2";

type QuantityInputProps = {
  quantity?: number;
  onConfirm: (quantity: number) => void;
  onCancel: () => void;
};

export const QuantityInput = ({
  quantity: initial = 1,
  onConfirm,
  onCancel,
}: QuantityInputProps) => {
  const [quantity, setQuantity] = useState<number>(initial);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(quantity - 1);
  };

  const handleConfirm = () => {
    onConfirm(quantity);
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className="w-full space-y-2">
      <div className="flex gap-2 items-center w-full">
        <button
          className="btn btn-sm text-xs"
          onClick={handleDecrement}
          type="button"
          title="Decrement Item"
        >
          <HiMinus />
        </button>
        <input
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          type="number"
          className="input input-sm input-bordered w-full max-w-xs font-bold text-center"
        />
        <button
          className="btn btn-sm btn-secondary text-xs"
          onClick={handleIncrement}
          type="button"
          title="Increase Item"
        >
          <HiPlus />
        </button>
      </div>
      <div className="flex gap-2 items-center w-full">
        <button
          className="flex-1 btn btn-sm btn-ghost"
          onClick={handleCancel}
          type="button"
          title="Cancel"
        >
          Cancel
        </button>
        <button
          className="flex-1 btn btn-sm btn-primary"
          onClick={handleConfirm}
          type="button"
          title="Cancel"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};
