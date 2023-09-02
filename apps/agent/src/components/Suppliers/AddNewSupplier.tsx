import { SupplierBasicInfoForm, SupplierBusinessInfoForm, SupplierPreferencesForm } from "./RegistrationWizard";
export const RegisterNewSupplier = () => {
  return (
    <div className="space-y-4">
      <ul className="steps w-full">
        <li className="step step-primary">Step 1</li>
        <li className="step">Step 3</li>
        <li className="step">Step 4</li>
        <li className="step"></li>
      </ul>
      <div className="w-full">
        <SupplierPreferencesForm />
      </div>
    </div>
  );
};
