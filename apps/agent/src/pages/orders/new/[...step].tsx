import Head from "next/head";
import { z } from "zod";
import { useOrderFormStore } from "@/hooks/useOrderFormStore";
import {
  DeliveryDetails,
  OrderDetails,
  OrderFormSteps,
  OrderSummary,
  PaymentDetails,
  ProductSelection,
  StepsPaginator,
} from "@/Orders/OrderProcessingForm";
import { useParams, usePathname, useRouter } from "next/navigation";
import {
  HiOutlineShoppingCart,
  HiOutlineBanknotes,
  HiOutlineTruck,
  HiOutlineCheckCircle,
  HiOutlineQueueList,
  HiCursorArrowRipple,
} from "react-icons/hi2";

export default function NewOrderPage() {
  const { currentStep, goToStep, steps, updateStepByIndex } = useOrderFormStore(
    (state) => state
  );
  const currentIndex = steps.indexOf(currentStep);
  const router = useRouter();

  const onUpdateStepByIndex = (step: (typeof steps)[number]) => {
    const stepIndex = steps.indexOf(step);
    if (stepIndex === currentIndex) {
      return;
    }
    updateStepByIndex(stepIndex);
    router.push(`/orders/new/${steps[stepIndex]}`);
  };

  const onPrevStep = () => {
    goToStep("prev");
    router.push(`/orders/new/${steps[currentIndex - 1]}`);
  };
  const onNextStep = () => {
    goToStep("next");
    router.push(`/orders/new/${steps[currentIndex + 1]}`);
  };

  const navigateToNextStep = (path: string) => {
    goToStep("next");
    router.push(`/orders/new/${path}`);
  };

  const headers = [
    {
      title: "Order Details",
      step: "order_details",
      icon: <HiOutlineQueueList />,
      completed: true,
    },
    {
      title: "Product Selection",
      step: "product_selection",
      icon: <HiCursorArrowRipple />,
      completed: false,
    },
    {
      title: "Delivery Details",
      step: "delivery_details",
      icon: <HiOutlineTruck />,
      completed: false,
    },
    {
      title: "Payment Details",
      step: "payment_details",
      icon: <HiOutlineBanknotes />,
      completed: false,
    },
    {
      title: "Order Confirmation",
      step: "summary",
      icon: <HiOutlineCheckCircle />,
      completed: false,
    },
  ];

  return (
    <main className="min-h-screen space-y-4">
      <div className="flex gap-2 justify-between items-center py-4 px-8 bg-base-200">
        <h1 className="text-2xl">Order Processing Form</h1>
        <div className="flex gap-2 items-center">
          <div className="indicator">
            <span className="indicator-item badge badge-accent">5</span>
            <button className="btn btn-sm" title="Shopping Cart" type="button">
              <HiOutlineShoppingCart />
            </button>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="basis-1/5 pl-4">
          <OrderFormSteps
            currentStep={currentStep}
            onUpdateStepByIndex={onUpdateStepByIndex}
            headers={headers}
          />
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="grow space-y-4 py-4 pr-4 basis-3/5">
          <StepsPaginator
            headers={headers}
            onPrevStep={onPrevStep}
            onNextStep={onNextStep}
          />
          {currentStep === "order_details" && (
            <OrderDetails navigateToNextStep={navigateToNextStep} />
          )}
          {currentStep === "product_selection" && (
            <ProductSelection navigateToNextStep={navigateToNextStep} />
          )}
          {currentStep === "delivery_details" && (
            <DeliveryDetails navigateToNextStep={navigateToNextStep} />
          )}
          {currentStep === "payment_details" && (
            <PaymentDetails navigateToNextStep={navigateToNextStep} />
          )}
          {currentStep === "summary" && <OrderSummary />}
        </div>
      </div>
    </main>
  );
}
