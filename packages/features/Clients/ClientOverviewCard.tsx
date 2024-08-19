export const ClientOverviewCard = ({ client }: { client: any }) => {
  return (
    <div className="card card-compact">
      <div className="card-body">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <div className="text-sm font-medium text-gray-900">
              {client.name}
            </div>
            <div className="text-sm text-gray-500">{client.email}</div>
          </div>
          <div className="flex flex-col items-end">
            <div className="text-sm font-medium text-gray-900">
              {client.phone}
            </div>
            <div className="text-sm text-gray-500">
              {client.address.city}, {client.address.state}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};