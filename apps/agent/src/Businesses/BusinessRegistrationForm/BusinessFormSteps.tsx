import { Steps } from "ui";
type Props = {
  currentStep: string;
  headers: any[];
  onUpdateStepByIndex: (step: any) => void;
};

// Create a generic steps component similar to <List />
export const BusinessFormSteps = ({
  currentStep,
  headers,
  onUpdateStepByIndex,
}: Props) => {
  return (
    <Steps direction="vertical">
      {headers.map(({ completed, icon, step, title }, index) => (
        <li
          className={`step ${currentStep === step ? "step-primary" : null} ${
            completed ? "step-success" : null
          }`}
          key={index}
          onClick={() => onUpdateStepByIndex(step)}
          data-content={`${completed ? "✓" : index + 1} `}
        >
          <div
            className={`flex px-2 py-1 rounded w-full gap-2 items-center ${
              currentStep === step
                ? "bg-primary-content text-primary-focus"
                : null
            } hover:bg-gray-100 cursor-pointer`}
          >
            {icon} {title}
          </div>
        </li>
      ))}
    </Steps>
  );
};
