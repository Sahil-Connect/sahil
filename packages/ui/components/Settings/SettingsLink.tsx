
import { HiOutlineUser, HiOutlineAdjustmentsHorizontal, HiOutlineBell, HiOutlineCreditCard, HiOutlineShieldCheck } from "react-icons/hi2";

interface SettingsLinks {
  name: string;
  href: string;
  icon: any;
}

export const settingslinks: SettingsLinks[] = [
  {
    name: "Profile",
    href: "/settings/profile",
    icon: HiOutlineUser,  
  },
  {
    name: "General",
    href: "/settings/general",
    icon: HiOutlineAdjustmentsHorizontal,
  },
  {
    name: "Notifications",
    href: "/settings/notifications",
    icon: HiOutlineBell,
  },
  {
    name: "Billing",
    href: "/settings/billing",
    icon: HiOutlineCreditCard,
  },
  {
    name: "Security",
    href: "/settings/security",
    icon: HiOutlineShieldCheck,
  },
];
