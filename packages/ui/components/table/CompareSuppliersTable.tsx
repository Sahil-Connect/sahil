import { formatCurrency, calculateDiscountedPrice } from "@sahil/lib";
import { Column, Table } from "./Table";
import { HiOutlineSparkles } from "react-icons/hi2";

type Props = {
  suppliers: any[];
};

const CompareSuppliersTable = ({ suppliers }: Props) => {
  const columns: Column<(typeof suppliers)[0]>[] = [
    {
      header: "Supplier",
      accessKey: "name",
      cell(row) {
        return (
          <div className="flex flex-col space-y-1">
            <span className="font-bold">{row.name}</span>
            <span className="text-sm opacity-80">{row.address}</span>
          </div>
        );
      },
    },
    {
      header: "Price",
      accessKey: "price",
      cell(row) {
        const price = row.price;
        const discount = row.sale;

        if (discount === 0)
          return <span className="font-bold">{formatCurrency(price)}</span>;

        const valueAfterDiscount = calculateDiscountedPrice(price, discount);

        return (
          <div className="flex flex-col space-y-1">
            <span className="font-bold">
              {formatCurrency(valueAfterDiscount)}
            </span>
            <span className="line-through text-gray-500 text-xs">
              {formatCurrency(price)}
            </span>
          </div>
        );
      },
    },
    {
      header: "Sale",
      accessKey: "sale",
      cell(row) {
        return <p>{row.sale}%</p>;
      },
    },
    {
      header: "Sahil Score",
      accessKey: "score",
      cell(row) {
        return (
          <div className="badge badge-success items-center text-white">
            98
            <HiOutlineSparkles />
          </div>
        );
      },
    },
    {
      header: "Delivery",
      accessKey: "delivery",
    },
    {
      header: "",
      accessKey: "",
      cell(row) {
        return (
          <button
            onClick={() => console.log(row.id)}
            className="text-primary normal-case font-semibold"
          >
            Add to Cart
          </button>
        );
      },
    },
  ];

  return (
    <>
      <Table
        data={suppliers}
        columns={columns}
        title="Suppliers"
        onNextPage={() => {}}
        onPreviousPage={() => {}}
        isNextDisabled={true}
        isPrevDisabled={true}
      />
    </>
  );
};

export default CompareSuppliersTable;
