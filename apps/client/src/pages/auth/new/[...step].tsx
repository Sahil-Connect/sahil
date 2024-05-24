import type { NextPage } from "next";
import { useRegisterUserAction } from "@sahil/lib/hooks/users";
import { useSession } from "next-auth/react";
import {
  useOnBoardingFormStore,
  ON_BOARDING_FORM_HEADERS,
} from "@sahil/lib/hooks/formStores/useOnBoardingFormStore";
import { useRouter } from "next/router";
import {
  OnboardingFormStep,
  UserDetails,
} from "@sahil/features/auth/forms/onboarding";
import { StepsPaginator } from "ui";

const OnboardingPage = ({ providers }: any) => {
  const { currentStep, goToStep, steps, updateStepByIndex } =
    useOnBoardingFormStore((state) => state);
  const currentIndex = steps.indexOf(currentStep);
  const router = useRouter();

  const onUpdateStepByIndex = (step: (typeof steps)[number]) => {
    const stepIndex = steps.indexOf(step);
    if (stepIndex === currentIndex) {
      return;
    }
    updateStepByIndex(stepIndex);
    router.push(`/auth/new/${steps[stepIndex]}`);
  };

  const navigateToNextStep = (path: string) => {
    goToStep("next");
    router.push(`/auth/new/${path}`);
  };

  return (
    <section className="space-y-4">
      <div className="space-y-4">
        <div className="basis-1/5 bg-base-100 p-4 border">
          <OnboardingFormStep
            currentStep={currentStep}
            onUpdateStepByIndex={onUpdateStepByIndex}
            headers={ON_BOARDING_FORM_HEADERS}
          />
        </div>
        <div className="grow space-y-4">
          <StepsPaginator
            headers={ON_BOARDING_FORM_HEADERS}
            currentStep={currentStep}
            steps={steps}
          />
          {currentStep === "user_details" && (
            <UserDetails navigateToNextStep={navigateToNextStep} />
          )}
          {/* {currentStep === "product_selection" && (
          <ProductSelection navigateToNextStep={navigateToNextStep} />
        )}
        {currentStep === "delivery_details" && (
          <DeliveryDetails navigateToNextStep={navigateToNextStep} />
        )}
        {currentStep === "payment_details" && (
          <PaymentDetails navigateToNextStep={navigateToNextStep} />
        )}
        {currentStep === "summary" && <OrderSummary />} */}
        </div>
      </div>
    </section>
  );
};

export default OnboardingPage;
