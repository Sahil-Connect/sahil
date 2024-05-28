import {
  CourierOverview,
  OrderItems,
  OrderOverview,
  OrderPreferences,
  OrderClient,
  OrderDetails,
  OrderProgress,
  OrderPaymentInformation,
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
    <section className="space-y-4">
      <div className="flex gap-4">
        <div className="basis-4/6 space-y-2">
          <OrderOverview order={order} />
          <Tabs />
          {true ? (
            <>
              <OrderDetails order={order} />
              <OrderItems items={order?.order_items} />
            </>
          ) : (
            <OrderPreferences order={order} />
          )}
        </div>
        <div className="grow space-y-2">
          <OrderProgress />
          <CourierOverview order={order} />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex-1">
          <OrderClient businessId={order?.customerId} />
        </div>
        <div className="flex-1">
          <OrderPaymentInformation />
        </div>
      </div>
    </section>
  );
}
