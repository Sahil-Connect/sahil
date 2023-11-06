import { createFormStore } from '@sahil/lib';

const INITIAL_STEP = 'business_info';

const steps = [
  'business_info',
  'address_info',
  'preferences',
  'summary',
] as const;

export const useBusinessFormStore = createFormStore(INITIAL_STEP, steps);
