import { useEffect } from "react";
import { useFetchProducts } from "@/hooks/products";
import { Card, List, ListHeader } from "ui";
import { formatCost } from "@sahil/lib";
import { useOrderItemsStore } from "@/hooks/useOrderItemsStore";
import Link from "next/link";
import { formatCurrency } from "@sahil/lib";
import {
  HiArrowSmallLeft,
  HiArrowSmallRight,
  HiMinus,
  HiPlus,
  HiOutlineFunnel,
  HiOutlineShoppingCart,
  HiXMark,
  HiOutlineBanknotes,
  HiArrowPath,
  HiSignalSlash,
  HiOutlineReceiptPercent
} from "react-icons/hi2";

export const OrderItem = ({ price, quantity, title }) => {
    console.log(price);
    console.log(quantity);
    return (
      <Card className="bg-white">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <h2 className="card-title text-sm">{title}</h2>
          <p className="flex items-center gap-2 text-gray-600">
          {formatCurrency(price)}
          </p>
        </div>
        <div className="flex gap-2">
          <p className="flex items-center gap-2 text-gray-600">
            <HiOutlineReceiptPercent /> {quantity}x
          </p>
        </div>
      </div>
      </Card>
    );
  };

  export const OrderItems = ({ items }) => {
    const { totalItems, totalCost } = items?.reduce(
      (totals, product) => ({
        totalItems: totals.totalItems + product.quantity,
        totalCost: totals.totalCost + product.price * product.quantity,
      }),
      {
        totalItems: 0,
        totalCost: 0,
      }
    );

    console.log(items);
    return (
      <>
        <Card title="Order Items" titleSize="sm" className="bg-gray-100">
            <ul className="space-y-2">
              {items?.map((item) => (
                <OrderItem
                  key={item.id}
                  title={item?.name}
                  quantity={item?.quantity}
                  price={item?.price}
                />
              ))}
            </ul>
        </Card>
      </>
    );
  };

  
export default function CheckoutPage() {
  const { orderItems } = useOrderItemsStore((state) => state);
  return (
    <section>
      <OrderItems items={orderItems} />
    </section>
  );
}
