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
  currentTab: TabValue;
  className?: string;
};

export const Tabs = ({ items, onTabClick, currentTab, className = "" }: TabsProps) => {
  return (
    <div className={`tabs tabs-boxed flex flex-wrap ${className}`}>
      {items.map((tab, index) => (
        <a
          key={index}
          className={`tab gap-2 flex-grow sm:flex-grow-0 ${
            tab.value === currentTab ? "tab-active" : ""
          }`}
          onClick={() => onTabClick(tab.value)}
        >
          <span className="sm:hidden">{tab.icon}</span>
          <span className="hidden sm:inline">{tab.icon}</span>
          <span className="hidden sm:inline">{tab.label}</span>
        </a>
      ))}
    </div>
  );
};
