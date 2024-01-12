import { useEffect, useState } from "react";
import { useFetchProducts } from "@/hooks/products";
import { useOrderItemsStore } from "@/hooks/useOrderItemsStore";
import { Card, JoinGrid } from "ui";
import { formatCost } from "@sahil/lib";
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

export const ProductsCatalogue = () => {
  const [offset, setOffset] = useState(0);
  const { data, error, loading, productsCount } = useFetchProducts({ offset });

  const { addOrderItem, orderItems, setProducts, products } =
    useOrderItemsStore((state) => state);

  const orderItemsMap = new Map(
    orderItems.map((item) => [item.productId, item])
  );

  useEffect(() => {
    setProducts(data);
  }, [data, setProducts]);

  if (error) {
    return (
      <Card title="Unable to load products...">
        <span className="shadow p-2 rounded-md w-fit text-2xl">
          <HiSignalSlash />
        </span>
        <p>
          Products aren't loading due to a technical problem on our side. Please
          try again. If the issue continues,{" "}
          <span className="text-primary">contact support.</span>
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-sm btn-warning">
            <HiArrowPath /> try again
          </button>
        </div>
      </Card>
    );
  }

  if (loading) {
    return (
      <Card title="Available Products" titleSize="sm">
        <div className="flex items-center justify-center text-center">
          <div>
            <span className="loading loading-spinner loading-lg"></span>
            <p>Loading Products</p>
          </div>
        </div>
      </Card>
    );
  }

  const onAddOrderItem = (product: any) => {
    addOrderItem({
      ...product,
      productId: product.id,
      quantity: 1,
    });
  };
  const onRemoveOrderItem = (product: any) => {
    console.log("remove product to order", product);
  };

  return (
    <Card title="Available Products" titleSize="sm">
      <div className="space-y-2">
        <div className="flex justify-end">
          <JoinGrid>
            <button
              onClick={() => setOffset((prev) => prev - 12)}
              disabled={offset === 0}
              className="join-item btn btn-sm btn-square"
              name="left"
              type="button"
              aria-label="left"
              title="left"
            >
              <HiArrowSmallLeft />
            </button>
            <button
              onClick={() => setOffset((prev) => prev + 12)}
              disabled={offset + 12 >= productsCount}
              className="join-item btn btn-sm btn-square btn-neutral"
              title="right"
              type="button"
            >
              <HiArrowSmallRight />
            </button>
          </JoinGrid>
        </div>
        <div className="bg-gray-100 flex items-center justify-between p-2 rounded-xl">
          <div>
            <p className="text-bold">{productsCount.count} Items</p>
          </div>
          <div className="flex gap-2">
            <button className="btn btn-sm btn-secondary">
              <HiOutlineFunnel /> Filter
            </button>
            <select
              className="select select-sm bg-secondary w-full max-w-xs"
              title="sort"
            >
              <option disabled>Sort by</option>
              <option>Lowest - Highest</option>
              <option>Highest - Lowest</option>
              <option>Newest</option>
            </select>
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          {products &&
            products?.map((product) => {
              const isInCart = orderItemsMap.has(product.id);
              return (
                <ProductSummary
                  key={product.id}
                  product={product}
                  onAddOrderItem={onAddOrderItem}
                  onRemoveOrderItem={onRemoveOrderItem}
                  isInCart={isInCart}
                />
              );
            })}
        </div>
      </div>
    </Card>
  );
};

type ProductSummaryProps = {
  onAddOrderItem: (item: any) => void;
  product: any;
  onRemoveOrderItem: (item: any) => void;
  isInCart: boolean;
};

export const ProductSummary = ({
  onAddOrderItem,
  product,
  onRemoveOrderItem,
  isInCart,
}: ProductSummaryProps) => {
  return (
    <div className="card card-compact card-bordered basis-1/4 grow">
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h3 className="card-title text-sm">{product.name}</h3>
          {product.discount && product.discount !== 0 && (
            <div className="badge badge-accent">{product.discount}%</div>
          )}
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex gap-2 items-center">
            <span className="shadow p-2 rounded-md">
              <HiOutlineBanknotes />
            </span>
            {formatCost(product.price)}
          </div>
        </div>
        <div className="card-actions items-center">
          {!isInCart ? (
            <button
              className="btn btn-xs"
              onClick={() => onAddOrderItem(product)}
              type="button"
              title="Add Item"
            >
              <HiOutlineShoppingCart /> Add Product
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
        </div>
      </div>
    </div>
  );
};
