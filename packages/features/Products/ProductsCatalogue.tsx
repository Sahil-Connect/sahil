import { useEffect, useState } from "react";
import { useFetchProducts } from "@sahil/lib/hooks/products";
import { Card, List, ListHeader, ListPagination } from "ui";
import { useOrderItemsStore } from "@sahil/lib/hooks/formStores/useOrderItemsStore";
import Link from "next/link";
import {
  HiOutlineShoppingCart,
  HiArrowPath,
  HiSignalSlash,
} from "react-icons/hi2";
import { Products } from "@sahil/lib/graphql/__generated__/graphql";
import { ProductSummary } from "./ProductOverviewCard";

export const ProductsCatalogue = () => {
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);
  const {
    data: products,
    error,
    loading,
    productsCount,
  } = useFetchProducts({ limit, offset });

  const {
    addOrderItem,
    removeOrderItem,

    orderItems,
    setProducts,
  } = useOrderItemsStore((state) => state);

  const orderItemsMap = new Map(orderItems.map((item) => [item.id, item]));

  useEffect(() => {
    setProducts(products as Products[]);
  }, [products, setProducts]);

  if (error) {
    return (
      <Card title="Unable to load products...">
        <span className="shadow p-2 rounded-md w-fit text-2xl">
          <HiSignalSlash />
        </span>
        <p>
          Products are not loading due to a technical problem on our side.
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
      <Card titleSize="sm">
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
    addOrderItem(product);
  };

  const onRemoveOrderItem = (product: any) => {
    removeOrderItem(product);
  };

  return (
    <section className="space-y-4">
      <ListHeader size={productsCount?.count} sizeLabel="Products">
        <ListPagination
          onNextPage={() => setOffset((prev) => prev + 10)}
          onPreviousPage={() => setOffset((prev) => prev - 10)}
          isNextDisabled={
            (productsCount && offset + 10 >= productsCount.count) || false
          }
          isPrevDisabled={offset === 0}
        />
      </ListHeader>
      <List
        data={products as Products[]}
        error={error}
        loading={loading}
        cols={4}
        renderItem={(product) => {
          const isInCart = orderItemsMap.has(product.id);
          return (
            <ProductSummary
              key={product.id}
              product={product}
              isInCart={isInCart}
              onAddOrderItem={onAddOrderItem}
              onRemoveOrderItem={onRemoveOrderItem}
            />
          );
        }}
      />
      <div className="card-actions">
        <Link href="/checkout" className="btn btn-sm btn-primary">
          <HiOutlineShoppingCart /> Proceed to checkout
        </Link>
      </div>
    </section>
  );
};
