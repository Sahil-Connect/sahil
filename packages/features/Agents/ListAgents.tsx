import { AgentOverviewCard } from "./AgentOverviewCard";
import { List, ListHeader, ListErrorState, ListPagination } from "ui";

const agents = [
  {
    id: "1",
    name: "Agent 1",
    description: "Agent 1 Description",
    status: "Active",
  },
  {
    id: "2",
    name: "Agent 2",
    description: "Agent 2 Description",
    status: "Inactive",
  },
];

export const ListAgents = () => {
  return (
    <section className="space-y-4">
      <ListHeader size={agents.length} sizeLabel="Agents" title="Agents">
        <></>
      </ListHeader>
      <List
        data={agents}
        loading={false}
        cols={4}
        renderItem={(zone) => (
          // @ts-ignore
          <AgentOverviewCard key={zone.id} zone={zone} />
        )}
      />
    </section>
  );
};