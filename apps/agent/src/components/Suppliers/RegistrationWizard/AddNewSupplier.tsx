import { useRouter } from "next/router";
import { SupplierBasicInfoForm, SupplierBusinessInfoForm, SupplierPreferencesForm } from ".";
import { useSupplierFormStore } from "./store";

const Steps = ({ steps }) => {
  const INITIAL_STEP = "Business Info";
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
  const { step, steps } = useSupplierFormStore((state) => state);

  return (
    <div className="space-y-2">
      <Steps steps={steps} />
      <div className="w-96 ">
        {step === "Business Info" ?<SupplierBasicInfoForm /> : null }
        {step === "Contact Details" ? <SupplierBusinessInfoForm /> : null}
        {step === "Preferences" ? <SupplierPreferencesForm /> : null}
      </div>
    </div>
  );
};
