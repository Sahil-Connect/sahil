import { Steps } from "ui";
type Props = {
  currentStep: string;
  headers: any[];
  onUpdateStepByIndex: (step: any) => void;
};


export const BusinessFormSteps = ({
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
