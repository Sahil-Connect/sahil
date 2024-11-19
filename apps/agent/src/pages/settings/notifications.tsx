import { ReactNode } from "react";
import { 
  SettingsSection, 
  Sidebar, 
  settingslinks, 
  SettingsContainer 
} from "ui";
import { NotificationsCard } from "@sahil/features/Settings/NotificationsCard";

type SidebarProps = {
  children: ReactNode;
};

export default function NotificationsSettings({ children, ...props }: SidebarProps) {
  return (
    <SettingsSection>
      <Sidebar
        links={settingslinks}
      />
      <div className="w-full flex flex-col gap-y-11">
        <SettingsContainer>
          <NotificationsCard />
        </SettingsContainer>
      </div>
    </SettingsSection>
  );
}
