import { ListBusinesses } from "@sahil/features/businesses/ListBusinesses";
import { HiPlus } from "react-icons/hi2";
import { SectionHeader } from "ui";
import { useUser } from "../../context/UserContext";
const actions = [
  {
    label: "Register Business",
    icon: <HiPlus />,
    href: "/businesses/register/basic_info",
    primary: true,
  },
];

export default function Business() {
  const { currentUser } = useUser();
  return (
    <section className="space-y-4">
      <ListBusinesses />
    </section>
  );
}
