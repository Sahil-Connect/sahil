import Head from "next/head";
import { z } from "zod";
import { useOrderFormStore } from "@/components/Orders/OrderProcessingForm/useOrderFormStore";
import { PaymentDetails } from "@/components/Orders/OrderProcessingForm";

export default function NewOrderPage() {
  const { steps } = useOrderFormStore((state) => state);

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
        <div className="card card-compact shadow">
            <div className="card-body">
            <PaymentDetails />
            </div>
        </div>
      </div>
    </div>
  );
}
