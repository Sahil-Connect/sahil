import { useEffect, useState } from "react";
import { useFetchProducts } from "@sahil/lib/hooks/products";
import { Card, List, ListHeader, ListPagination, QuantityInput } from "ui";
import { formatCurrency, calculateDiscountedPrice } from "@sahil/lib";
import { useOrderItemsStore } from "@sahil/lib/hooks/useOrderItemsStore";
import Link from "next/link";
import {
  HiMinus,
  HiPlus,
  HiOutlineArrowRight,
  HiOutlineShoppingCart,
  HiXMark,
  HiOutlineSparkles,
} from "react-icons/hi2";
import { Products } from "@sahil/lib/graphql/__generated__/graphql";

type ProductSummaryProps = {
  onAddOrderItem: (item: any) => void;
  product: any;
  onRemoveOrderItem: (item: any) => void;
  isInCart?: boolean;
};

const placeholder = "https://cdn-icons-png.flaticon.com/512/6389/6389206.png";

export const ProductSummary = ({
  onAddOrderItem,
  product,
  onRemoveOrderItem,
  isInCart,
}: ProductSummaryProps) => {
  const valueAfterDiscount = calculateDiscountedPrice(
    product.price,
    product.discount
  );
  return (
    <div className="card card-bordered card-compact shadow h-96">
      <figure>
        <img src={product.mainImage || placeholder} alt={product.name} />
      </figure>
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h3 className="card-title text-sm">{product.name}</h3>
          <div className="badge badge-success items-center">
            <HiOutlineSparkles />
            98
          </div>
        </div>
        <p>{product.description}</p>
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-2 items-center">
            {product.discount === 0 ? (
              <p className="font-bold">{formatCurrency(product.price)}</p>
            ) : (
              <p>
                <span className="font-bold mr-2">{formatCurrency(valueAfterDiscount)}</span>
                <span className="line-through text-gray-500 text-xs">
                  {formatCurrency(product.price)}
                </span>
              </p>
            )}
          </div>
          <div>
            {product.discount > 0 ? (
              <p className="text-success font-semibold">{`${product.discount}%`}</p>
            ) : null}
          </div>
        </div>
        <div className="divider divider-vertical"> </div>
        <div className="card-actions items-center">
          {!isInCart ? (
            <button
              className="btn btn-sm btn-primary w-full"
              onClick={() => onAddOrderItem(product)}
              type="button"
              title="Add Item"
            >
              <HiOutlineShoppingCart /> Add To Cart
            </button>
          ) : (
            <QuantityInput />
          )}
          <button
            className="btn btn-sm btn-ghost w-full"
            onClick={() => onAddOrderItem(product)}
            type="button"
            title="Add Item"
          >
            Compare
          </button>
        </div>
      </div>
    </div>
  );
};
