import { ReactNode } from "react";
import { 
  SettingsSection, 
  Sidebar, 
  settingslinks, 
  SettingsContainer 
} from "ui";
import { BillingCard } from "@sahil/features/Settings/BillingCard";

type SidebarProps = {
  children: ReactNode;
};

export default function BillingSettings({ children, ...props }: SidebarProps) {
  return (
    <SettingsSection>
      <Sidebar
        links={settingslinks}
      />
      <div className="w-full flex flex-col gap-y-11">
        <SettingsContainer>
          <BillingCard />
        </SettingsContainer>
      </div>
    </SettingsSection>
  );
}
