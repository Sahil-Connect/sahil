import { Drawer, QuantityInput, Card } from "ui";
import { formatCurrency, calculateDiscountedPrice } from "@sahil/lib";
import { HiOutlineShoppingCart, HiOutlineSparkles } from "react-icons/hi2";
import CompareSuppliersTable from "ui/components/table/CompareSuppliersTable";

type ProductSummaryProps = {
  onAddOrderItem?: (item: any) => void;
  product: any;
  onRemoveOrderItem?: (item: any) => void;
  isInCart?: boolean;
};

const placeholder = "https://cdn-icons-png.flaticon.com/512/6389/6389206.png";

export const ProductSummary = ({
  onAddOrderItem,
  product,
  onRemoveOrderItem,
  isInCart,
}: ProductSummaryProps) => {
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
          <ProductPrice price={product.price} discount={product.discount} />
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
              onClick={() => {
                if (onAddOrderItem) {
                  onAddOrderItem(product);
                }
              }}
              type="button"
              title="Add Item"
            >
              <HiOutlineShoppingCart /> Add To Cart
            </button>
          ) : (
            <QuantityInput />
          )}
          <ProductCompareDrawer product={product} />
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
        <div className="badge badge-success items-center">
          <HiOutlineSparkles />
          98
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
        <figure className="h-48 w-full rounded-2xl overflow-hidden">
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
