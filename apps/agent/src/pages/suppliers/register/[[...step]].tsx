import Head from "next/head";
import { z } from "zod";
import {
  PreviewSupplierInfo,
  SupplierBasicInfoForm,
  SupplierBusinessInfoForm,
  SupplierPreferencesForm,
  SupplierFormSteps,
} from "@sahil/features/Suppliers/SupplierRegistrationForm";
import { useSupplierFormStore } from "@sahil/lib/hooks/formStores/useSupplierFormStore";
import { useParams, usePathname, useRouter } from "next/navigation";
import { INITIAL_STEP } from "@sahil/features/Suppliers/constants";
import { Card, StepsPaginator } from "ui";
import { HiArrowSmallRight } from "react-icons/hi2";

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
  const { steps, currentStep, updateStepByIndex } = useSupplierFormStore(
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
              <StepsPaginator
                headers={headers}
                currentStep={currentStep}
                steps={steps}
              />
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
