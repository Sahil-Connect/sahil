import { INITIAL_STEP, steps } from "@sahil/constants";
import { useCreateFormStore } from "@sahil/lib";

// eslint-disable-next-line react-hooks/rules-of-hooks
export const useCourierFormStore = useCreateFormStore(INITIAL_STEP, steps);
