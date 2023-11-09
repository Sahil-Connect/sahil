import { Step, Steps } from "ui";
import { StepDirection, StepItem } from "ui/components/MultiStepForm";
type Props = {
  currentStep: string;
  headers: StepItem[];
  onUpdateStepByIndex: (step: StepDirection) => void;
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
