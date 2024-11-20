import React from 'react';

interface StatsPanelProps {
  totalOrders: number;
  pendingOrders: number;
  completedOrders: number;
}

const StatsPanel = ({
  totalOrders,
  pendingOrders,
  completedOrders
}: StatsPanelProps) => {
  return (
    <div className="w-64">
      <div className="px-2 py-4 space-y-6">
        <h3 className="font-medium text-sm text-gray-500">Overview</h3>
        
        <div className="space-y-6">
          <div className="space-y-2">
      
            <div className="stats stats-vertical w-full">
              <div className="stat">
                <div className="stat-title">Total Orders</div>
                <div className="stat-value text-primary">{totalOrders}</div>
                <div className="stat-desc">All time orders</div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
    
            <div className="stats stats-vertical w-full">
              <div className="stat">
                <div className="stat-title">Pending</div>
                <div className="stat-value text-warning">{pendingOrders}</div>
                <div className="stat-desc">Awaiting processing</div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="stats stats-vertical w-full">
              <div className="stat">
                <div className="stat-title">Delivered</div>
                <div className="stat-value text-success">{completedOrders}</div>
                <div className="stat-desc">Successfully delivered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPanel; 