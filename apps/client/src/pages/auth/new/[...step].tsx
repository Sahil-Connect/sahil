import { useSession } from "next-auth/react";
import {
  useOnBoardingFormStore,
  ON_BOARDING_FORM_HEADERS,
} from "@sahil/lib/hooks/formStores/useOnBoardingFormStore";
import { useRouter } from "next/router";
import {
  OnboardingFormStep,
  Preferences,
  RoleDetails,
  Summary,
  UserDetails,
} from "@sahil/features/auth/forms/onboarding";
import { StepsPaginator } from "ui";

const OnboardingPage = ({ providers }: any) => {
  const router = useRouter();
  const { currentStep, goToStep, steps, updateStepByIndex } =
    useOnBoardingFormStore((state) => state);
  const currentIndex = steps.indexOf(currentStep);

  const { data } = useSession();

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
    ON_BOARDING_FORM_HEADERS[currentIndex].completed = true;
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
            <UserDetails
              navigateToNextStep={navigateToNextStep}
              user={data?.user}
            />
          )}
          {currentStep === "role_details" && (
            <RoleDetails navigateToNextStep={navigateToNextStep} />
          )}
          {currentStep === "preferences" && (
            <Preferences navigateToNextStep={navigateToNextStep} />
          )}
          {currentStep === "summary" && <Summary />}
        </div>
      </div>
    </section>
  );
};

export default OnboardingPage;
