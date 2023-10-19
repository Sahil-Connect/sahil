import {
  SupplierBasicInfoForm,
  SupplierBusinessInfoForm,
  SupplierPreferencesForm,
} from ".";
import { useSupplierFormStore } from "./useSupplierFormStore";
import { usePathname, useRouter } from "next/navigation";
import { useRegisterSupplier } from "@/hooks/suppliers";

const StepsPaginator = ({}) => {
  const { steps, nextStep, prevStep, currentStep } = useSupplierFormStore(
    (state) => state
  );
  const router = useRouter();

  const goToPrevStep = () => {
    prevStep();
    router.push(`/suppliers/new/${currentStep}`);
  };
  const goToNextStep = () => {
    nextStep();
    router.push(`/suppliers/new/${currentStep}`);
  };

  return (
    <div className="join grid grid-cols-2">
      <button
        className={`join-item btn btn-sm btn-ghost`}
        onClick={goToPrevStep}
      >
        Previous
      </button>
      <button
        className={`join-item btn btn-sm btn-secondary`}
        onClick={goToNextStep}
      >
        Next
      </button>
    </div>
  );
};

export const RegisterNewSupplier = () => {
  const { error, insertSupplier, loading } = useRegisterSupplier();
  const { steps, currentStep, formData } = useSupplierFormStore(
    (state) => state
  );

  const pathname = usePathname();

  const submitForm = () => {
    insertSupplier(formData);
  };

  const headers = [
    {
      title: "Business Info",
    },
    {
      title: "Contact Details",
    },
    {
      title: "Preferences",
    },
  ];

  return (
    <div className="flex gap-8">
      <div className="basis-2/5 space-y-4">
        <div className="flex justify-between items-center w-full">
          <div>
            <p>Step 1 out of 3</p>
          </div>
          <StepsPaginator />
        </div>
        <div className="card card-compact shadow">
          <div className="card-body">
            <h2 className="card-title">{headers[0].title}</h2>
            {currentStep === "business_info" ? <SupplierBasicInfoForm /> : null}
            {currentStep === "contact_details" ? (
              <SupplierBusinessInfoForm />
            ) : null}
            {currentStep === "preferences" ? <SupplierPreferencesForm /> : null}
          </div>
        </div>
      </div>

      <div className="basis-1/5">
        <ul className="steps steps-vertical ">
          {headers.map((step, index) => (
            <li className={`step`} key={index}>{step.title}</li>
          ))}
          <li className="step">Complete Registration</li>
        </ul>
      </div>
    </div>
  );
};
