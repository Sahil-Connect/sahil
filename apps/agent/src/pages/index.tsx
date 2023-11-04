import {
  AgentStats,
  AgentToolBar,
  LatestOrders,
  SuppliersOverview,
  BusinessesOverview,
} from "@/Dashboard";

export default function Home() {
  return (
    <section className="space-y-4">
      <AgentToolBar />
      <AgentStats />
      <LatestOrders />
      <BusinessesOverview />
      <SuppliersOverview />
    </section>
  );
}
