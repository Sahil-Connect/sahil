import {
  CourierOverview,
  OrderItems,
  OrderOverview,
  OrderPreferences,
  OrderClient,
  OrderDetails,
  OrderProgress,
} from "@sahil/features/Orders";
import { Card, Tabs, Timeline } from "ui";

export type TabValue = "info" | "preferences" | "progress";


import { useFetchOrderByPK } from "@/hooks/orders";
import { useRouter } from "next/router";
import { useSyncQueryWithStore, INITIAL_TAB, tabs } from "@sahil/lib/hooks/utilities/useQueryStore";

import {
  HiOutlineAdjustmentsVertical,
  HiOutlineExclamationCircle,
  HiArrowsRightLeft,
} from "react-icons/hi2";

export const OrderTabs = [
  {
    label: "Oder Info",
    value: "info",
    icon: <HiOutlineExclamationCircle />,
  },
  {
    label: "Order Progress",
    value: "progress",
    icon: <HiArrowsRightLeft />,
  },
  {
    label: "Order Preferences",
    value: "preferences",
    icon: <HiOutlineAdjustmentsVertical />,
  },
];

export default function OrderPage() {
  const router = useRouter();
  const { orderId } = router.query;
  const { data: order, error, loading } = useFetchOrderByPK(orderId as string);

  const { currentTab, handleChange } = useSyncQueryWithStore();

  const handleTabClick = (value: TabValue) => {
    handleChange(value);
  };

  if (error) return <p>error</p>;
  if (loading) return <p>loading</p>;

  return (
    <section>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="basis-4/6 space-y-2">
          <OrderOverview order={order} />
          
          <Tabs
          /* @ts-ignore */
            items={OrderTabs}
            onTabClick={handleTabClick}
            currentTab={currentTab}
          />
          <div>
            {currentTab === "info" && (
              <Card>
                <div className="space-y-4">
                  <OrderDetails order={order} />
                  <OrderItems items={order?.order_items} />
                  <CourierOverview order={order} />
                </div>
              </Card>
            )}
            {currentTab === "preferences" && <OrderPreferences order={order} />}
            {currentTab === "progress" && <OrderProgress />}
          </div>
        </div>
        <div className="grow space-y-2">
          <Timeline />
        </div>
      </div>
    </section>
  );
}
