import { FC } from "react";
export type StatTrend = "positive" | "negative";
import type { IconType } from "react-icons";
import { Icon } from "./Icon";

export type Stat = {
  title: string;
  value: string | number;
  desc?: string;
  trend?: StatTrend;
  icon?: IconType;
};

export type StatProps = {
  stats: Stat[];
};

export const Stats: FC<StatProps> = ({ stats }) => {
  return (
    <div className="stats border shadow-sm w-full">
      {stats.map(({ icon, title, value, desc }, index) => (
        <div className="stat" key={index}>
          {icon && (
            <div className={"stat-figure text-primary"}>
              <Icon icon={icon} />
            </div>
          )}
          <div className="stat-title">{title}</div>
          <div className="stat-value">{value}</div>
          {desc && <div className="stat-desc">{desc}</div>}
        </div>
      ))}
    </div>
  );
};
