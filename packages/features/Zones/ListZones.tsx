import { List, ListHeader, ListErrorState, ListPagination } from "ui";
import { ZoneOverviewCard } from "./ZoneOverviewCard";


const zones = [
  {
    id: 1,
    name: "Zone 1",
    description: "Zone 1 description",
  },
  {
    id: 2,
    name: "Zone 2",
    description: "Zone 2 description",
  },
  {
    id: 3,
    name: "Zone 3",
    description: "Zone 3 description",
  },
];

export const ListZones = () => {
  return (
    <section className="space-y-4">
      <ListHeader size={zones.length} sizeLabel="Zones" title="Zones">
        <></>
      </ListHeader>
      <List
        data={zones}
        loading={false}
        cols={4}
        renderItem={(zone) => (
          // @ts-ignore
          <ZoneOverviewCard key={zone.id} zone={zone} />
        )}
      />
    </section>
  );
};