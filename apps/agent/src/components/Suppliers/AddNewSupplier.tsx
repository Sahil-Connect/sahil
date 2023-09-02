import { useRouter } from "next/router";
import { SupplierBasicInfoForm, SupplierBusinessInfoForm, SupplierPreferencesForm } from "./RegistrationWizard";
import { useSupplierFormStore } from "./RegistrationWizard/store";

export const RegisterNewSupplier = () => {
  const router = useRouter();
  const step = useSupplierFormStore((state) => state.step);
  return (
    <div className="space-y-2">
      <div>
      <ul className="steps ">
        <li className="step step-primary">Business Info {step}</li>
        <li className="step">Contact Details</li>
        <li className="step">Preferences</li>
        <li data-content="✓" className="step">Done</li>
      </ul>
      </div>
      <div className="w-96 ">
        {step === 1 ?<SupplierBasicInfoForm /> : null }
        {step === 2 ? <SupplierBusinessInfoForm /> : null}
        {step === 3 ? <SupplierPreferencesForm /> : null}
      </div>
    </div>
  );
};
