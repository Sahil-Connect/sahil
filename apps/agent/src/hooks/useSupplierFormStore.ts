import { INITIAL_STEP } from '../Suppliers/constants';
import { useCreateFormStore } from '@sahil/lib';

const steps = [
  'business_info',
  'contact_details',
  'preferences',
  'preview',
] as const;

export const useSupplierFormStore = useCreateFormStore(INITIAL_STEP, steps);
