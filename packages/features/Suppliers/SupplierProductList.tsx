import { useState } from "react";
import { useFetchSupplierProducts } from "@sahil/lib/hooks/suppliers";
import {
  HiOutlineBanknotes,
  HiOutlineCube,
  HiEllipsisHorizontal,
} from "react-icons/hi2";
import EditProductModal from "./EditProductModal";
import { formatCurrency } from "@sahil/lib";
import { Card, List, ListHeader, ListPagination, ListSort } from "ui";
import DeleteProductModal from "./DeleteProductModal";

type SahilProduct = {
  id: string;
  name: string;
  description: string;
  inStock: boolean;
  price: number;
  quantity: number;
  discount: number;
  supplier_id: string;
};

type props = {
  productsCount: number;
};

const SupplierProductList = ({ productsCount }: props) => {
  const [page, setPage] = useState(0);
  const [sort, setSort] = useState({ property: "name", order: "asc" });
  const {
    data: products,
    loading,
    error,
  } = useFetchSupplierProducts({ page, sortOption: sort });

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    setPage((prev) => {
      if (page === 0) {
        return prev;
      }
      return prev - 1;
    });
  };

  const sortOptions = [
    { property: "name", label: "Name (Low)", order: "asc" },
    { property: "name", label: "Name (High)", order: "desc" },
    { property: "quantity", label: "Quantity (Low)", order: "asc" },
    { property: "quantity", label: "Quantity (High)", order: "desc" },
    { property: "price", label: "Price (Low)", order: "asc" },
    { property: "price", label: "Price (High)", order: "desc" },
  ];

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = sortOptions.find(
      (option) => option.label === event.target.value
    );
    if (selectedOption) {
      setSort({
        property: selectedOption.property,
        order: selectedOption.order,
      });
      console.log(selectedOption);
    }
  };

  return (
    <div className="space-y-4">
      <ListHeader>
        <div className="flex gap-4">
          <ListSort
            options={sortOptions}
            defaultValue="Sort Products"
            onChange={handleSortChange}
            renderItem={(option) => (
              <option value={option.label}>{option.label}</option>
            )}
          />
          <ListPagination
            onPreviousPage={handlePrev}
            onNextPage={handleNext}
            isPrevDisabled={page <= 0}
            isNextDisabled={productsCount <= (page + 1) * 4}
          />
        </div>
      </ListHeader>

      <List
        data={products}
        error={error}
        loading={loading}
        renderItem={(product: SahilProduct) => (
          <ProductOverviewCard key={product.id} product={product} />
        )}
      />
    </div>
  );
};

export default SupplierProductList;

const ProductOverviewCard = ({ product }: { product: SahilProduct }) => {
  return (
    <Card className="bg-base-100 h-full">
      <figure>
        <img
          src="https://cdn-icons-png.flaticon.com/512/6389/6389206.png"
          alt="Shoes"
        />
      </figure>
      <div className="flex flex-col justify-start">
        <div className="flex justify-between items-start">
          <h3 className="card-title w-11/12">{product.name}</h3>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-sm btn-ghost m-1">
              <HiEllipsisHorizontal />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow-xl border border-neutral bg-base-100 rounded-box w-36 space-y-2"
            >
              <EditProductModal product={product} />

              <DeleteProductModal name={product.name} id={product.id} />
            </ul>
          </div>
        </div>
      </div>

      <div className="grow grid items-center">
        <p className="text-sm">{product.description}</p>
      </div>

      <div className="flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center gap-1">
          <span className="text-lg shadow rounded-md p-2">
            <HiOutlineBanknotes />
          </span>
          <p>{formatCurrency(product.price)}</p>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-lg shadow rounded-md p-2">
            <HiOutlineCube />
          </span>
          <p>{product.quantity} items</p>
        </div>
      </div>
      {!product.inStock && (
        <div className={`badge font-bold tracking-wider text-red-600 `}>
          Out of Stock
        </div>
      )}
    </Card>
  );
};
