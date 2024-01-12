import { HiArrowSmallRight } from "react-icons/hi2";
import { Card } from "ui";

import React from "react";

export default function TrackOrdersPage() {
  return (
    <main className="space-y-2">
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
                  className="input input-sm input-bordered bg-gray-100"
                />
              </div>
              <div className="btn btn-sm btn-primary">
                <input type="submit" value="Search" />
                <HiArrowSmallRight />
              </div>
            </form>
          </Card>
        </div>
      </div>
    </main>
  );
}
