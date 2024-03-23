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
import { ProductSummary } from "../Products/ProductOverviewCard";

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
          <ProductSummary key={product.id} product={product} />
        )}
      />
    </div>
  );
};

export default SupplierProductList;
