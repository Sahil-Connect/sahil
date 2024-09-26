import { ListCouriers } from "@sahil/features/Couriers/ListCouriers";
import { HiOutlinePlus, HiOutlineMap } from "react-icons/hi2";
import { SectionHeader } from "ui";

const actions = [
  {
    label: "Track Courier",
    icon: <HiOutlineMap />,
    href: "/couriers/track"
  },
  {
    label: "Register Courier",
    icon: <HiOutlinePlus />,
    href: "/couriers/register/personal_info",
    primary: true
  }
];

export default function CouriersPage() {
  return (
    <SectionHeader title="Couriers" actions={actions}>
      <ListCouriers />
    </SectionHeader>
  );
}
