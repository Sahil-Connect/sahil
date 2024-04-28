type TabItem = {
  icon?: React.ReactNode;
  label: string;
  param: string;
  component: React.ReactNode;
};

type TabsProps = {
  items: TabItem[];
  onTabClick: (param: string) => void;
  currentTab: string;
};

export const Tabs = ({ items, onTabClick, currentTab }: TabsProps) => {
  return (
    <div className="tabs tabs-boxed">
      {items.map((tab, index) => (
        <a
          key={index}
          className={`tab gap-2 ${
            tab.param === currentTab ? "tab-active" : ""
          }`}
          onClick={() => onTabClick(tab.param)}
        >
          {tab.icon} {tab.label}
        </a>
      ))}
    </div>
  );
};
