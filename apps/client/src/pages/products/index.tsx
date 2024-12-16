import { useState } from "react";
import { useRouter } from "next/router";
import { ProductsCatalogue } from "@sahil/features/Products/ProductsCatalogue";
import { HiMagnifyingGlass, HiOutlineShoppingCart } from "react-icons/hi2";
import { CollectionControls } from "@sahil/features/Shared/CollectionControls";
import { useSession } from "next-auth/react";
import { useGetUserById } from "@sahil/lib/hooks/users";

export default function Products() {
  const [name, setName] = useState("");
  const router = useRouter();
  const { data: sessionData } = useSession();
  const { data: currentUser, loading: userLoading } = useGetUserById(sessionData?.user?.id);

  const onInputChange = (e: { target: { value: string } }) => {
    const value = e.target.value;
    setName(value);
    if (value === "") {
      handleReset();
    }
  };

  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const query = { name };
    const queryString = new URLSearchParams(query).toString();
    const newUrl = `/products?${queryString}`;
    router.push(newUrl, undefined, { shallow: true });
  };

  const handleReset = () => {
    setName("");
    const newUrl = `/products`;
    router.push(newUrl);
  };

  return (
    <section className="space-y-2">
      <CollectionControls user={currentUser} />
      <div>
        <form onSubmit={handleSearch} className="form-control relative">
          <div className="input-group ">
            <input
              type="text"
              placeholder="Product name"
              className="input input-sm input-bordered"
              value={name}
              onChange={onInputChange}
            />
            <button
              type="submit"
              className="btn btn-sm btn-primary btn-square"
              title="Search"
            >
              <HiMagnifyingGlass />
            </button>
          </div>
        </form>
      </div>
      <ProductsCatalogue />
    </section>
  );
}
