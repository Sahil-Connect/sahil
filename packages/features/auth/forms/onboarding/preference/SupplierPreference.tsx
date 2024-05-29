import { useFetchSupplierCategories } from "@sahil/lib/hooks/suppliers";
import { formatCategoryName } from "@sahil/lib/strings";
import { CheckBoxGroup } from "ui";

type Props = {
  register: any;
  errors: any;
};

const SupplierPreference = ({ register, errors }: Props) => {
  const { data } = useFetchSupplierCategories();

  const options =
    (data as any[])?.map(({ name }) => {
      return {
        label: formatCategoryName(name),
        value: name,
      };
    }) || [];

  return (
    <>
      <CheckBoxGroup
        label="Supplier Categories"
        name="supplier.categories"
        options={options}
        register={register}
        errors={errors}
      />
    </>
  );
};

export default SupplierPreference;
