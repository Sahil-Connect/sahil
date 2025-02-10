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
  HiExclamationTriangle,
} from "react-icons/hi2";

type TabItem = {
  icon?: React.ReactNode;
  label: string;
  value: TabValue;
};

export const OrderTabs: TabItem[] = [
  {
    label: "Order Info",
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

const LoadingSkeleton = () => (
  <div className="animate-pulse space-y-4">
    <div className="h-24 bg-gray-200 rounded-lg"/>
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="w-full xl:basis-2/3 space-y-4">
        <div className="h-12 bg-gray-200 rounded-lg"/>
        <Card>
          <div className="space-y-4">
            <div className="h-32 bg-gray-200 rounded"/>
            <div className="h-48 bg-gray-200 rounded"/>
          </div>
        </Card>
      </div>
      <div className="w-full xl:basis-1/3 space-y-4">
        <div className="h-64 bg-gray-200 rounded-lg"/>
        <div className="h-48 bg-gray-200 rounded-lg"/>
      </div>
    </div>
  </div>
);

const ErrorState = ({ message }: { message: string }) => (
  <Card className="p-8">
    <div className="text-center space-y-4">
      <HiExclamationTriangle className="w-12 h-12 text-red-500 mx-auto"/>
      <h2 className="text-xl font-semibold text-gray-900">Error Loading Order</h2>
      <p className="text-gray-600">{message}</p>
    </div>
  </Card>
);

export default function OrderPage() {
  const router = useRouter();
  const { orderId } = router.query;
  const { data: order, error, loading } = useFetchOrderByPK(orderId as string);

  const { currentTab, handleChange } = useSyncQueryWithStore();

  const handleTabClick = (value: TabValue) => {
    handleChange(value);
  };

  if (error) return <ErrorState message={error.message || "Failed to load order details"} />;
  if (loading) return <LoadingSkeleton />;

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
          <CourierOverview order={order} />
        </div>
      </div>
    </section>
  );
}
