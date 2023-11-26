import { BusinessProfileOverview, BusinessOrderHistory } from '@/Businesses';
import { useGetAccountBalance } from '@/hooks/accounts';
import { useFetchBusinessByPK } from '@/hooks/businesses';

export default function Account() {
  const {
    data: business,
    error,
    loading,
  } = useFetchBusinessByPK('e87924e8-69e4-4171-bd89-0c8963e03d08');

  if (error) {
    console.log(error);
    return <p>Failed</p>;
  }

  return (
    <div className='space-y-4'>
      <div className='flex flex-col gap-4 lg:flex-row'>
        <div className='grow mb-4 lg:mb-0'>
          <BusinessProfileOverview business={business} />
        </div>
        <div className='basis-4/5 space-y-2'>
          <MomoAccountDetails />
          <BusinessOrderHistory />
        </div>
      </div>
    </div>
  );
}

const MomoAccountDetails = () => {
  const { data, loading, refetch } = useGetAccountBalance();
  if (loading) return <p>Loading...</p>;
  if (data === null) {
    refetch();
  }
  console.log(data);
  return (
    <div>
      <p>Account Details</p>
    </div>
  );
};
