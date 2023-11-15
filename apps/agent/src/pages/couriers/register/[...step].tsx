import Head from 'next/head';
import { z } from 'zod';
import {
  CourierPersonalInfo,
  CourierContactDetails,
  CourierFormStepPaginator,
  CourierVehicleInfo,
  CourierFormSteps
} from '@/Couriers/CourierRegistrationForm';
import { useParams, useRouter } from 'next/navigation';
import { INITIAL_STEP } from '@/Couriers/constants';
import { useCourierFormStore } from '@/hooks/useCourierFormStore';
import { CourierFormSummary } from '@/Couriers/CourierRegistrationForm/CourierFormSummary';
import {
  HiOutlineCheckCircle,
  HiOutlineQueueList,
  HiOutlineMapPin,
  HiOutlineHeart,
} from "react-icons/hi2";
import { Card, IconButton } from "ui";

  const headers = [
    {
      title: 'Personal Information',
      step: 'personal_info' as const,
      icon: HiOutlineCheckCircle,
      completed: false,
    },
    {
      title: 'Contact Details',
      step: 'contact_details' as const,
      icon: HiOutlineCheckCircle,
      completed: false,
    },
    {
      title: 'Vehicle Information',
      step: 'vehicle_info' as const,
      icon: HiOutlineCheckCircle,
      completed: false,
    },
    {
      title: 'Summary',
      step: 'summary' as const,
      icon: HiOutlineCheckCircle,
      completed: false,
    },
  ];

export default function CourierRegistrationPage() {
  const { steps, currentStep, goToStep, updateStepByIndex } = useCourierFormStore(
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
    router.push(`/couriers/register/${steps[stepIndex]}`);
  };

  return (
    <>
      <Head>
        <title>Sahil - {headers[currentIndex]?.title}</title>
      </Head>
      <section>
        <div className='space-y-4 w-full'>
          <div className='bg-gray-100 p-4'>
            <h1 className='text-2xl'>Courier Registration Form</h1>
          </div>
          <div className='flex'>
            <div className='basis-1/5'>
            <CourierFormSteps
            headers={headers}
            currentStep={currentStep}
            onUpdateStepByIndex={onUpdateStepByIndex}
          />
            </div>
            <div className='divider divider-horizontal'></div>
            <div className='grow space-y-4'>
              <div className='flex justify-between items-center w-full'>
                <div>
                  <h3 className='text-xl text-neutral-content'>
                    Step {steps.indexOf(currentStep) + 1} out of {steps.length}
                  </h3>
                </div>
                <CourierFormStepPaginator />
              </div>
              <div className='divider'></div>
              <Card>
              <div className='card-body'>
                  <h2 className='card-title'>{headers[currentIndex]?.title}</h2>
                  {currentStep === 'personal_info' && <CourierPersonalInfo />}
                  {currentStep === 'contact_details' && (
                    <CourierContactDetails />
                  )}
                  {currentStep === 'vehicle_info' && <CourierVehicleInfo />}
                  {currentStep === 'summary' && <CourierFormSummary />}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
