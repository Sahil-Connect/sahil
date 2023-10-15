import {
  SupplierBasicInfoForm,
  SupplierBusinessInfoForm,
  SupplierPreferencesForm,
} from ".";
import { useSupplierFormStore } from "./store";
import { usePathname, useRouter } from "next/navigation";

export const RegisterNewSupplier = () => {
  const { step, steps, gotToStep, currentStep, updateStepData, data } = useSupplierFormStore((state) => state);
  const router = useRouter();
  const pathname = usePathname();
  const navigateToNextPage = (step) => {
    router.push(`/suppliers/new/${step.path}`);
    gotToStep(step);
  };

  const submitPageForm = (input) => {
    const targetStep = steps.find(step => step.id === currentStep.id);
    console.log(currentStep);
    console.log(targetStep);
    updateStepData(input);
    console.log(data);
    // navigateToNextPage();
    
    gotToStep(step);
    router.push(`/suppliers/new/${currentStep.path}`);
    // console.log(input);
  }

  return (
    <div className="space-y-2">
      <ul className="steps ">
        {steps?.map((step) => (
          <li
            key={step.id}
            className={`step ${step.active ? "step-primary" : null}`}
            onClick={() => navigateToNextPage(step)}
          >
            {step.label}
          </li>
        ))}
        <li data-content="✓" className="step">
          Done
        </li>
      </ul>
      <div className="w-96 ">
        {currentStep.label === "Business Info" ? <SupplierBasicInfoForm submitPageForm={submitPageForm} /> : null}
        {currentStep.label === "Contact Details" ? <SupplierBusinessInfoForm submitPageForm={submitPageForm} /> : null}
        {currentStep.label === "Preferences" ? <SupplierPreferencesForm submitPageForm={submitPageForm} /> : null}
      </div>
    </div>
  );
};
