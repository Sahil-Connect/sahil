import { useFetchSupplierProducts } from "@/hooks/suppliers";
import { HiOutlineBanknotes, HiOutlineCube } from "react-icons/hi2";
import EditProductModal from "./EditProductModal";
import { formatCurrency } from "@sahil/lib";
import { Card } from "ui";

type SahilProduct = {
  id: string;
  name: string;
  description: string;
  inStock: boolean;
  price: number;
  quantity: number;
};

const SupplierProductList = ({ page }: { page: number }) => {
  const { data: products, loading, error } = useFetchSupplierProducts(page);

  if (error)
    return (
      <div>
        <p>An error occurred, couldn't load products.</p>
      </div>
    );

  if (loading)
    return (
      <div>
        <p>Loading supplier products...</p>
      </div>
    );

  if (products.length === 0)
    return (
      <div>
        <p>
          {page === 0
            ? "This supplier has no products"
            : "There are no more products"}
        </p>
      </div>
    );
  return (
    <div className="flex flex-wrap gap-2">
      {products?.map((product: any) => (
        <ProductOverviewCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default SupplierProductList;

const ProductOverviewCard = ({ product }: { product: SahilProduct }) => {
  return (
    <div className="basis-1/4 grow h-full">
      <Card>
        <div className="flex-col justify-between">
          <div className="flex flex-col justify-start">
            <div className="flex justify-between items-start">
              <h3 className="card-title w-11/12">{product.name}</h3>
              <EditProductModal product={product} />
            </div>
            <p
              className={`text-xs font-bold tracking-wider ${
                product.inStock ? "text-green-600" : "text-red-600"
              }`}
            >
              {product.inStock ? "Available" : "Out of Stock"}
            </p>
          </div>

          <p className="text-sm">{product.description}</p>

          <div className="flex items-center gap-4 mt-2 w-max">
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
        </div>
      </Card>
    </div>
  );
};
