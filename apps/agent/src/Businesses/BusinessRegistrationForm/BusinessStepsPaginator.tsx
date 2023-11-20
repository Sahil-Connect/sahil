import { useBusinessFormStore } from "@/hooks/useBusinessFormStore";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";
import { JoinGrid } from "ui";

type Props = {
  headers: any[];
  onPrevStep: () => void;
  onNextStep: () => void;
  totalSteps?: number;
};

export const BusinessStepsPaginator = ({
  headers,
  onNextStep,
  onPrevStep,
}: Props) => {
  const { steps, currentStep } = useBusinessFormStore((state) => state);
  const currentIndex = steps.indexOf(currentStep);
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <h3 className="text-xl">
            {headers[steps.indexOf(currentStep)].title}{" "}
            <div className="badge badge-accent">
              {steps.indexOf(currentStep) + 1} out of {steps.length}
            </div>
          </h3>
        </div>
        <JoinGrid>
          <button
            onClick={onPrevStep}
            className={`join-item btn btn-sm btn-ghost ${
              currentIndex <= 0 ? "btn-disabled" : null
            }`}
          >
            <HiArrowSmallLeft /> Previous
          </button>
          <button
            className={`join-item btn btn-sm btn-secondary ${
              currentIndex === steps.length - 1 ? "btn-disabled" : null
            }`}
            onClick={onNextStep}
          >
            Next <HiArrowSmallRight />
          </button>
        </JoinGrid>
      </div>
    </>
  );
};
