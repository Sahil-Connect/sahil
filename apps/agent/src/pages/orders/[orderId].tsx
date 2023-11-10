import { Card, Icon, Tabs } from "ui";
import { formatDateTime } from "@sahil/lib/dates";
import { formatCurrency } from "@sahil/lib";
import {
  CourierOverview,
  OrderItems,
  OrderOverview,
  OrderPreferences,
  OrderProgress,
  OrderStatusSteps,
  OrderClient,
} from "@/Orders";
import {
  HiOutlineAdjustmentsVertical,
  HiOutlineExclamationCircle,
  HiOutlineBeaker,
  HiOutlineClock,
  HiOutlinePrinter,
  HiOutlineClipboardDocumentList,
  HiOutlineDocumentCheck,
  HiOutlineHandRaised,
  HiCalendarDays,
  HiOutlineUser,
  HiOutlineBanknotes,
  HiOutlineMapPin,
  HiOutlineFlag,
} from "react-icons/hi2";

import { useFetchOrderByPK } from "@/hooks/orders";
import { useRouter } from "next/router";

export default function OrderPage() {
  const router = useRouter();
  const { orderId } = router.query;
  const { data: order, error, loading } = useFetchOrderByPK(orderId as string);
  console.log(error);
  if (error) return <p>error</p>;
  if (loading) return <p>loading</p>;
  return (
    <section>
      <div className="flex">
        <div className="grow space-y-2">
          <OrderClient businessId="e87924e8-69e4-4171-bd89-0c8963e03d08" />
          <div className="stats shadow w-full">
            <div className="stat">
              <div className="stat-title">Orders Made</div>
              <div className="stat-value">17</div>
              <div className="stat-figure">
                <Icon icon={HiOutlineClipboardDocumentList} />
              </div>
            </div>

            <div className="stat">
              <div className="stat-title">Fulfilled Orders</div>
              <div className="stat-value">15</div>
              <div className="stat-figure">
                <Icon icon={HiOutlineDocumentCheck} />
              </div>
            </div>
          </div>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="basis-4/6 space-y-2">
          <OrderOverview order={order} />
          <Tabs />
          {true ? (
            <>
              <Card title="Order Details" titleSize="sm">
                <div className="space-y-4">
                  
                  <div className="flex gap-8 items-center">
                    <div className="flex gap-2 items-center">
                      <span className="p-2 shadow rounded-lg w-fit">
                        <HiOutlineMapPin />
                      </span>
                      <p>{order?.origin}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className="p-2 shadow rounded-lg w-fit">
                        <HiOutlineFlag />
                      </span>
                      <p>{order?.destination}</p>
                    </div>
                  </div>
                  <div className="flex gap-8 items-center">
                    <div className="flex gap-4 items-center">
                      <span className="p-2 border text-secondary rounded-lg w-fit">
                        <HiCalendarDays />
                      </span>
                      <div>
                        <p className="text-gray-400">Order Date</p>
                        <h3 className="text-md">
                          {formatDateTime(order?.created_at)}
                        </h3>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center">
                      <span className="p-2 border text-secondary rounded-lg w-fit">
                        <HiOutlineHandRaised />
                      </span>
                      <div>
                        <p className="text-gray-400">Status</p>
                        <h3 className="text-md">{order?.status}</h3>
                      </div>
                    </div>

                    <div className="flex gap-4 items-center">
                      <span className="p-2 border text-secondary rounded-lg w-fit">
                        <HiOutlineMapPin />
                      </span>
                      <div>
                        <p className="text-gray-400">Delivery Type</p>
                        <h3 className="text-md">Pickup Location</h3>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center">
                      <span className="p-2 border text-secondary rounded-lg w-fit">
                        <HiOutlineBanknotes />
                      </span>
                      <div>
                        <p className="text-gray-400">Payment Method</p>
                        <h3 className="text-md">Cash on Delivery</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
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
