import { ListSuppliers } from "@sahil/features/Suppliers";
import FilterSuppliersModal from "@sahil/features/Suppliers/FilterSuppliersModal";
import { HiPlus } from "react-icons/hi2";
import { SectionHeader } from "ui";
import { CollectionControls } from "@sahil/features/shared/CollectionControls";
import { useUser } from "../../context/UserContext";
const actions = [
  {
    label: "Register Supplier",
    icon: <HiPlus />,
    href: "/suppliers/register/business_info",
    primary: true,
  },
];

export default function Suppliers() {
  const { currentUser } = useUser();
  return (
    <SectionHeader title="Suppliers" actions={actions}>
      <CollectionControls user={currentUser} title="Suppliers" />
      <ListSuppliers />
    </SectionHeader>
  );
}
