import { BusinessProfileOverview, BusinessOrderHistory } from '@/Businesses';
import { useGetAccountBalance } from '@/hooks/accounts';
import { useFetchBusinessByPK } from '@/hooks/businesses';
import { Card } from 'ui';
import { useState } from 'react';

export default function Account() {
  const {
    data: business,
    error,
    loading,
  } = useFetchBusinessByPK('e87924e8-69e4-4171-bd89-0c8963e03d08');

  if (error) {
    return <p>An error occurred while fetching you account details!</p>;
  }
  return (
    <div className='space-y-4'>
      <div className='flex flex-col gap-1 lg:gap-4 lg:flex-row'>
        <div className='grow mb-4 lg:mb-0 space-y-2'>
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
  return (
    <div className='bg-gray-100 p-4 rounded-xl mb-2 space-y-2'>
      <h3 className='text-xl'>Momo Account Details</h3>
      <MomoUserInfo />
      <MomoAccountBalance />
    </div>
  );
};

const MomoUserInfo = () => {
  // const { data, loading, refetch } = useGetAccountBalance();
  // if (loading) return <p>Loading...</p>;
  // if (data === null) {
  //   refetch();
  // }
  // console.log(data);
  return (
    <Card>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-2'>
        <div>
          <p className='text-gray-400 text-sm'>Given Name</p>
          <p>Radisson Blu</p>
        </div>
        <div>
          <p className='text-gray-400 text-sm'>Family Name</p>
          <p>Keji</p>
        </div>
        <div>
          <p className='text-gray-400 text-sm'>Gender</p>
          <p>Male</p>
        </div>
        <div>
          <p className='text-gray-400 text-sm'>Status</p>
          <p>Active</p>
        </div>
      </div>
    </Card>
  );
};

const MomoAccountBalance = () => {
  const { data, loading, refetch } = useGetAccountBalance();
  const [isRefetching, setIsRefetching] = useState(false);

  const handleRefetch = async () => {
    if (!isRefetching) {
      setIsRefetching(true);
      await refetch().then(() => setIsRefetching(false));
    }
  };

  return (
    <Card>
      <div className='grid grid-cols-2 gap-2'>
        <div>
          <p className='text-gray-400 text-sm'>Currency</p>
          {loading ? (
            <div className='w-12 h-4 bg-base-200 animate-pulse' />
          ) : (
            <p>{data?.currency}</p>
          )}
        </div>
        <div>
          <p className='text-gray-400 text-sm'>Balance</p>
          {loading ? (
            <div className='w-12 h-4 bg-base-200 animate-pulse' />
          ) : (
            <p>{data?.availableBalance}</p>
          )}
        </div>
      </div>
      {data === null && (
        <div className='card-actions flex-col'>
          <p>
            {isRefetching
              ? 'Refetching balance...'
              : "Couldn't fetch account balance."}
          </p>
          <button
            onClick={handleRefetch}
            className={`btn btn-sm btn-secondary ${
              isRefetching && 'animate-pulse'
            }`}
          >
            Reload
          </button>
        </div>
      )}
    </Card>
  );
};
