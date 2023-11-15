import { Steps } from "ui";
type Props = {
  currentStep: string;
  headers: any[];
  onUpdateStepByIndex: (step: any) => void;
};

// Create a generic steps component similar to <List />
export const SupplierFormSteps = ({
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
