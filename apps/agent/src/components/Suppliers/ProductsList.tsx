const products = [
  {
    id: 1,
    name: "Water",
  },
  {
    id: 2,
    name: "Gas Cylinders",
  },
];

const ProductOverviewCard = ({ product }) => {
  return (
    <div className="card card-compact shadow">
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <div>
            <p>Available</p>
        </div>
      </div>
    </div>
  );
};
export const ProductsList = () => {
  return (
    <div className="grow space-y-2">
      <h3 className="text-xl">Products</h3>
      <div className="space-y-2">
        {products.map((product) => (
          <ProductOverviewCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
