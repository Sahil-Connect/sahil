import Head from "next/head";
import { z } from "zod";
import { useOrderFormStore } from "@/hooks/useOrderFormStore";
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
  HiOutlineShoppingCart,
  HiOutlineBanknotes,
  HiOutlineTruck,
  HiOutlineCheckCircle,
  HiOutlineQueueList,
  HiCursorArrowRipple,
  HiOutlineBuildingStorefront,
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
        className="join-item btn btn-sm"
        onClick={goToPrevStep}
      >
        <HiArrowLeft /> Previous
      </button>
      <button
        className="join-item btn btn-sm btn-secondary"
        onClick={goToNextStep}
      >
        Next <HiArrowRight />
      </button>
    </div>
  );
};

const OrderSideOverview = () => {
  return (
    <div className="basis-1/5 space-y-2 pr-4">
      <h3 className="text-xl">Order: ED-15</h3>
      <ul className="space-y-4">
        <li>
          <div className="flex items-center gap-2">
            <span className="shadow p-2 rounded-md">
              <HiOutlineBuildingStorefront />
            </span>
            Notos Bar & Grill
          </div>
        </li>
        <li>
          <div className="flex items-center gap-2">
            <span className="shadow p-2 rounded-md">
              <HiOutlineBuildingStorefront />
            </span>
            Pick Up Location
          </div>
        </li>
        <li>
          <div className="flex items-center gap-2">
            <span className="shadow p-2 rounded-md">
              <HiOutlineBuildingStorefront />
            </span>
            Scheduled Delivery
          </div>
        </li>
      </ul>
      <div className="divider"></div>
      <ul className="space-y-4">
        <li className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="shadow p-2 rounded-md">
              <HiOutlineBuildingStorefront />
            </span>
            Total Items
          </div>
          <p>5</p>
        </li>
        <li className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="shadow p-2 rounded-md">
              <HiOutlineBuildingStorefront />
            </span>
            Total Price
          </div>
          <p>5000 SSP</p>
        </li>
        <li>Processed by: Emmanuel Gatwech</li>
        <li>Wednesday 24 Oct</li>
      </ul>
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
      completed: false
    },
    {
      title: "Payment Details",
      step: "payment_details",
      icon: <HiOutlineBanknotes />,
      completed: false
    },
    {
      title: "Order Confirmation",
      step: "summary",
      icon: <HiOutlineCheckCircle />,
      completed: false
    },
  ];

  return (
    <div className="min-h-screen space-y-4">
      <div className="flex gap-2 justify-between items-center py-4 px-8 bg-base-200">
        <h1 className="text-2xl">Order Processing Form</h1>
        <div className="flex gap-2 items-center">
          <div className="indicator">
            <span className="indicator-item badge badge-accent">5</span>
            <button className="btn btn-sm" title="Shopping Cart" type="button">
              <HiOutlineShoppingCart />{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="basis-1/5 pl-4">
          <ul className="steps steps-vertical w-full">
            {headers.map(({ completed, icon, step, title }, index) => (
              <li
                className={`step ${
                  currentStep === step ? "step-primary" : null
                } ${completed ? "step-success" : null }`}
                key={index}
                onClick={() => handleUpdateStepByIndex(step)}
                data-content={`${completed ? "✓" : index + 1} `}
              >
                <div
                  className={`flex px-2 py-1 rounded w-full gap-2 items-center ${
                    currentStep === step
                      ? "bg-primary-content text-primary-focus"
                      : null
                  } hover:bg-slate-100 cursor-pointer`}
                >
                  {icon} {title}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="grow space-y-4 py-4 pr-4  basis-3/5">
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <h3 className="text-xl">
                {headers[steps.indexOf(currentStep)].title}{" "}
                <span className="text-md text-neutral-content">
                  {steps.indexOf(currentStep) + 1} out of {steps.length}
                </span>
              </h3>
            </div>
            <StepsPaginator />
          </div>
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
