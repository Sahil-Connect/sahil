import { INITIAL_STEP } from '../Suppliers/constants';
import { createFormStore } from '@sahil/lib';

const steps = [
  'business_info',
  'contact_details',
  'preferences',
  'preview',
] as const;

export const useSupplierFormStore = createFormStore(INITIAL_STEP, steps);
