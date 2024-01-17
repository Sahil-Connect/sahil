import { Step, Steps } from "ui";
import { StepDirection, StepItem } from "ui/components/MultiStepForm";
import { INITIAL_STEP, steps } from "@/Orders/constants";

type Props = {
  currentStep: string;
  headers: StepItem[];
  onUpdateStepByIndex: (step: (typeof steps)[number]) => void;
};

export const OrderFormSteps = ({
  currentStep,
  headers,
  onUpdateStepByIndex,
}: Props) => {
  return (
    <Steps
      direction="vertical"
      steps={headers}
      onUpdateStepByIndex={onUpdateStepByIndex}
      currentStep={currentStep}
    />
  );
};
