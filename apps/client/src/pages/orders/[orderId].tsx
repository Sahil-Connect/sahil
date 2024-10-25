import {
  CourierOverview,
  OrderItems,
  OrderOverview,
  OrderPreferences,
  OrderClient,
  OrderDetails,
} from "@sahil/features/Orders";
import { Tabs } from "ui";

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
        <div className="grow space-y-2">
          <OrderClient businessId={order?.customerId} />
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="basis-4/6 space-y-2">
          <OrderOverview order={order} />
          {true ? (
            <>
              <OrderDetails order={order} />
              <OrderItems items={order?.order_items} />
              <CourierOverview order={order} />
            </>
          ) : (
            <OrderPreferences order={order} />
          )}
        </div>
      </div>
    </section>
  );
}
