import { StepItem } from "ui/components/MultiStepForm";
import { useCreateFormStore } from "./useCreateFormStore";
import {
  HiOutlineUser,
  HiOutlineShieldCheck,
  HiOutlineAdjustmentsHorizontal,
  HiOutlineCheckCircle,
} from "react-icons/hi2";

export const ON_BOARDING_FORM_HEADERS: Array<StepItem> = [
  {
    title: "User Details",
    step: "user_details",
    icon: HiOutlineUser,
    completed: false,
  },
  {
    title: "Role Details",
    step: "role_details",
    icon: HiOutlineShieldCheck,
    completed: false,
  },
  {
    title: "Preferences",
    step: "preference",
    icon: HiOutlineAdjustmentsHorizontal,
    completed: false,
  },
  {
    title: "Summary",
    step: "summary",
    icon: HiOutlineCheckCircle,
    completed: false,
  },
];

export const INITIAL_STEP = "user_details";

export const ON_BOARDING_STEPS = [
  "user_details",
  "role_details",
  "preference",
  "summary",
] as const;

// eslint-disable-next-line react-hooks/rules-of-hooks
export const useOnBoardingFormStore = useCreateFormStore(
  INITIAL_STEP,
  ON_BOARDING_STEPS
);
