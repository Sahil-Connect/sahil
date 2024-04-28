import {
  CourierOverview,
  OrderItems,
  OrderOverview,
  OrderPreferences,
  OrderClient,
  OrderDetails,
  OrderProgress,
} from "@sahil/features/Orders";
import { Tabs } from "ui";

import { useFetchOrderByPK } from "@/hooks/orders";
import { useRouter } from "next/router";
import { useSyncQueryWithStore } from "@sahil/lib/hooks/utilities/useQueryStore";

import {
  HiOutlineAdjustmentsVertical,
  HiOutlineExclamationCircle,
  HiOutlineBeaker,
} from "react-icons/hi2";

export const OrderTabs = [
  {
    label: "Oder Info",
    value: "info",
    icon: <HiOutlineExclamationCircle />,
  },
  {
    label: "Order Preferences",
    value: "preferences",
    icon: <HiOutlineAdjustmentsVertical />,
  },
  {
    label: "Order Progress",
    value: "progress",
    icon: <HiOutlineBeaker />,
  },
];

export default function OrderPage() {
  const router = useRouter();
  const { orderId } = router.query;
  const { data: order, error, loading } = useFetchOrderByPK(orderId as string);

  const defaultValues = { tab: "info" };
  const { query, handleChange } = useSyncQueryWithStore(defaultValues);

  const handleTabClick = (value: string) => {
    handleChange("tab", value);
  };

  if (error) return <p>error</p>;
  if (loading) return <p>loading</p>;

  return (
    <section>
      <div className="flex flex-col lg:flex-row">
        <div className="grow space-y-2">
          <OrderClient businessId={order?.customerId} />
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="basis-4/6 space-y-2">
          <OrderOverview order={order} />
          <Tabs
            items={OrderTabs}
            onTabClick={handleTabClick}
            currentTab={query["tab"]}
          />

          <OrderTabController currentTab={query["tab"]} order={order} />
          <OrderItems items={order?.order_items} />
          <CourierOverview order={order} />
        </div>
      </div>
    </section>
  );
}

type OrderTabControllerProps = {
  currentTab: string;
  order: any;
};

const OrderTabController = ({ currentTab, order }: OrderTabControllerProps) => {
  switch (currentTab) {
    case "info":
      return <OrderDetails order={order} />;
    case "preferences":
      return <OrderPreferences order={order} />;
    case "progress":
      return <OrderProgress />;
    default:
      return <OrderDetails order={order} />;
  }
};
