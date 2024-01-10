import { useFetchCouriers } from '@/hooks/couriers';
import { CourierOverviewCard } from './CourierOverviewCard';
import { List, ListHeader, ListErrorState } from 'ui';

export const ListCouriers = () => {
  const { data: couriers, error, loading, couriersCount } = useFetchCouriers();

  if (error) {
    return (
      <ListErrorState
        heading='Unable to load products...'
        message="Products aren't loading due to a technical problem on our side. Please
      try again."
      />
    );
  }

  console.log(couriersCount);
  return (
    <section className='space-y-4'>
      <ListHeader
        size={couriersCount?.count}
        sizeLabel='Couriers'
        title='Couriers'
      />
      <List
        data={couriers}
        loading={loading}
        renderItem={(courier: any) => (
          <CourierOverviewCard key={courier.id} courier={courier} />
        )}
      />
    </section>
  );
};
