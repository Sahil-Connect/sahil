import Head from "next/head";
import { z } from "zod";
import { useBusinessFormStore } from "@/hooks/useBusinessFormStore";
import { useParams, usePathname, useRouter } from "next/navigation";
import {
  AddressInfo,
  BusinessInfo,
  BusinessInfoSummary,
  BusinessFormSteps,
  BusinessStepsPaginator,
} from "@/Businesses/BusinessRegistrationForm";
import {
  HiOutlineCheckCircle,
  HiOutlineQueueList,
  HiOutlineMapPin,
  HiOutlineHeart,
} from "react-icons/hi2";

export default function BusinessRegistrationPage() {
  const { currentStep, goToStep, steps, updateStepByIndex } =
    useBusinessFormStore((state) => state);
  const currentIndex = steps.indexOf(currentStep);
  const router = useRouter();

  const onUpdateStepByIndex = (step: (typeof steps)[number]) => {
    const stepIndex = steps.indexOf(step);
    if (stepIndex === currentIndex) {
      return;
    }
    updateStepByIndex(stepIndex);
    router.push(`/businesses/register/${steps[stepIndex]}`);
  };
  const onPrevStep = () => {
    goToStep("prev");
    router.push(`/businesses/register/${steps[currentIndex - 1]}`);
  };
  const onNextStep = () => {
    goToStep("next");
    router.push(`/businesses/register/${steps[currentIndex + 1]}`);
  };

  const navigateToNextStep = (path: string) => {
    goToStep("next");
    router.push(`/businesses/register/${path}`);
  };
  const headers = [
    {
      title: "Business Information",
      step: "business_info",
      icon: <HiOutlineQueueList />,
      completed: false,
    },
    {
      title: "Address Information",
      step: "address_info",
      icon: <HiOutlineMapPin />,
      completed: false,
    },
    {
      title: "Preferences",
      step: "preferences",
      icon: <HiOutlineHeart />,
      completed: false,
    },
    {
      title: "Summary",
      step: "summary",
      icon: <HiOutlineCheckCircle />,
      completed: false,
    },
  ];
  return (
    <section className="min-h-screen space-y-4">
      <div className="flex gap-2 justify-between items-center py-4 px-8 bg-base-200">
        <h1 className="text-2xl">Register New Business</h1>
      </div>
      <div className="flex">
        <div className="basis-1/5 pl-4">
          <BusinessFormSteps
            currentStep={currentStep}
            onUpdateStepByIndex={onUpdateStepByIndex}
            headers={headers}
          />
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="grow space-y-4 py-4 pr-4 basis-3/5">
          <BusinessStepsPaginator
            headers={headers}
            onPrevStep={onPrevStep}
            onNextStep={onNextStep}
          />
          {currentStep === "business_info" && (
            <BusinessInfo navigateToNextStep={navigateToNextStep} />
          )}
          {currentStep === "address_info" && (
            <AddressInfo navigateToNextStep={navigateToNextStep} />
          )}
          {currentStep === "summary" && (
            <BusinessInfoSummary navigateToNextStep={navigateToNextStep} />
          )}
        </div>
      </div>
    </section>
  );
}
