import {
  HiOutlineCheckCircle,
  HiOutlineMinusCircle,
  HiOutlineXCircle
} from 'react-icons/hi2';

type Status = 'completed' | 'pending' | 'cancelled';

type TimelineItem = {
  prefix?: string;
  label: string;
  description: string;
  status: Status;
};

type Props = {
  items: TimelineItem[];
};

const statusConfig = {
  completed: { icon: <HiOutlineCheckCircle />, color: 'success' },
  pending: { icon: <HiOutlineMinusCircle />, color: 'base-300' },
  cancelled: { icon: <HiOutlineXCircle />, color: 'red-500' },
};

export const Timeline = ({ items }: Props) => {
  return (
    <ul className='timeline timeline-vertical timeline-snap-icon w-fit'>
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          item={item}
          isFirst={index === 0}
          isLast={index === items.length - 1}
          nextItemStatus={
            index < items.length - 1 ? items[index + 1].status : undefined
          }
        />
      ))}
    </ul>
  );
};

type TimelineItemProps = {
  item: TimelineItem;
  isFirst: boolean;
  isLast: boolean;
  nextItemStatus?: Status;
};

const TimelineItem = ({
  item: { prefix, label, description, status },
  isFirst,
  isLast,
  nextItemStatus,
}: TimelineItemProps) => {
  const { icon, color } = statusConfig[status];
  const nextColor = nextItemStatus ? statusConfig[nextItemStatus].color : color;

  return (
    <li>
      {!isFirst && <hr className={`bg-${color}`} />}
      <div className='timeline-start timeline-box'>{prefix}</div>
      <div className={`timeline-middle text-xl text-${color}`}>{icon}</div>
      <div className='timeline-end space-y-1' style={{ gridRowStart: 2 }}>
        <div className={`badge py-2 text-${color}`}>
          {label}
        </div> 
        <p className='text-sm'>{description}</p>
      </div>
      {!isLast && <hr className={`bg-${nextColor}`} />}
    </li>
  );
};
