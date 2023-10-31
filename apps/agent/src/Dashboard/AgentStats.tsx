import {
  HiOutlineArrowTrendingDown,
  HiOutlineArrowTrendingUp,
  HiOutlineCalendar
} from "react-icons/hi2";

type Trend = "positive" | "negative";

export const AgentStats = () => {
  const stats = [
    {
      id: 1,
      title: "Reports",
      value: 9,
      description: "Oct 1st - Nov 1st",
      performance: 25,
      icon: <HiOutlineArrowTrendingDown />,
      trend: "negative",
    },
    {
      id: 2,
      title: "Registered Businesses",
      value: 40,
      description: "Oct 1st - Nov 1st",
      performance: 25,
      icon: <HiOutlineArrowTrendingDown />,
      trend: "negative",
    },
    {
      id: 3,
      title: "Processed Orders",
      value: 201,
      description: "Oct 1st - Nov 1st",
      performance: 5,
      icon: <HiOutlineArrowTrendingUp />,
      trend: "positive",
    },
    {
      id: 4,
      title: "Registered Suppliers",
      value: 17,
      description: "Oct 1st - Nov 1st",
      performance: 7,
      icon: <HiOutlineArrowTrendingDown />,
      trend: "negative",
    },
  ];
  return (
    <section className="space-y-2">
      <div className="flex items-center justify-between">
        <h3 className="text-lg">Overview</h3>
        <div>
          <div className="badge gap-2"><HiOutlineCalendar /> October 1st - November 1st </div>
        </div>
      </div>
      <div className="flex gap-2">
        {stats.map((stat) => (
          <div className="grow" key={stat.id}>
            <div className="stats shadow">
              <div className="stat place-items-center">
                <div className="stat-title">{stat.title}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-desc">{stat.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
