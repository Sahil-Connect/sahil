export type TabValue = "info" | "preferences" | "progress";
export const tabs = ["info", "preferences", "progress"] as const;
export const INITIAL_TAB = "info";

type TabItem = {
  icon?: React.ReactNode;
  label: string;
  value: TabValue;
};

type TabsProps = {
  items: TabItem[];
  onTabClick: (value: TabValue) => void;
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
