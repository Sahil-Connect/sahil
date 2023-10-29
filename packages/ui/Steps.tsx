import { Children, FC, ReactNode } from "react";
export type StepsProps = {
  children: ReactNode | ReactNode[];
  direction?: string;
  steps?: any[];
};

type StepProps = {
  children: ReactNode | ReactNode[];
};

export const Step: FC<StepProps> = ({ children }) => {
  return <li>{children}</li>;
};

export const Steps: FC<StepsProps> = ({ children, direction, steps }) => {
  return (
    <ul className={`steps steps-${direction} w-full`}>
      {children}
    </ul>
  );
};
