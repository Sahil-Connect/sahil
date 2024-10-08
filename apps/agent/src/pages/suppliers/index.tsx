import { ListSuppliers } from "@sahil/features/Suppliers";
import FilterSuppliersModal from "@sahil/features/Suppliers/FilterSuppliersModal";
import { HiPlus } from "react-icons/hi2";
import { SectionHeader } from "ui";

const actions = [
  {
    label: "Register Supplier",
    icon: <HiPlus />,
    href: "/suppliers/register/business_info",
    primary: true,
  },
];

export default function Suppliers() {
  return (
    <SectionHeader title="Suppliers" actions={actions}>
      <ListSuppliers />
    </SectionHeader>
  );
}
