import { INITIAL_STEP, steps } from '@/Couriers/constants';
import { createFormStore } from '@sahil/lib';

export const useCourierFormStore = createFormStore(INITIAL_STEP, steps);
