import Image from "next/image";
import { Inter } from "next/font/google";
import { useFetchCouriers } from "@sahil/lib/hooks/couriers";
import { LatestDeliveries } from "@sahil/features/Couriers/LatestDeliveries";
import { IncomingDeliveryRequest } from "@sahil/features/Couriers/IncomingDeliveryRequest";
import { PhoneNumberInput } from "@sahil/features/auth/PhoneNumberInput";
import { VerificationCodeInput } from "@sahil/features/auth/VerificationCodeInput";

const request = {
  id: 1,
  name: "BBQ Pizza",
};

export default function Home() {
  return (
    <section>
      <VerificationCodeInput />
    </section>
  );
}
