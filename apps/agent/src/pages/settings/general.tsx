import { ReactNode } from "react";
import { 
  SettingsSection, 
  Sidebar, 
  settingslinks, 
  SettingsContainer 
} from "ui";
import { GeneralCard } from "@sahil/features/Settings/GeneralCard";

type SidebarProps = {
  children: ReactNode;
};

export default function GeneralSettings({ children, ...props }: SidebarProps) {
  return (
    <SettingsSection>
      <Sidebar
        links={settingslinks}
      />
      <div className="w-full flex flex-col gap-y-11">
        <SettingsContainer>
          <GeneralCard />
        </SettingsContainer>
      </div>
    </SettingsSection>
  );
}
