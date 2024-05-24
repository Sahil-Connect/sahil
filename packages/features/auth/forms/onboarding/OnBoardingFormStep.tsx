import { Steps } from "ui";
import { StepItem } from "ui/components/MultiStepForm";
import { ON_BOARDING_STEPS } from "@sahil/lib/hooks/formStores/useOnBoardingFormStore";

type Props = {
  currentStep: string;
  headers: StepItem[];
  onUpdateStepByIndex: (step: (typeof ON_BOARDING_STEPS)[number]) => void;
};

export const OnboardingFormStep = ({
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
