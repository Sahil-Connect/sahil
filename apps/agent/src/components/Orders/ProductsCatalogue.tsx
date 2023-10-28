import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFetchProducts } from "@/hooks/products";
import { useFetchSuppliers } from "@/hooks/suppliers";
import { useOrderItemsStore } from "../../hooks/useOrderItemsStore";
import {
  HiArrowLeft,
  HiArrowRight,
  HiMinus,
  HiPlus,
  HiOutlineChevronUpDown,
  HiOutlineFunnel,
  HiOutlineCursorArrowRipple,
  HiXMark,
  HiOutlineBanknotes,
} from "react-icons/hi2";

export const ProductsCatalogue = () => {
  const { data: products, error, loading } = useFetchProducts();
  const { addOrderItem, orderItems } = useOrderItemsStore((state) => state);

  console.log(orderItems);

  if (error) {
    return <p>Failed to load products.</p>;
  }

  if (loading) {
    return (
      <div>
        <span className="loading loading-spinner loading-xs"></span>
        <p>Loading Products</p>
      </div>
    );
  }

  const onAddOrderItem = (product) => {
    console.log("Adding product to order", product);
    addOrderItem({
      productId: product.id,
      quantity: 1,
    });
    console.log(orderItems);
  };
  const onRemoveOrderItem = (product) => {
    console.log("Adding product to order", product);
  };

  return (
    <div className="card card-compact shadow">
      <div className="card-body">
        <div className="space-y-2">
          <div className="flex justify-between">
            <h3 className="card-title text-sm">Available Products</h3>
            <div className="join grid grid-cols-2">
              <button
                className="join-item btn btn-sm btn-square"
                name="left"
                type="button"
                aria-label="left"
              >
                <HiArrowLeft />
              </button>
              <button className="join-item btn btn-sm btn-square btn-secondary">
                <HiArrowRight />
              </button>
            </div>
          </div>
          <div className="bg-secondary-content flex items-center justify-between p-2 rounded-xl">
            <div className="text-secondary-focus">
              <p className="text-bold">{products.length} ITEMS</p>
            </div>
            <div className="flex gap-2">
              <button className="btn btn-sm btn-accent">
                <HiOutlineFunnel /> Filter
              </button>
              <select className="select select-sm bg-accent w-full max-w-xs">
                <option disabled>Sort by</option>
                <option>Lowest - Highest</option>
                <option>Highest - Lowest</option>
                <option>Newest</option>
              </select>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {products.map((product) => (
              <ProductSummary
                key={product.id}
                product={product}
                onAddOrderItem={onAddOrderItem}
                onRemoveOrderItem={onRemoveOrderItem}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

type ProductSummaryProps = {
  onAddOrderItem: () => void;
  product: any;
  onRemoveOrderItem: () => void;
};

export const ProductSummary: FC<ProductSummaryProps> = ({
  onAddOrderItem,
  product,
  onRemoveOrderItem,
}) => {
  return (
    <div className="card card-compact card-bordered basis-1/4 grow">
      <div className="card-body">
        <div className="flex items-center justify-between">
          <p className="card-title text-sm">{product.name}</p>
          <p>{product?.description}</p>
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex gap-2 items-center">
            <span className="shadow p-2 rounded-md">
              <HiOutlineBanknotes />
            </span>
            {product.price} SSP
          </div>
        </div>
        <div className="card-actions items-center">
          <button
            className="btn btn-xs"
            onClick={() => onAddOrderItem(product)}
            type="button"
            title="Add Item"
          >
            <HiOutlineCursorArrowRipple /> Add Product
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
          <div className="badge">1x</div>
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
      </div>
    </div>
  );
};
