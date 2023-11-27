import { useEffect } from "react";
import { useFetchProducts } from "@/hooks/products";
import { Card, List, ListHeader } from "ui";
import { formatCost } from "@sahil/lib";
import { useOrderItemsStore } from "@/hooks/useOrderItemsStore";
import Link from "next/link";
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
} from "react-icons/hi2";

export default function CheckoutPage() {
  const { orderItems } = useOrderItemsStore((state) => state);

  console.log(orderItems);
  return (
    <div>
      <p>Hello</p>
    </div>
  );
}
