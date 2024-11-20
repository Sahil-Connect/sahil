import { FC } from "react";
import { formatCurrency, calculateDiscountedPrice } from "@sahil/lib";
import { 
  HiOutlineSparkles,
  HiOutlineClock, 
  HiOutlineArrowDown,
  HiOutlineShoppingCart,
  HiOutlineUserCircle,
  HiOutlineTruck,
  HiOutlineBuildingOffice,
  HiOutlineCube,
  HiOutlineXMark 
} from "react-icons/hi2";
import { Dropdown } from "../Dropdown";
import Link from "next/link";

// Types
interface Column<T> {
  header: string;
  accessKey: keyof T | string;
  cell?: (row: T) => React.ReactNode;
}

interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  title?: string;
  onNextPage?: () => void;
  onPreviousPage?: () => void;
  isNextDisabled?: boolean;
  isPrevDisabled?: boolean;
}

interface TableRowProps {
  row: Record<string, any>;
}

// Constants
const options = [
  {
    id: 1,
    label: "Available",
    icon: HiOutlineTruck,
  },
  {
    id: 2,
    label: "Out of Stock",
    icon: HiOutlineCube,
  },
  {
    id: 3,
    label: "Sale",
    icon: HiOutlineXMark,
  },
];

// Components
export const TableRow = ({ row }: TableRowProps) => {
  return (
    <tr>
      <th>
        <label>
          <input 
            type="checkbox" 
            className="checkbox" 
            aria-label="Select row" 
          />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src="https://avatars.githubusercontent.com/u/21015204?v=4"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div className="font-bold">
              <Link href={`/inventory/${row.id}`}>{row.name}</Link>
            </div>
            <div className="flex gap-2">
              <span className="badge badge-outline badge-sm">Groceries</span>
              <span className="badge badge-outline badge-sm">Groceries</span>
            </div>
          </div>
        </div>
      </td>
      <td>15,000 SSP</td>
      <td>15 available</td>
      <th>
        <Dropdown CTA="Available" options={options} />
      </th>
    </tr>
  );
};

export const TableControls = () => {
  return (
    <div>
      <div>
        <h3>Hello, World</h3>
      </div>
      <div>
        <button>Sort</button>
      </div>
    </div>
  );
};

export const TablePagination = () => {
  return (
    <div className="join">
      <button className="join-item btn">1</button>
      <button className="join-item btn btn-active">2</button>
      <button className="join-item btn">3</button>
      <button className="join-item btn">4</button>
    </div>
  );
};

export const Table = <T extends Record<string, any>>({
  data,
  columns,
  title,
  onNextPage,
  onPreviousPage,
  isNextDisabled,
  isPrevDisabled,
}: TableProps<T>) => {
  return (
    <div className="bg-base-100 rounded-xl shadow-sm">
      <table className="table table-bordered">
        <thead className="border-b">
          <tr>
            <th>
              <label>
                <input 
                  type="checkbox" 
                  className="checkbox"
                  aria-label="Select all rows" 
                />
              </label>
            </th>
            {columns.map((column, index) => (
              <th key={index} className="flex gap-2 items-center">
                {column.header} {index === 0 && <HiOutlineArrowDown />}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <th>
                <label>
                  <input 
                    type="checkbox" 
                    className="checkbox" 
                    aria-label={`Select row ${rowIndex + 1}`}
                  />
                </label>
              </th>
              {columns.map((column, colIndex) => (
                <td key={colIndex}>
                  {column.cell ? column.cell(row) : row[column.accessKey]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Main Component
const CompareSuppliersTable: FC<{ suppliers: any[] }> = ({ suppliers }) => {
  const columns: Column<any>[] = [
    {
      header: "Supplier",
      accessKey: "name",
      cell(row: any) {
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
    <Table
      data={suppliers}
      columns={columns}
      title="Suppliers"
      onNextPage={() => {}}
      onPreviousPage={() => {}}
      isNextDisabled={true}
      isPrevDisabled={true}
    />
  );
};

export default CompareSuppliersTable;
