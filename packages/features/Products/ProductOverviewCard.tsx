import { useState } from "react";
import { Drawer, QuantityInput, Card } from "ui";
import { formatCurrency, calculateDiscountedPrice } from "@sahil/lib";
import { HiOutlineShoppingCart, HiOutlineSparkles } from "react-icons/hi2";
import CompareSuppliersTable from "ui/components/table/CompareSuppliersTable";
import { useOrderItemsStore } from "@sahil/lib/hooks/formStores/useOrderItemsStore";

type ProductSummaryProps = {
  product: any;
  isInCart?: boolean;
  onAddOrderItem?: (item: any) => void;
  onRemoveOrderItem?: (item: any) => void;
};

const placeholder = "https://cdn-icons-png.flaticon.com/512/6389/6389206.png";

export const ProductSummary = ({
  product,
  isInCart,
  onAddOrderItem,
  onRemoveOrderItem,
}: ProductSummaryProps) => {
  const [isAdding, setIsAdding] = useState(false);
  const quantity = useOrderItemsStore(
    (state) =>
      state.orderItems.filter((item) => product.id === item.id)[0]?.quantity
  );

  const handleAddToCart = (newQuantity: number) => {
    if (onAddOrderItem) {
      onAddOrderItem({ ...product, quantity: newQuantity });
    }
    setIsAdding(false);
  };

  const handleRemoveFromCart = () => {
    if (onRemoveOrderItem) {
      onRemoveOrderItem({ ...product });
    }
  };

  return (
    <div className="card card-bordered card-compact relative">
      <figure className="aspect-video relative">
        <img src={product.mainImage || placeholder} alt={product.name} />
        <div className="absolute top-0 right-0 mt-3 mr-3 badge badge-success items-center text-[0.65rem] text-white">
          98
          <HiOutlineSparkles />
        </div>
      </figure>
      {isInCart && (
        <div className="absolute top-0 left-0 mt-3 ml-3 badge badge-success text-white text-[0.65rem]">
          {/* <span>
            <HiOutlineShoppingCart />
          </span> */}
          {product.name} - {quantity}x in cart
        </div>
      )}
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h3 className="card-title text-sm truncate ...">{product.name}</h3>
        </div>
        <p className="mb-2 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center w-full">
          <ProductPrice price={product.price} discount={product.discount} />
          <div>
            {product.discount > 0 ? (
              <p className="text-success font-semibold">{`${product.discount}%`}</p>
            ) : null}
          </div>
        </div>
        <hr className="my-3" />
        <div className="card-actions items-center">
          {isAdding ? (
            <QuantityInput
              quantity={quantity}
              onConfirm={handleAddToCart}
              onCancel={() => setIsAdding(false)}
            />
          ) : isInCart ? (
            <div className="w-full grid grid-cols-2 gap-2">
              <button
                className="grow btn btn-sm btn-outline"
                onClick={handleRemoveFromCart}
                type="button"
                title="Remove Item"
              >
                Remove Item
              </button>
              <button
                className="grow btn btn-sm btn-primary"
                onClick={() => setIsAdding(true)}
                type="button"
                title="Edit Quantity"
              >
                Edit Quantity
              </button>
            </div>
          ) : (
            <button
              className="btn btn-sm btn-primary w-full"
              onClick={() => setIsAdding(true)}
              type="button"
              title="Add Item"
            >
              Add To Cart
            </button>
          )}
          {!isAdding && <ProductCompareDrawer product={product} />}
        </div>
      </div>
    </div>
  );
};

const ProductPrice = ({
  price,
  discount,
}: {
  price: number;
  discount: number;
}) => {
  const valueAfterDiscount = calculateDiscountedPrice(price, discount);
  return (
    <div className="flex gap-2 items-center">
      {discount === 0 ? (
        <p className="font-bold">{formatCurrency(price)}</p>
      ) : (
        <p>
          <span className="font-bold mr-1">
            {formatCurrency(valueAfterDiscount)}
          </span>
          <span className="line-through text-gray-500 text-xs">
            {formatCurrency(price)}
          </span>
        </p>
      )}
    </div>
  );
};

type ProductCompareDrawerProps = {
  product: any;
};

const ProductCompareDrawer = ({ product }: ProductCompareDrawerProps) => {
  const details = [
    {
      label: "Price",
      value: <ProductPrice price={product.price} discount={product.discount} />,
    },
    {
      label: "Sale",
      value: `${product.discount}%`,
    },
    {
      label: "Delivery Time",
      value: "1 Day",
    },
    {
      label: "Supplier",
      value: `${product.supplier}`,
    },
    {
      label: "Sahil Score",
      value: (
        <div className="badge badge-success items-center text-white">
          98
          <HiOutlineSparkles />
        </div>
      ),
    },
  ];
  return (
    <Drawer id={product.id} CTA="Compare" className="justify-between space-y-4">
      <div className="space-y-1">
        <h3 className="font-bold text-xl">Compare Product</h3>
        <p className="opacity-80">
          See other suppliers and choose ideal product.
        </p>
      </div>

      <Card className="w-full">
        <figure className="aspect-video w-full rounded-2xl overflow-hidden">
          <img
            src={product.mainImage || placeholder}
            alt={product.name}
            className="object-cover h-full w-full"
          />
        </figure>
        <div className="flex flex-col mt-2 space-y-2">
          <h4 className="font-bold flex flex-wrap justify-between gap-1">
            <span>{product.name}</span>
            <span className="badge badge-sm badge-ghost">Selected</span>
          </h4>
          <p className="opacity-80">{product.description}</p>
          <div className="w-full flex overflow-x-auto justify-between gap-4 p-2">
            {details.map(({ label, value }) => (
              <div
                key={label}
                className="flex flex-col min-w-[3rem] shrink-0 space-y-1"
              >
                {typeof value === "string" ? (
                  <span className="font-bold text-sm">{value}</span>
                ) : (
                  <>{value}</>
                )}
                <span className="opacity-80">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>

      <CompareSuppliersTable suppliers={suppliers} />
    </Drawer>
  );
};

const suppliers = [
  {
    id: 1,
    name: "Radisson Blu",
    price: 100000,
    sale: 15,
    delivery: 5,
    score: 98,
    address: "Kigali Heights",
    source: "Direct",
  },
  {
    id: 2,
    name: "Norrsken House",
    price: 450000,
    sale: 5,
    delivery: 1,
    score: 95,
    address: "Kigali Heights",
    source: "Agent Assisted",
  },
  {
    id: 3,
    name: "Amigos",
    price: 1000000,
    sale: 25,
    delivery: 6,
    score: 90,
    address: "Kigali Heights",
    source: "Direct",
  },
  {
    id: 4,
    name: "KFC",
    price: 720000,
    sale: 5,
    delivery: 1,
    score: 85,
    address: "Kigali Heights",
    source: "Direct",
  },
  {
    id: 5,
    name: "Dominos",
    price: 86000,
    sale: 30,
    delivery: 1,
    score: 75,
    address: "Kigali Heights",
    source: "Direct",
  },
];
