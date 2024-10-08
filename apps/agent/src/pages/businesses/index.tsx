import { ListBusinesses } from "@sahil/features/businesses/ListBusinesses";
import { HiPlus } from "react-icons/hi2";
import { SectionHeader } from "ui";

const actions = [
  {
    label: "Register Business",
    icon: <HiPlus />,
    href: "/businesses/register/basic_info",
    primary: true,
  },
];

export default function Business() {
  return (
    <SectionHeader title="Businesses" actions={actions}>
      <ListBusinesses />
    </SectionHeader>
  );
}
