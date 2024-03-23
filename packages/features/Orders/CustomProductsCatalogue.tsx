import { useEffect, useState } from "react";
import { useFetchProducts } from "@sahil/lib/hooks/products";
import { useOrderItemsStore } from "@sahil/lib/hooks/useOrderItemsStore";
import { Card, JoinGrid } from "ui";
import { formatCost } from "@sahil/lib";
import { ProductSummary } from "../Products/ProductOverviewCard";
import { ProductsCatalogue } from "../Products/ProductsCatalogue";
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

export const CustomProductsCatalogue = () => {
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
          Products aren&apos;t loading due to a technical problem on our side.
          Please try again. If the issue continues,{" "}
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
    <section title="Available Products">
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
            <button className="btn btn-sm ghost">
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
        <ProductsCatalogue />
      </div>
    </section>
  );
};
