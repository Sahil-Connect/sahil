import { FC } from "react";

type Props = {
  currentStep: string;
  headers: any[];
  steps: readonly string[];
};

export const StepsPaginator: FC<Props> = ({ currentStep, headers, steps }) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <h3 className="text-md">
            {headers[steps.indexOf(currentStep)].title}
          </h3>
        </div>
        <div>
          <div className="badge">
            {steps.indexOf(currentStep) + 1} out of {steps.length}
          </div>
        </div>
      </div>
    </>
  );
};
