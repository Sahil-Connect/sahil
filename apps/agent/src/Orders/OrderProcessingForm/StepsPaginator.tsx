import { useOrderFormStore } from "@/hooks/useOrderFormStore";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import { JoinGrid } from "ui";
type Props = {
  headers: any[];
  onStepChange: (path: string, step) => void;
};

export const StepsPaginator = ({ headers, onStepChange }: Props) => {
  const { steps, currentStep } = useOrderFormStore((state) => state);
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
            className="join-item btn btn-sm"
            onClick={() => onStepChange("orders/new", "prev")}
          >
            <HiArrowLeft /> Previous
          </button>
          <button
            className="join-item btn btn-sm btn-neutral"
            onClick={() => onStepChange("orders/new", "next")}
          >
            Next <HiArrowRight />
          </button>
        </JoinGrid>
      </div>
    </>
  );
};
