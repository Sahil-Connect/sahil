export const tabs = ["info", "preferences", "progress"] as const;
export const INITIAL_TAB = "info";

type TabItem = {
  icon?: React.ReactNode;
  label: string;
  value: (typeof tabs)[number];
};

type TabsProps = {
  items: TabItem[];
  onTabClick: (value: typeof INITIAL_TAB) => void;
  currentTab: (typeof tabs)[number];
};

export const Tabs = ({ items, onTabClick, currentTab }: TabsProps) => {
  return (
    <div className="tabs tabs-boxed">
      {items.map((tab, index) => (
        <a
          key={index}
          className={`tab gap-2 ${
            tab.value === currentTab ? "tab-active" : ""
          }`}
          onClick={() => onTabClick(tab.value)}
        >
          {tab.icon} {tab.label}
        </a>
      ))}
    </div>
  );
};
