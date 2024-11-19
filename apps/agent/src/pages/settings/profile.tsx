import { ReactNode } from "react";
import { 
  SettingsSection, 
  Sidebar, 
  settingslinks, 
  SettingsContainer 
} from "ui";
import { ProfileCard } from "@sahil/features/Settings/ProfileCard";
import { DeleteAccountCard } from "@sahil/features/Settings/DeleteAccountCard";

type SidebarProps = {
  children: ReactNode;
};

export default function ProfileSettings({ children, ...props }: SidebarProps) {

  return (
    <SettingsSection>
      <Sidebar
        links={settingslinks}
      />
      <div className="w-full flex flex-col gap-y-11">
        <SettingsContainer>
          <ProfileCard />
        </SettingsContainer>
        
        <SettingsContainer className="bg-zinc-100">
          <DeleteAccountCard />
        </SettingsContainer>
      </div>
    </SettingsSection>
  );
}
