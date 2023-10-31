import { HiArrowRight } from "react-icons/hi2";
import { Card } from "ui";

export default function TrackOrdersPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl">Track Orders</h1>
          </div>
        </div>
        <div>
          <Card title="Order Information">
            <form className="space-y-2">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="#ED3413"
                  className="input input-sm input-bordered bg-slate-100"
                />
              </div>
              <div className="btn btn-sm btn-primary">
                <input type="submit" value="Search" />
                <HiArrowRight />
              </div>
            </form>
          </Card>
        </div>
      </div>
    </main>
  );
}
