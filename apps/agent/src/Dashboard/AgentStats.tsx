import {
  HiOutlineArrowTrendingDown,
  HiOutlineArrowTrendingUp,
  HiOutlineCalendar,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineBriefcase,
  HiOutlineTruck,
  HiOutlineClipboardDocument,
} from "react-icons/hi2";
import { IconButton, Select, Stats, Stat } from "ui";

const stats: Stat[] = [
  {
    title: "Reports",
    value: 9,
    desc: "Nov 1st - Dec 1st",
    icon: HiOutlineArrowTrendingDown,
    trend: "negative",
    percentage: 2,
    brandIcon: HiOutlineClipboardDocument,
  },
  {
    title: "Registered Businesses",
    value: 4,
    desc: "Nov 1st - Dec 1st",
    icon: HiOutlineArrowTrendingUp,
    trend: "positive",
    percentage: 3,
    brandIcon: HiOutlineBriefcase,
  },
  {
    title: "Processed Orders",
    value: 7,
    desc: "Nov 1st - Dec 1st",
    icon: HiOutlineArrowTrendingUp,
    trend: "positive",
    percentage: 15,
    brandIcon: HiOutlineCalendar,
  },
  {
    title: "Registered Suppliers",
    value: 5,
    desc: "Nov 1st - Dec 1st",
    icon: HiOutlineArrowTrendingDown,
    trend: "negative",
    percentage: 5,
    brandIcon: HiOutlineTruck,
  },
];

const intervals = [
  { id: 1, title: "Last 7 Days", active: false },
  { id: 2, title: "Last 30 Days", active: true },
  { id: 3, title: "All Time", active: false },
];

export const AgentStats = () => {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between bg-slate-200">
        <h3 className="text-lg">Overview</h3>
        <div className="flex items-center gap-2">
          {intervals.map((interval) => (
            <div key={interval.id} className={"badge bg-rose-200"}>
              {interval.title}
            </div>
          ))}
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
