import Head from "next/head";
import { z } from "zod";
import { useOrderFormStore } from "@/components/Orders/OrderProcessingForm/useOrderFormStore";
import { PaymentDetails } from "@/components/Orders/OrderProcessingForm";
import { useParams, usePathname, useRouter } from "next/navigation";

export default function NewOrderPage() {
  const { steps, currentStep, updateStepByIndex } = useOrderFormStore((state) => state);
  const currentIndex = steps.indexOf(currentStep);
  const router = useRouter();

  const handleUpdateStepByIndex = (step: (typeof steps)[number]) => {
    const stepIndex = steps.indexOf(step);
    if(stepIndex === currentIndex) {
      return;
    }
    updateStepByIndex(stepIndex);
    router.push(`/suppliers/new/${steps[stepIndex]}`);
  };

  const headers = [
    {
      title: "Order Details",
      step: "business_info",
    },
    {
      title: "Product Selection",
      step: "contact_details",
    },
    {
      title: "Delivery Details",
      step: "preferences",
    },
    {
      title: "Payment Details",
      step: "preferences",
    },
    {
      title: "Order Confirmation",
      step: "preview",
    },
  ];

  return (
    <div className="min-h-screen p-8">
      <h3>Place New Order</h3>
      <div className="flex gap-8">
        <div className="basis-1/5">
          <ul className="steps steps-vertical ">
            {headers.map(({ step, title }, index) => (
              <li className={`step`} key={index} onClick={() => {}}>
                {title}
              </li>
            ))}
          </ul>
        </div>
        <div className="grow">
        <div className="card card-compact shadow">
            <div className="card-body">
            <PaymentDetails />
            </div>
        </div>
        </div>
      </div>
    </div>
  );
}
