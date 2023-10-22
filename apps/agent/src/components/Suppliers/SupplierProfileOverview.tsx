export const SupplierProfileOverview = ({ supplier }) => {
  return (
    <div className="card card-compact shadow">
      <div className="card-body">
        <h3 className="card-title">{supplier?.name}</h3>
        <p>{supplier?.description}</p>
        <h3 className="text-xl">Contact Info</h3>
        <div>
          <p>Location: Souq Munuki</p>
          <p>Manager: {supplier?.contactName}</p>
          <p>{supplier?.contactEmail}</p>
        </div>
      </div>
    </div>
  );
};
