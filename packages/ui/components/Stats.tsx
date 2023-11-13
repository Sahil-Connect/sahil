import { FC } from "react";
export type StatTrend = "positive" | "negative";
import type { IconType } from "react-icons";
import { Icon } from "./Icon";
import { HiOutlineTruck } from "react-icons/hi2";

export type Stat = {
  title: string;
  value: string | number;
  desc?: string;
  trend?: StatTrend;
  icon?: IconType;
  brandIcon?: IconType;
  percentage?: number;
};

export type StatProps = {
  stats: Stat[];
};

export const Stats: FC<StatProps> = ({ stats }) => {
  return (
    <div className="stats shadow-sm w-full">
      {stats.map(
        ({ icon, title, value, desc, trend, brandIcon, percentage }, index) => (
          <div className="stat" key={index}>
            {icon && (
              <div
                className={`stat-figure ${
                  trend === "positive" ? "text-primary" : "text-error"
                }`}
              >
                {percentage && (
                  <span
                    className={`text-sm ${
                      trend === "positive" ? "text-primary" : "text-error"
                    }`}
                  >
                    {percentage}%
                  </span>
                )}{" "}
                <Icon icon={icon} />
              </div>
            )}
            <div className="flex items-center gap-4">
              {brandIcon && (
                <div
                  className={`bg-primary text-white p-2 w-fit shadow-sm rounded `}
                >
                  <Icon icon={brandIcon} />
                </div>
              )}
              <div>
                <div className="stat-title">{title}</div>
                <div className="stat-value">{value}</div>
                {desc && <div className="stat-desc">{desc}</div>}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};
