import {
  CourierOverview,
  OrderItems,
  OrderOverview,
  OrderProgress,
  OrderStatusSteps,
} from "@/Orders";

import { useFetchOrderByPK } from "@/hooks/orders";
import { useRouter } from "next/router";

export default function OrderPage() {
  const router = useRouter();
  const { orderId } = router.query;
  const { data: order, error, loading } = useFetchOrderByPK(orderId as string);
  if (error) return <p>error</p>;
  if (loading) return <p>loading</p>;
  return (
    <section>
      <div className="flex">
        <div className="grow">
          <OrderStatusSteps orderId={orderId} />
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="basis-4/5 space-y-2">
          <OrderOverview order={order} />
          <OrderItems items={order?.order_items} />
          <OrderProgress />
          <CourierOverview />
        </div>
      </div>
    </section>
  );
}
