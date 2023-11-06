import Head from 'next/head';
import { z } from 'zod';
import {
  CourierPersonalInfo,
  CourierContactDetails,
  CourierFormStepPaginator,
  CourierVehicleInfo,
} from '@/Couriers/CourierRegistrationForm';
import { useParams, useRouter } from 'next/navigation';
import { INITIAL_STEP } from '@/Couriers/constants';
import { useCourierFormStore } from '@/hooks/useCourierFormStore';
import { CourierFormSummary } from '@/Couriers/CourierRegistrationForm/CourierFormSummary';

export default function CourierRegistrationPage() {
  const { steps, currentStep, updateStepByIndex } = useCourierFormStore(
    (state) => state
  );
  const router = useRouter();
  const params = useParams();
  const currentIndex = steps.indexOf(currentStep);

  const stepRouteSchema = z.object({
    step: z
      .array(z.enum(steps as readonly [string, ...string[]]))
      .default([INITIAL_STEP]),
    from: z.string().optional(),
  });

  const result = stepRouteSchema.safeParse(params);

  const onUpdateStepByIndex = (step: (typeof steps)[number]) => {
    const stepIndex = steps.indexOf(step);
    if (stepIndex === currentIndex) {
      return;
    }
    updateStepByIndex(stepIndex);
    router.push(`/courier/new/${steps[stepIndex]}`);
  };

  const headers = [
    {
      title: 'Personal Information',
      step: 'personal_info' as const,
    },
    {
      title: 'Contact Details',
      step: 'contact_details' as const,
    },
    {
      title: 'Vehicle Information',
      step: 'vehicle_info' as const,
    },
    {
      title: 'Summary',
      step: 'summary' as const,
    },
  ];

  return (
    <>
      <Head>
        <title>Sahil - {headers[currentIndex]?.title}</title>
      </Head>
      <main className='min-h-screen flex items-start'>
        <div className='space-y-4 w-full'>
          <div className='bg-base-200 p-4'>
            <h1 className='text-2xl'>Courier Registration Form</h1>
          </div>
          <div className='flex'>
            <div className='basis-1/5 p-4'>
              <ul className='steps steps-vertical '>
                {headers.map(({ step, title }, index) => (
                  <li
                    className={`step ${
                      step === currentStep ? 'step-secondary' : null
                    }`}
                    key={index}
                    onClick={() => onUpdateStepByIndex(step)}
                  >
                    {title}
                  </li>
                ))}
              </ul>
            </div>
            <div className='divider divider-horizontal'></div>
            <div className='grow space-y-4 p-4'>
              <div className='flex justify-between items-center w-full'>
                <div>
                  <h3 className='text-xl text-neutral-content'>
                    Step {steps.indexOf(currentStep) + 1} out of {steps.length}
                  </h3>
                </div>
                <CourierFormStepPaginator />
              </div>
              <div className='divider'></div>
              <div className='card card-compact shadow'>
                <div className='card-body'>
                  <h2 className='card-title'>{headers[currentIndex]?.title}</h2>
                  {currentStep === 'personal_info' && <CourierPersonalInfo />}
                  {currentStep === 'contact_details' && (
                    <CourierContactDetails />
                  )}
                  {currentStep === 'vehicle_info' && <CourierVehicleInfo />}
                  {currentStep === 'summary' && <CourierFormSummary />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
