type TabItem = {
  icon?: React.ReactNode;
  label: string;
  value: string;
};

type TabsProps = {
  items: TabItem[];
  onTabClick: (value: string) => void;
  currentTab: string;
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
