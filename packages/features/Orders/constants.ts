export const INITIAL_STEP = "order_details";
export const steps = [
  "order_details",
  "product_selection",
  "delivery_details",
  "payment_details",
  "summary",
] as const;

import {
  HiOutlineBell,
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiXMark,
  HiOutlineCreditCard,
  HiOutlineBanknotes,
  HiArrowSmallRight,
  HiOutlinePrinter,
  HiOutlineBuildingOffice,
  HiOutlineMapPin,
} from "react-icons/hi2";

export const paymentMethods = [
  { id: "momo", label: "Momo Pay", icon: HiOutlineCreditCard, value: "momo" },
  {
    id: "cash",
    label: "Cash On Delivery",
    icon: HiOutlineBanknotes,
    value: "cash",
  },
];

export const deliveryMethods = [
  {
    id: "sahilCentre",
    label: "Sahil Centre",
    value: "sahilCentre",
    icon: HiOutlineBuildingOffice,
  },
  {
    id: "directDelivery",
    label: "Direct Delivery",
    value: "directDelivery",
    icon: HiOutlineMapPin,
  },
];

export const notificationOptions = [
  {
    id: "30min",
    label: "30 minutes before",
    value: "30min",
    icon: HiOutlineBell,
  },
  {
    id: "dayBefore",
    label: "A day before",
    value: "dayBefore",
    icon: HiOutlineBell,
  },
];

export const contactMethodOptions = [
  { id: "email", label: "Email", value: "email", icon: HiOutlineEnvelope },
  { id: "phone", label: "Phone", value: "phone", icon: HiOutlinePhone },
];
