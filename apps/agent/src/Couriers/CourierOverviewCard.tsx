import { Avatar, Card } from "ui";
import Link from "next/link";
export const CourierOveriewCard = ({ courier }) => {
  return (
    <div className="basis-1/4 bg-slate-200">
      <Card>
        <Avatar src={courier.avatar} alt={courier.name} />
        <Link href={`/couriers/${courier.id}`}>
          <h3>{courier.name}</h3>
        </Link>
        <div className="bg-rose-500">
          <div>
            <h3>Honda Vitz</h3>
          </div>
        </div>
      </Card>
    </div>
  );
};
