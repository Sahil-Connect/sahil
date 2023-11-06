import { Avatar, Card } from 'ui';
import Link from 'next/link';

type SahilCourier = {
  id: string;
  avatar: string;
  name: string;
  gender: string;
  DOB: Date;
  email: string;
  phoneNumber: number;
  rides: [
    {
      type: 'Car' | 'Bike';
      status: 'Active' | 'Inactive' | 'Maintenance';
    }
  ];
};

type CourierOverviewCardProps = {
  courier: SahilCourier;
};

export const CourierOverviewCard = ({ courier }: CourierOverviewCardProps) => {
  return (
    <Card>
      <Avatar src={courier.avatar} alt={courier.name} />
      <Link href={`/couriers/${courier.id}`} className='text-lg font-semibold'>
        <h3>{courier.name}</h3>
      </Link>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center'>
          <div>
            <p>{courier.gender}</p>
          </div>
          <div>
            <p>{courier.gender}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};
