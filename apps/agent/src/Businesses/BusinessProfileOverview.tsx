export const BusinessProfileOverview = ({ business }) => {
  return (
    <div className="card card-compact shadow">
      <div className="card-body">
        <div className="avatar placeholder">
          <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
            <span>MX</span>
          </div>
        </div>
        <h3 className="card-title">{business?.name}</h3>
        <p>Registered by: {business?.agent?.name}</p>
      </div>
    </div>
  );
};
