import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFetchProducts } from "@/hooks/products";
import { useFetchSuppliers } from "@/hooks/suppliers";
import { useOrderItemsStore } from "./OrderProcessingForm/useOrderItemsStore";
import {
  HiArrowLeft,
  HiArrowRight,
  HiMinus,
  HiPlus,
  HiMiniMagnifyingGlass,
  HiOutlineTruck,
  HiXMark,
} from "react-icons/hi2";

export const ProductsCatalogue = () => {
  const { data: products, error, loading } = useFetchProducts();
  const { addOrderItem, orderItems } = useOrderItemsStore(state => state);

  console.log(orderItems);

  if (error) {
    return <p>Failed to load products.</p>;
  }

  if (loading) {
    return <p>Loading Products</p>;
  }

  const onAddOrderItem = (product) => {
    console.log("Adding product to order", product);
    addOrderItem({
        productId: product.id,
        quantity: 1
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
            <h3 className="text-xl">
              Available Products <span className="text-sm">3000 products</span>
            </h3>
            <div className="join grid grid-cols-2">
              <button
                className="join-item btn btn-sm btn-square"
                name="left"
                type="button"
                aria-label="left"
              >
                <HiArrowLeft />
              </button>
              <button className="join-item btn btn-sm btn-square">
                <HiArrowRight />
              </button>
            </div>
          </div>
          <div className="space-y-2">
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
    <div className="flex justify-between gap-4 items-center">
      <div className="flex gap-2">
        <p>{product.name}</p>
        <p className="text-neutral-content">{product.price} SSP</p>
      </div>
      <div className="flex gap-2 items-center">
        <button className="btn btn-xs btn-square" onClick={() => onRemoveOrderItem(product)} type="button">
          <HiMinus />
        </button>
        <input
          type="text"
          placeholder="2"
          className="input input-xs input-bordered w-12 text-center"
        />
        <button className="btn btn-xs btn-square" onClick={() => onAddOrderItem(product)} type="button">
          <HiPlus />
        </button>
      </div>
    </div>
  );
};
