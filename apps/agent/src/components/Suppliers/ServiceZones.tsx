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
    <div className="space-y-2">
      <h3 className="text-xl">Service Zones</h3>
      <div className="flex gap-2">
        {zones.map((zone) => (
          <div className="badge badge-md" key={zone.id}>
            {zone.name}
          </div>
        ))}
      </div>
    </div>
  );
};
