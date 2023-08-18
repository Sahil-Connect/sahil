export const ClientOverviewCard = ({ client }) => {
  return (
    <div className="card w-96 bg-base-200 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{client.name}</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View Business</button>
        </div>
      </div>
    </div>
  );
};
