import { Card } from "ui";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { AgentStats } from "@/Dashboard/AgentStats";
import { AgentToolBar } from "@/Dashboard/AgentToolBar";
import { LatestOrders } from "@/Dashboard/LatestOrders";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="space-y-4">
        <AgentToolBar />
        <AgentStats />
        <LatestOrders />
        <div className="space-y-2 basis-2/5 grow">
          <div className="flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <h3 className="text-lg">Businesses</h3>
              <div className="badge badge-accent">34 businesses</div>
            </div>
            <button className="btn btn-xs btn-secondary">View All</button>
          </div>
          <div className="flex gap-2">
            <div className="basis-1/4">
              <Card title="Milk 7L" titleSize="sm">
                <p>Cheben Gabriel</p>
              </Card>
            </div>
            <div className="basis-1/4">
              <Card title="Milk 7L" titleSize="sm">
                <p>Cheben Gabriel</p>
              </Card>
            </div>
          </div>
        </div>
        <div className="space-y-2 basis-2/5 grow">
          <div className="flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <h3 className="text-lg">Suppliers</h3>
              <div className="badge badge-accent">9 suppliers</div>
            </div>
            <button className="btn btn-xs btn-secondary">View All</button>
          </div>
          <div className="flex gap-2">
            <div className="basis-1/4">
              <Card title="Milk 7L" titleSize="sm">
                <p>Cheben Gabriel</p>
              </Card>
            </div>
            <div className="basis-1/4">
              <Card title="Milk 7L" titleSize="sm">
                <p>Cheben Gabriel</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
