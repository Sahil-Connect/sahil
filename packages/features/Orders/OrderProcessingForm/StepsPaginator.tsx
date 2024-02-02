import { useOrderFormStore } from "@sahil/lib/hooks/useOrderFormStore";

type Props = {
  headers: any[];
};

export const StepsPaginator = ({ headers }: Props) => {
  const { steps, currentStep } = useOrderFormStore((state) => state);
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <h3 className="text-md">
            {headers[steps.indexOf(currentStep)].title}
          </h3>
        </div>
        <div>
          <div className="badge badge-accent badge-xl">
            {steps.indexOf(currentStep) + 1} out of {steps.length}
          </div>
        </div>
      </div>
    </>
  );
};
