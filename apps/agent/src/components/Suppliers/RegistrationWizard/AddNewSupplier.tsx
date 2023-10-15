import {
  SupplierBasicInfoForm,
  SupplierBusinessInfoForm,
  SupplierPreferencesForm,
} from ".";
import { useSupplierFormStore } from "./useSupplierFormStore";
import { usePathname, useRouter } from "next/navigation";
import { useRegisterSupplier } from "@/hooks/suppliers";

export const RegisterNewSupplier = () => {
  const { error, insertSupplier, loading } = useRegisterSupplier();
  const { steps, nextStep, prevStep, currentStep, formData } =
    useSupplierFormStore((state) => state);
  const router = useRouter();
  const pathname = usePathname();

  const navigateToNextPage = (step) => {
    router.push(`/suppliers/new/${step.path}`);
    nextStep(step);
  };

  const submitForm = () => {
    insertSupplier(formData);
  };

  console.log(currentStep);

  console.log(formData);

  return (
    <div className="flex gap-8">
      <div className="basis-2/5 space-y-4">
        <div className="flex justify-between items-start w-full">
          <h1 className="text-2xl">{currentStep.label}</h1>
          <div>
            <div className="join grid grid-cols-2">
              <button
                className="join-item btn btn-sm btn-outline btn-disabled"
                onClick={() => prevStep()}
              >
                Previous
              </button>
              <button
                className="join-item btn btn-sm btn-outline"
                onClick={() => nextStep()}
              >
                Next
              </button>
            </div>
          </div>
        </div>
        <div className="card card-compact shadow">
          <div className="card-body">
            {currentStep.label === "Business Info" ? (
              <SupplierBasicInfoForm />
            ) : null}
            {currentStep.label === "Contact Details" ? (
              <SupplierBusinessInfoForm />
            ) : null}
            {currentStep.label === "Preferences" ? (
              <SupplierPreferencesForm />
            ) : null}
          </div>
        </div>
      </div>

      <div className="basis-1/5">
        <ul className="steps steps-vertical ">
          <li className="step step-secondary">Business Info</li>
          <li className="step">Contact Details</li>
          <li className="step">Preferences</li>
          <li className="step">Complete Registration</li>
        </ul>
      </div>
    </div>
  );
};
