import Image from "next/image";
import { Inter } from "next/font/google";
import { useFetchCouriers } from "@sahil/lib/hooks/couriers";
import { LatestDeliveries } from "@sahil/features/Couriers/LatestDeliveries";
import { IncomingDeliveryRequest } from "@sahil/features/Couriers/IncomingDeliveryRequest";

const request = {
  id: 1,
  name: "BBQ Pizza",
};

export default function Home() {
  const { data, error, loading } = useFetchCouriers();
  return (
    <section>
      <IncomingDeliveryRequest request={request} />
    </section>
  );
}
