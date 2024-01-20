import Head from "next/head";
import { z } from "zod";
import {
  PreviewSupplierInfo,
  SupplierBasicInfoForm,
  SupplierBusinessInfoForm,
  SupplierPreferencesForm,
  SupplierFormSteps,
} from "@/Suppliers/SupplierRegistrationForm";
import { useSupplierFormStore } from "@/hooks/useSupplierFormStore";
import { useParams, usePathname, useRouter } from "next/navigation";
import { INITIAL_STEP } from "@/Suppliers/constants";
import { JoinGrid } from "ui";
import { Card, IconButton } from "ui";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";

const StepsPaginator = () => {
  const { steps, goToStep, currentStep } = useSupplierFormStore()(
    (state) => state
  );
  const router = useRouter();
  const currentIndex = steps.indexOf(currentStep);

  const goToPrevStep = () => {
    goToStep("prev");
    router.push(`/suppliers/register/${steps[currentIndex - 1]}`);
  };
  const goToNextStep = () => {
    goToStep("next");
    router.push(`/suppliers/register/${steps[currentIndex + 1]}`);
  };

  return (
    <JoinGrid>
      <button
        className={`join-item btn btn-sm btn-ghost ${
          currentIndex <= 0 ? "btn-disabled" : null
        }`}
        onClick={goToPrevStep}
      >
        <HiArrowSmallLeft />
        Previous
      </button>
      <button
        className={`join-item btn btn-sm btn-secondary ${
          currentIndex === steps.length - 1 ? "btn-disabled" : null
        }`}
        onClick={goToNextStep}
      >
        Next
        <HiArrowSmallRight />
      </button>
    </JoinGrid>
  );
};

const headers = [
  {
    title: "Business Info",
    step: "business_info" as const,
    icon: HiArrowSmallRight,
    completed: false,
  },
  {
    title: "Contact Details",
    step: "contact_details" as const,
    icon: HiArrowSmallRight,
    completed: false,
  },
  {
    title: "Preferences",
    step: "preferences" as const,
    icon: HiArrowSmallRight,
    completed: false,
  },
  {
    title: "Summary",
    step: "preview" as const,
    icon: HiArrowSmallRight,
    completed: false,
  },
];

export default function SupplierRegistrationPage() {
  const { steps, currentStep, updateStepByIndex } = useSupplierFormStore()(
    (state) => state
  );
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentIndex = steps.indexOf(currentStep);

  const stepRouteSchema = z.object({
    step: z
      .array(z.enum(steps as readonly [string, ...string[]]))
      .default([INITIAL_STEP]),
    from: z.string().optional(),
  });

  const result = stepRouteSchema.safeParse(params);

  const onUpdateStepByIndex = (step: (typeof steps)[number]) => {
    const stepIndex = steps.indexOf(step);
    if (stepIndex === currentIndex) {
      return;
    }
    updateStepByIndex(stepIndex);
    router.push(`/suppliers/register/${steps[stepIndex]}`);
  };

  return (
    <>
      <Head>
        <title>Sahil - {headers[currentIndex].title}</title>
      </Head>
      <main className="min-h-screen flex items-start">
        <div className="space-y-4 w-full">
          <div className="bg-gray-100 p-4">
            <h1 className="text-2xl">Supplier Registration Form</h1>
          </div>
          <div className="flex">
            <div className="basis-1/5 p-4">
              <SupplierFormSteps
                headers={headers}
                currentStep={currentStep}
                onUpdateStepByIndex={onUpdateStepByIndex}
              />
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="grow space-y-4 p-4">
              <div className="flex justify-between items-center w-full">
                <div>
                  <h3 className="text-xl text-neutral-content">
                    Step {steps.indexOf(currentStep) + 1} out of {steps.length}
                  </h3>
                </div>
                <StepsPaginator />
              </div>
              <div className="divider"></div>
              <Card>
                <h2 className="card-title">{headers[currentIndex].title}</h2>
                {currentStep === "business_info" && <SupplierBasicInfoForm />}
                {currentStep === "contact_details" && (
                  <SupplierBusinessInfoForm />
                )}
                {currentStep === "preferences" && <SupplierPreferencesForm />}
                {currentStep === "preview" && <PreviewSupplierInfo />}
              </Card>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
