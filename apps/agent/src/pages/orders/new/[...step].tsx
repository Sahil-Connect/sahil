import Head from "next/head";
import { z } from "zod";
import { useOrderFormStore } from "@/components/Orders/OrderProcessingForm/useOrderFormStore";
import {
  DeliveryDetails,
  OrderDetails,
  OrderSummary,
  PaymentDetails,
  ProductSelection,
} from "@/components/Orders/OrderProcessingForm";
import { useParams, usePathname, useRouter } from "next/navigation";
import {
  HiArrowLeft,
  HiArrowRight,
  HiOutlineShoppingBag,
  HiOutlineCreditCard,
  HiOutlineTruck,
  HiOutlineCheckCircle,
  HiOutlineQueueList,
} from "react-icons/hi2";

const StepsPaginator = () => {
  const { steps, goToStep, currentStep } = useOrderFormStore((state) => state);
  const router = useRouter();
  const currentIndex = steps.indexOf(currentStep);

  const goToPrevStep = () => {
    goToStep("prev");
    router.push(`/orders/new/${steps[currentIndex - 1]}`);
  };
  const goToNextStep = () => {
    goToStep("next");
    router.push(`/orders/new/${steps[currentIndex + 1]}`);
  };

  return (
    <div className="join grid grid-cols-2">
      <button
        className="join-item btn btn-outline btn-sm shadow"
        onClick={goToPrevStep}
      >
        <HiArrowLeft /> Previous
      </button>
      <button
        className="join-item btn btn-sm shadow- btn-secondary"
        onClick={goToNextStep}
      >
        Next <HiArrowRight />
      </button>
    </div>
  );
};

export default function NewOrderPage() {
  const { steps, currentStep, updateStepByIndex } = useOrderFormStore(
    (state) => state
  );
  const currentIndex = steps.indexOf(currentStep);
  const router = useRouter();

  const handleUpdateStepByIndex = (step: (typeof steps)[number]) => {
    const stepIndex = steps.indexOf(step);
    if (stepIndex === currentIndex) {
      return;
    }
    updateStepByIndex(stepIndex);
    router.push(`/orders/new/${steps[stepIndex]}`);
  };

  const headers = [
    {
      title: "Order Details",
      step: "order_details",
      icon: <HiOutlineQueueList />,
    },
    {
      title: "Product Selection",
      step: "product_selection",
      icon: <HiOutlineShoppingBag />,
    },
    {
      title: "Delivery Details",
      step: "delivery_details",
      icon: <HiOutlineTruck />,
    },
    {
      title: "Payment Details",
      step: "payment_details",
      icon: <HiOutlineCreditCard />,
    },
    {
      title: "Order Confirmation",
      step: "summary",
      icon: <HiOutlineCheckCircle />,
    },
  ];

  console.log(currentStep);

  return (
    <div className="min-h-screen space-y-4">
      <div className="flex gap-2 items-center p-4 bg-base-200">
        <h1 className="text-2xl">Place New Order</h1>
      </div>
      <div className="flex">
        <div className="basis-1/5 px-2">
          <ul className="steps steps-vertical w-full ">
            {headers.map(({ icon, step, title }, index) => (
              <li
                className={`step ${
                  title === "Delivery Details" ? "step-primary" : null
                }`}
                key={index}
                onClick={() => handleUpdateStepByIndex(step)}
              >
                <div
                  className={`flex px-2 py-1 rounded w-full gap-2 items-center ${
                    title === "Delivery Details"
                      ? "bg-primary-content text-primary-focus"
                      : null
                  }`}
                >
                  {icon} {title}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="grow space-y-2 p-4">
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <h3 className="text-xl text-neutral-content">Step 3 of 5</h3>
            </div>
            <StepsPaginator />
          </div>
          <div className="divider"></div>
          {currentStep === "order_details" && <OrderDetails />}
          {currentStep === "product_selection" && <ProductSelection />}
          {currentStep === "delivery_details" && <DeliveryDetails />}
          {currentStep === "payment_details" && <PaymentDetails />}
          {currentStep === "summary" && <OrderSummary />}
        </div>
      </div>
    </div>
  );
}
