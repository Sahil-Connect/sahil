export const SupplierProfileOverview = ({ supplier }) => {
  return (
    <div className="card card-compact shadow">
      <div className="card-body">
        <div className="avatar placeholder">
          <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
            <span className="text-xl">ED</span>
          </div>
        </div>
        <h2 className="card-title">{supplier?.name}</h2>
        <p>{supplier?.description}</p>
        <div className="divider">Contact Info</div>
        <div>
          <p>Souq Munuki</p>
          <p>{supplier?.contactName}</p>
          <p>{supplier?.contactEmail}</p>
        </div>
      </div>
    </div>
  );
};