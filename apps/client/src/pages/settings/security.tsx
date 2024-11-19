import { ReactNode } from "react";
import { 
  SettingsSection, 
  Sidebar, 
  settingslinks, 
  SettingsContainer 
} from "ui";
import { SecurityCard } from "@sahil/features/Settings/SecurityCard";

type SidebarProps = {
  children: ReactNode;
};

export default function SecuritySettings({ children, ...props }: SidebarProps) {
  return (
    <SettingsSection>
      <Sidebar
        links={settingslinks}
      />
      <div className="w-full flex flex-col gap-y-11">
        <SettingsContainer>
          <SecurityCard />
        </SettingsContainer>
      </div>
    </SettingsSection>
  );
}
