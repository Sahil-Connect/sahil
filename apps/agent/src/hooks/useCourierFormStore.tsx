import { INITIAL_STEP, steps } from "@/Couriers/constants";
import { useCreateFormStore } from "@sahil/lib";

export const useCourierFormStore = useCreateFormStore(INITIAL_STEP, steps);
