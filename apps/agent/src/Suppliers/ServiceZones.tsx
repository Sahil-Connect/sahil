const zones = [
  {
    id: 1,
    name: "Hai Thoura",
  },
  {
    id: 2,
    name: "Atlabara",
  },
  {
    id: 3,
    name: "Gudelle",
  },
  {
    id: 4,
    name: "Custom Market",
  },
];

export const ServiceZones = () => {
  return (
    <div className="card card-compact shadow">
      <div className="card-body">
        <h3 className="text-xl">Service Zones</h3>
        <div className="flex flex-wrap gap-2">
          {zones.map((zone) => (
            <div className="badge badge-md" key={zone.id}>
              {zone.name}
            </div>
          ))}
        </div>
        <div className="card-actions">
            <button className="btn btn-sm btn-primary">Add Zone</button>
            <button className="btn btn-sm">View Map</button>
        </div>
      </div>
    </div>
  );
};
