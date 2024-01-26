import { useOrderFormStore } from "@sahil/lib/hooks/useOrderFormStore";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";
import { JoinGrid } from "ui";
type Props = {
  headers: any[];
  onStepChange: (path: string, step) => void;
};

export const StepsPaginator = ({ headers, onStepChange }: Props) => {
  const { steps, currentStep } = useOrderFormStore((state) => state);
  const currentIndex = steps.indexOf(currentStep);
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <h3 className="text-xl">
            {headers[steps.indexOf(currentStep)].title}{" "}
            <span className="text-md text-neutral-content">
              {steps.indexOf(currentStep) + 1} out of {steps.length}
            </span>
          </h3>
        </div>
        <JoinGrid>
          <button
            className={`join-item btn btn-sm btn-ghost ${
              currentIndex <= 0 ? "btn-disabled" : null
            }`}
            onClick={() => onStepChange("orders/new", "prev")}
          >
            <HiArrowSmallLeft /> Previous
          </button>
          <button
            className={`join-item btn btn-sm btn-secondary ${
              currentIndex === steps.length - 1 ? "btn-disabled" : null
            }`}
            onClick={() => onStepChange("orders/new", "next")}
          >
            Next <HiArrowSmallRight />
          </button>
        </JoinGrid>
      </div>
    </>
  );
};
