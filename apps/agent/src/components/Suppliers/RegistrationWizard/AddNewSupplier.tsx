import { useRouter } from "next/router";
import { SupplierBasicInfoForm, SupplierBusinessInfoForm, SupplierPreferencesForm } from ".";
import { useSupplierFormStore } from "./store";

const Steps = () => {
  const { steps } = useSupplierFormStore((state) => state);
  return (
    <ul className="steps ">
    {
      steps?.map(step => <li key={step.id} className={`step ${step.active ? "step-primary" : null }`}>{step.label}</li>)
    }
    <li data-content="✓" className="step">Done</li>
  </ul>
  )
}


export const RegisterNewSupplier = () => {
  const router = useRouter();
  const { step } = useSupplierFormStore((state) => state);

  return (
    <div className="space-y-2">
      <Steps />
      <div className="w-96 ">
        {step === 1 ?<SupplierBasicInfoForm /> : null }
        {step === 2 ? <SupplierBusinessInfoForm /> : null}
        {step === 3 ? <SupplierPreferencesForm /> : null}
      </div>
    </div>
  );
};
