import { useState } from "react";
import { useRouter } from "next/router";
import SupplierProductList from "./SupplierProductList";
import {
  HiOutlinePlusCircle,
  HiMagnifyingGlass,
  HiOutlineXMark,
} from "react-icons/hi2";

export const SupplierProducts = () => {
  const [page, setPage] = useState(0);
  const [name, setName] = useState("");
  const router = useRouter();

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    // if (page > 0) {
    //  check if it's a good idea to execute a hook conditionally
    // }
    setPage((prev) => {
      if (page > 0) {
        return prev;
      }
      return prev - 1;
    });
  };

  const handleSearch = () => {
    const { supplierId } = router.query;
    const query = { product: name };
    const queryString = new URLSearchParams(query).toString();
    const newUrl = `/suppliers/${supplierId}?${queryString}`;
    router.push(newUrl, undefined, { shallow: true });
  };

  const handleReset = () => {
    setName("");
    setPage(0);
    const { supplierId } = router.query;
    const newUrl = `/suppliers/${supplierId}`;
    router.push(newUrl);
  };

  return (
    <div className="grow space-y-2 bg-base-200 p-4 rounded-xl">
      <div className="flex flex-col lg:flex-row justify-between lg:items-center">
        <h3 className="text-xl font-semibold">Products</h3>
        <div className="flex flex-col md:flex-row gap-2 items-end">
          <div className="form-control">
            <div className="input-group relative">
              <input
                type="text"
                placeholder="Product name"
                className="input input-sm input-bordered"
                value={name}
                onChange={({ target }) => setName(target.value)}
              />
              {name && (
                <button
                  onClick={() => handleReset()}
                  className="absolute right-10 top-2 text-lg"
                  title="Reset"
                >
                  <HiOutlineXMark />
                </button>
              )}
              <button
                onClick={handleSearch}
                className="btn btn-sm btn-primary btn-square"
                title="Search"
              >
                <HiMagnifyingGlass />
              </button>
            </div>
          </div>
          <button className="btn btn-sm btn-primary normal-case">
            <HiOutlinePlusCircle className="text-xl" />
            Add Product
          </button>
        </div>
      </div>
      <div className="flex justify-between px-2">
        <button onClick={() => handlePrev()} className="btn btn-sm btn-outline">
          Prev
        </button>
        <button
          onClick={() => handleNext()}
          className="btn btn-sm btn-secondary"
        >
          Next
        </button>
      </div>
      <SupplierProductList page={page} />
    </div>
  );
};
