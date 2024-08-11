import { useRouter } from "next/navigation";
import { useCourierFormStore } from "@sahil/lib/hooks/formStores/useCourierFormStore";
import { JoinGrid } from "ui";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";
import { StepDirection } from "ui/components/MultiStepForm";

export const CourierFormStepPaginator = () => {
  const { steps, goToStep, currentStep } = useCourierFormStore(
    (state) => state
  );
  const router = useRouter();
  const currentIndex = steps.indexOf(currentStep);

  const onStepChange = (direction: StepDirection) => {
    goToStep(direction);
    router.push(
      `/couriers/register/${
        direction === "prev" ? steps[currentIndex - 1] : steps[currentIndex + 1]
      }`
    );
  };

  return (
    <JoinGrid>
      <button
        className={`join-item btn btn-sm btn-ghost ${
          currentIndex <= 0 ? "btn-disabled" : null
        }`}
        onClick={() => onStepChange("prev")}
      >
        <HiArrowSmallLeft />
        Previous
      </button>
      <button
        className={`join-item btn btn-sm btn-secondary ${
          currentIndex === steps.length - 1 ? "btn-disabled" : null
        }`}
        onClick={() => onStepChange("next")}
      >
        Next
        <HiArrowSmallRight />
      </button>
    </JoinGrid>
  );
};
