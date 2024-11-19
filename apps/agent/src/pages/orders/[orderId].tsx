import {
  CourierOverview,
  OrderItems,
  OrderOverview,
  OrderPreferences,
  OrderDetails,
  OrderProgress,
} from "@sahil/features/Orders";
import { Card, Tabs } from "ui";
import { UpdateOrderStatusForm } from "@sahil/features/Orders";

export type TabValue = "info" | "preferences" | "progress";

import { useFetchOrderByPK } from "@/hooks/orders";
import { useRouter } from "next/router";
import { useSyncQueryWithStore } from "@sahil/lib/hooks/utilities/useQueryStore";

import {
  HiOutlineAdjustmentsVertical,
  HiOutlineExclamationCircle,
  HiArrowsRightLeft,
} from "react-icons/hi2";

type TabItem = {
  icon?: React.ReactNode;
  label: string;
  value: TabValue;
};

export const OrderTabs: TabItem[] = [
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
    <section className="space-y-4">
      <OrderOverview order={order} />
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="w-full xl:basis-2/3 space-y-4">
          <Tabs
            items={OrderTabs}
            onTabClick={handleTabClick}
            currentTab={currentTab}
            className="overflow-x-auto"
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
            {currentTab === "progress" && (
              <div>
                <UpdateOrderStatusForm order={order} />
              </div>
            )}
          </div>
        </div>
        <div className="w-full xl:basis-1/3 space-y-4">
          <OrderProgress order={order} />
        </div>
      </div>
    </section>
  );
}
