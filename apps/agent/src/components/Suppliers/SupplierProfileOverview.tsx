export const SupplierProfileOverview = ({ supplier }) => {
  return (
    <div>
      <h3 className="text-2xl">{supplier.name}</h3>
      <p>{supplier.description}</p>
      <h3 className="text-xl">Contact Info</h3>
      <p>Location: Souq Munuki</p>
      <p>Manager: {supplier.contactName}</p>
      <p>{supplier.contactEmail}</p>
    </div>
  );
};
