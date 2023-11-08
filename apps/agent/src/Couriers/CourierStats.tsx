import { HiPlus } from "react-icons/hi2";
import { Stats } from "ui";
export const CourierStats = () => {
  return (
    <Stats className="stats shadow">
      <div className="stat">
        <div className="stat-figure text-primary">
          <HiPlus />
        </div>
        <div className="stat-title">Total Likes</div>
        <div className="stat-value text-primary">25.6K</div>
        <div className="stat-desc">21% more than last month</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <HiPlus />
        </div>
        <div className="stat-title">Page Views</div>
        <div className="stat-value text-secondary">2.6M</div>
        <div className="stat-desc">21% more than last month</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <div className="avatar online">
            <div className="w-16 rounded-full">
              <img
                src="/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt="Courier"
              />
            </div>
          </div>
        </div>
        <div className="stat-value">86%</div>
        <div className="stat-title">Tasks done</div>
        <div className="stat-desc text-secondary">31 tasks remaining</div>
      </div>
    </Stats>
  );
};
