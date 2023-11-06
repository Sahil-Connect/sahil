import { useRouter } from 'next/navigation';
import { useCourierFormStore } from '@/hooks/useCourierFormStore';
import { JoinGrid } from 'ui';

export const CourierFormStepPaginator = () => {
  const { steps, goToStep, currentStep } = useCourierFormStore(
    (state) => state
  );
  const router = useRouter();
  const currentIndex = steps.indexOf(currentStep);

  const goToPrevStep = () => {
    goToStep('prev');
    router.push(`/couriers/register/${steps[currentIndex - 1]}`);
  };
  const goToNextStep = () => {
    goToStep('next');
    router.push(`/couriers/register/${steps[currentIndex + 1]}`);
  };

  return (
    <JoinGrid>
      <button
        className={`join-item btn btn-sm btn-ghost ${
          currentIndex <= 0 ? 'btn-disabled' : null
        }`}
        onClick={goToPrevStep}
      >
        Previous
      </button>
      <button
        className={`join-item btn btn-sm btn-secondary ${
          currentIndex === steps.length - 1 ? 'btn-disabled' : null
        }`}
        onClick={goToNextStep}
      >
        Next
      </button>
    </JoinGrid>
  );
};
