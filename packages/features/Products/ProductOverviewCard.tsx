import { useEffect, useState } from "react";
import { useFetchProducts } from "@sahil/lib/hooks/products";
import { Card, List, ListHeader, ListPagination } from "ui";
import { formatCost, calculateDiscountedPrice } from "@sahil/lib";
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
    <div className="card card-bordered card-compact h-96">
      <figure>
        <img src={product.mainImage || placeholder} alt={product.name} />
      </figure>
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h3 className="card-title text-sm">{product.name}</h3>
          <div className="badge badge-success gap-2 items-center">
            {" "}
            <HiOutlineSparkles />
            98
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-2 items-center">
            {product.discount === 0 ? (
              <p>{formatCost(product.price)}</p>
            ) : (
              <p>
                {formatCost(valueAfterDiscount)}{" "}
                <span className="line-through text-gray-500 text-xs">
                  {formatCost(product.price)}
                </span>
              </p>
            )}
          </div>
          <div>
            {product.discount > 0 ? (
              <p className="text-success">{`${product.discount}%`}</p>
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
            <div className="flex justify-between w-full">
              <button
                className="btn btn-xs btn-warning"
                onClick={() => onRemoveOrderItem(product)}
                type="button"
                title="Add Item"
              >
                <HiXMark /> Remove
              </button>
              <div className="flex gap-2 items-center">
                <button
                  className="btn btn-xs"
                  onClick={() => onAddOrderItem(product)}
                  type="button"
                  title="Add Item"
                >
                  <HiMinus />
                </button>
                <div className="badge badge-neutral">1</div>
                <button
                  className="btn btn-xs"
                  onClick={() => onAddOrderItem(product)}
                  type="button"
                  title="Add Item"
                >
                  <HiPlus />
                </button>
              </div>
            </div>
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
