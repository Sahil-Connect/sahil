import { FC, useState } from "react";
import { StepDirection, StepItem } from "ui/components/MultiStepForm";
import { Icon } from "ui";

export type StepsProps = {
  direction?: string;
  steps?: StepItem[];
  onUpdateStepByIndex: (step: StepDirection) => void;
  currentStep: string;
};

type StepProps = StepItem & {
  classes: string;
  onClick: (step: StepDirection) => void;
  currentStep: string;
};

export const Step: FC<StepProps> = ({
  icon,
  currentStep,
  title,
  classes,
  onClick,
  step,
}) => {
  return (
    <li className={`step ${classes}`} onClick={() => onClick(step)}>
      <div
        className={`flex px-2 py-1 rounded w-full gap-2 items-center ${
          currentStep === step ? "bg-primary-content text-primary-focus" : null
        } hover:bg-gray-100 cursor-pointer`}
      >
        {icon && <Icon icon={icon} />} {title}
      </div>
    </li>
  );
};

export const Steps: FC<StepsProps> = ({
  currentStep,
  direction,
  steps,
  onUpdateStepByIndex,
}) => {
  return (
    <ul className={`steps steps-${direction} w-full`}>
      {steps.map(({ completed, icon, step, title }, index) => (
        <Step
          classes={`${currentStep === step ? "step-primary" : null} ${
            completed ? "step-success" : null
          }`}
          key={index}
          onClick={onUpdateStepByIndex}
          step={step}
          icon={icon}
          title={title}
          currentStep={currentStep}
        />
      ))}
    </ul>
  );
};
