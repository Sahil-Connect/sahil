import { parseISO, format } from "date-fns";
import { Card } from "ui";
import { OrderStatusSteps } from "@/Orders";
import { HiOutlineClock } from "react-icons/hi2";

const OrderItem = ({ title }) => {
  return (
    <div>
      <p>{title}</p>
    </div>
  )
}

const items = [
  {
    id: 1,
    title: "Hello"
  }
]

export default function OrderPage() {
  const date = parseISO("2023-08-12T20:54:29.03552+00:00");
  const formattedDate = format(date, "MMMM d");
  return (
    <section>
      <div className="flex">
        <div className="grow">
          <OrderStatusSteps orderId={"hello"} />
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="basis-4/5 space-y-2">
          <Card title="Order ID: S1" titleSize="sm" height="h-fit">
            <ul className="space-y-2">
              {
                items.map(item => <OrderItem key={item.id} item={{...item}} />)
              }
            </ul>
            <div className="flex gap-2">
              <div className="badge gap-2"><HiOutlineClock /> Cash</div>
              <div className="badge gap-2"><HiOutlineClock /> Pickup Location</div>
            </div>
            <div className="card-actions">
              <button className="btn btn-sm btn-primary"><HiOutlineClock /> Order Again</button>
            </div>
          </Card>
          <Card title="Courier">
          <div className="flex gap-2 items-center">
            <div className="avatar placeholder">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                <span>MX</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl">Ladu Lumori</h3>
              <p>+256787024989</p>
            </div>
          </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
