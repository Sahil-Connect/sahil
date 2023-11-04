import {
  HiOutlineArrowTrendingDown,
  HiOutlineArrowTrendingUp,
  HiOutlineCalendar,
  HiOutlineChevronLeft,
  HiOutlineChevronRight
} from "react-icons/hi2";
import { IconButton, Select, Stats, Stat } from "ui";

const stats: Stat[] = [
  {
    title: "Reports",
    value: 9,
    desc: "Oct 1st - Nov 1st",
    icon: HiOutlineArrowTrendingDown,
    trend: "negative",
  },
  {
    title: "Registered Businesses",
    value: 40,
    desc: "Oct 1st - Nov 1st",
    icon: HiOutlineArrowTrendingDown,
    trend: "negative",
  },
  {
    title: "Processed Orders",
    value: 201,
    desc: "Oct 1st - Nov 1st",
    icon: HiOutlineArrowTrendingUp,
    trend: "positive",
  },
  {
    title: "Registered Suppliers",
    value: 17,
    desc: "Oct 1st - Nov 1st",
    icon: HiOutlineArrowTrendingDown,
    trend: "negative",
  },
];

const intervals = [
  "Week",
  "Month"
]

export const AgentStats = () => {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between bg-slate-200">
        <h3 className="text-lg">Overview</h3>
        <div className="flex items-center gap-2">
          <Select options={intervals} title="Period" />
          <IconButton title="Left" icon={HiOutlineChevronLeft} />
          <div className="badge py-4 gap-2">
            <HiOutlineCalendar /> October 1st - November 1st{" "}
          </div>
          <IconButton title="Right" icon={HiOutlineChevronRight} />
        </div>
      </div>
      <Stats stats={stats} />
    </section>
  );
};
