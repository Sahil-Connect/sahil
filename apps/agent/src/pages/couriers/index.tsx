import { ListCouriers } from "@sahil/features/Couriers/ListCouriers";
import { HiOutlinePlus, HiOutlineMap } from "react-icons/hi2";
import { SectionHeader } from "ui";
import { useUser } from "@sahil/features/auth/UserContext";


const actions = [
  {
    label: "Track Courier",
    icon: <HiOutlineMap />,
    href: "/couriers/track",
  },
  {
    label: "Register Courier",
    icon: <HiOutlinePlus />,
    href: "/couriers/register/personal_info",
    primary: true,
  },
];

export default function CouriersPage() {
  const { currentUser } = useUser();
  return (
    <section className="space-y-4">
      <SectionHeader title="Couriers" actions={actions}>
        <ListCouriers />
      </SectionHeader>
    </section>
  );
}
