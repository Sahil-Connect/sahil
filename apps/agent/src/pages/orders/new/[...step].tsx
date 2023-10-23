import Head from "next/head";
import { z } from "zod";
import { useOrderFormStore } from "@/components/Orders/OrderProcessingForm/useOrderFormStore";
import {
  OrderDetails,
  OrderSummary,
  PaymentDetails,
  ProductSelection,
} from "@/components/Orders/OrderProcessingForm";
import { useParams, usePathname, useRouter } from "next/navigation";

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
    },
    {
      title: "Product Selection",
      step: "product_selection",
    },
    {
      title: "Delivery Details",
      step: "delivery_details",
    },
    {
      title: "Payment Details",
      step: "payment_details",
    },
    {
      title: "Order Confirmation",
      step: "summary",
    },
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="flex gap-2 items-center">
        <h1 className="text-2xl">Place New Order</h1>
      </div>
      <div className="flex gap-2">
        <div className="basis-1/5">
          <ul className="steps steps-vertical ">
            {headers.map(({ step, title }, index) => (
              <li
                className={`step ${
                  title === "Product Selection" ? "step-secondary" : null
                }`}
                key={index}
                onClick={() => {}}
              >
                {title}
              </li>
            ))}
          </ul>
        </div>
        <div className="grow space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <p className="text-neutral-content">Step 2 of 5</p>
            </div>
            <div className="join grid grid-cols-2">
              <button className="join-item btn btn-sm">Prevous</button>
              <button className="join-item btn btn-sm btn-secondary">Next</button>
            </div>
          </div>
          <ProductSelection />
        </div>
      </div>
    </div>
  );
}
