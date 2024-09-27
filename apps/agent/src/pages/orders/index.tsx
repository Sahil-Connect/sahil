import { HiPlus } from "react-icons/hi2";
import { ListOrders } from "@sahil/features/Orders/ListOrders";
import { SectionHeader } from "ui";

const actions = [
  {
    label: "New Order",
    icon: <HiPlus />,
    href: "/orders/new/order_details",
    primary: true
  }
];

export default function OrdersPage() {
  return (
    <SectionHeader title="Orders" actions={actions}>
      <ListOrders />
    </SectionHeader>
  );
}
