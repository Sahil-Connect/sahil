import { useState } from "react";
import { useRouter } from "next/router";
import SupplierProductList from "./SupplierProductList";
import AddNewProductModal from "./AddNewProductModal";
import { HiMagnifyingGlass } from "react-icons/hi2";

type props = {
  productsCount: number;
};

export const SupplierProducts = ({ productsCount }: props) => {
  const [name, setName] = useState("");
  const router = useRouter();
  const { supplierId } = router.query;

  const onInputChange = (e: { target: { value: string } }) => {
    const value = e.target.value;
    setName(value);
    if (value === "") {
      handleReset();
    }
  };

  const handleSearch = () => {
    const query = { product: name };
    const queryString = new URLSearchParams(query).toString();
    const newUrl = `/suppliers/${supplierId}?${queryString}`;
    router.push(newUrl, undefined, { shallow: true });
  };

  const handleReset = () => {
    setName("");
    const { supplierId } = router.query;
    const newUrl = `/suppliers/${supplierId}`;
    router.push(newUrl);
  };

  return (
    <div className="grow space-y-2 bg-gray-100 p-4 rounded-xl">
      <div className="flex flex-col md:flex-row justify-between lg:items-center">
        <h3 className="text-xl font-semibold">Products</h3>
        <div className="flex flex-col md:flex-row gap-2 items-start md:items-center">
          <div className="form-control relative">
            <div className="input-group flex items-center">
              <input
                type="text"
                placeholder="Search for product..."
                className="py-1 ps-2 text-sm block w-full border outline-none rounded-l-lg"
                value={name}
                onChange={onInputChange}
              />
              <button
                onClick={handleSearch}
                className="py-2 px-4 bg-primary text-sm text-white rounded-r-lg"
                title="Search"
              >
                <HiMagnifyingGlass />
              </button>
            </div>
          </div>
          <AddNewProductModal supplier_id={supplierId as string} />
        </div>
      </div>
      <SupplierProductList productsCount={productsCount} />
    </div>
  );
};
