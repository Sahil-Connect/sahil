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
        <div className="flex flex-col md:flex-row gap-2 items-end">
          <div className="form-control relative">
            <div className="input-group ">
              <input
                type="text"
                placeholder="Product name"
                className="input input-sm input-bordered"
                value={name}
                onChange={onInputChange}
              />
              <button
                onClick={handleSearch}
                className="btn btn-sm btn-primary btn-square"
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
