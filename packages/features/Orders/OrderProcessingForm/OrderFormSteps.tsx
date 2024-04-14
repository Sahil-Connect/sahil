import { Step, Steps } from "ui";
import { StepDirection, StepItem } from "ui/components/MultiStepForm";
export const INITIAL_STEP = "order_details";
export const steps = [
  "order_details",
  "product_selection",
  "delivery_details",
  "payment_details",
  "summary",
] as const;

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
      direction="horizontal"
      steps={headers}
      onUpdateStepByIndex={onUpdateStepByIndex}
      currentStep={currentStep}
    />
  );
};
