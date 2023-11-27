import { BusinessProfileOverview, BusinessOrderHistory } from '@/Businesses';
import { useGetAccountBalance, useGetMomoAccountInfo } from '@/hooks/accounts';
import { useFetchBusinessByPK } from '@/hooks/businesses';
import { Card, JoinGrid } from 'ui';
import { useState } from 'react';
import {
  HiArrowSmallLeft,
  HiArrowSmallRight,
  HiOutlineMinusCircle,
  HiOutlineXCircle,
  HiOutlineCheckCircle,
} from 'react-icons/hi2';
import { formatDateTime } from '@sahil/lib/dates';
import { formatCurrency } from '@sahil/lib';

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
          <MomoAccountDetails />
        </div>
        <div className='basis-4/5 space-y-2'>
          <BusinessOrderHistory />
          <TransactionsHistory />
        </div>
      </div>
    </div>
  );
}

const MomoAccountDetails = () => {
  return (
    <Card>
      <h3 className='text-xl'>Momo Account Details</h3>
      <MomoUserInfo />
      <MomoAccountBalance />
    </Card>
  );
};

const MomoUserInfo = () => {
  const { data, loading, refetch } = useGetMomoAccountInfo();
  const [isRefetching, setIsRefetching] = useState(false);

  const handleRefetch = async () => {
    if (!isRefetching) {
      setIsRefetching(true);
      await refetch().then(() => setIsRefetching(false));
    }
  };
  return (
    <Card>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-2'>
        <div>
          <p className='text-gray-400 text-sm'>Given Name</p>
          {loading ? (
            <div className='w-12 h-4 bg-base-200 animate-pulse' />
          ) : (
            <p>{data?.given_name}</p>
          )}
        </div>
        <div>
          <p className='text-gray-400 text-sm'>Family Name</p>
          {loading ? (
            <div className='w-12 h-4 bg-base-200 animate-pulse' />
          ) : (
            <p>{data?.family_name}</p>
          )}
        </div>
        <div>
          <p className='text-gray-400 text-sm'>Gender</p>
          {loading ? (
            <div className='w-12 h-4 bg-base-200 animate-pulse' />
          ) : (
            <p>{data?.gender}</p>
          )}
        </div>
        <div>
          <p className='text-gray-400 text-sm'>Status</p>
          {loading ? (
            <div className='w-12 h-4 bg-base-200 animate-pulse' />
          ) : (
            <p>{data?.status || 'Active'}</p>
          )}
        </div>
      </div>
      {data === null && (
        <div className='card-actions flex-col'>
          <p>
            {isRefetching
              ? 'Refetching account info...'
              : "Couldn't fetch account info."}
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

const TransactionsHistory = () => {
  const transactions = [
    {
      amount: 1000,
      date: new Date('2023-11-06T20:23:31.37043+00:00'),
      status: 'Pending',
      method: 'Cash',
    },
    {
      amount: 2500,
      date: new Date('2023-11-06T21:17:40.540348+00:00'),
      status: 'Confirmed',
      method: 'Momo',
    },
    {
      amount: 10000,
      date: new Date('2023-11-21T20:10:35.299422+00:00'),
      status: 'Canceled',
      method: 'Momo',
    },
    {
      amount: 75000,
      date: new Date('2023-11-06T20:23:31.37043+00:00'),
      status: 'Confirmed',
      method: 'Cash',
    },
  ];
  return (
    <div className='bg-gray-100 space-y-2 grow p-4 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='text-xl'>Latest Transactions</h3>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex gap-2 items-center'>
          <div className='badge badge-accent'>4 Transactions</div>
        </div>
        <div>
          <JoinGrid>
            <button
              className='join-item btn btn-sm'
              title='Left'
              onClick={() => {}}
            >
              <HiArrowSmallLeft />
            </button>
            <button
              className='join-item btn btn-sm'
              title='Right'
              onClick={() => {}}
            >
              <HiArrowSmallRight />
            </button>
          </JoinGrid>
        </div>
      </div>
      <div className={`grid grid-cols-auto-250 xl:grid-cols-4 gap-2`}>
        {transactions.map((item, index) => (
          <TransactionCard key={index} transaction={item} />
        ))}
      </div>
    </div>
  );
};

type cardProps = {
  transaction: {
    amount: number;
    date: Date;
    status: string;
    method: string;
  };
};

const TransactionCard = ({ transaction }: cardProps) => {
  const cardIcon = (status: string) => {
    switch (status) {
      case 'Pending':
        return <HiOutlineMinusCircle className='text-3xl ' />;
        break;
      case 'Canceled':
        return <HiOutlineXCircle className='text-4xl text-error' />;
        break;
      case 'Confirmed':
        return <HiOutlineCheckCircle className='text-3xl text-success' />;
    }
  };

  return (
    <Card>
      <div className='flex items-center gap-4'>
        <div className='grid place-items-center'>
          {cardIcon(transaction.status)}
        </div>
        <div className='w-full space-y-2'>
          <time className='text-sm'>
            {formatDateTime(transaction.date.toISOString())}
          </time>
          <div className='flex justify-between items-center'>
            <div>
              <p className='text-gray-400 text-sm'>Method</p>
              <p>{transaction.method}</p>
            </div>
            <div>
              <p className='text-gray-400 text-sm'>Amount</p>
              <p>{formatCurrency(transaction.amount)}</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
