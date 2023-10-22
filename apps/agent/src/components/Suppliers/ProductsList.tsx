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
      <div className="flex justify-between items-center">
        <h3 className="card-title">{product.name}</h3>
        <div className="badge">Available</div>
        </div>
      </div>
    </div>
  );
};
export const ProductsList = () => {
  return (
    <div className="grow space-y-2">
      <div className="flex justify-between items-center">
        <h3 className="text-xl">Products</h3>
        <button className="btn btn-sm">View All</button>
      </div>
      <div className="space-y-2">
        {products.map((product) => (
          <ProductOverviewCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
