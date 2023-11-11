import { HiPlus } from "react-icons/hi2";
import { IconButton, Select, Stats, Stat } from "ui";

const stats: Stat[] = [
  {
    title: "Reports",
    value: 9,
    desc: "Nov 1st - Dec 1st",
    trend: "negative",
    percentage: 2,
  },
  {
    title: "Registered Businesses",
    value: 4,
    desc: "Nov 1st - Dec 1st",
    trend: "positive",
    percentage: 3,
  },
  {
    title: "Processed Orders",
    value: 7,
    desc: "Nov 1st - Dec 1st",
    trend: "positive",
    percentage: 15,
  }
];

export const CourierStats = () => {
  return (
    <Stats stats={stats} />
  );
};
