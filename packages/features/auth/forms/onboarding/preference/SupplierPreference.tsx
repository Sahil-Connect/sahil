import { useFetchSupplierCategories } from "@sahil/lib/hooks/suppliers";
import { formatCategoryName } from "@sahil/lib/strings";
import { CheckBoxGroup } from "ui";

type Props = {
  register: any;
  errors: any;
};

const SupplierPreference = ({ register, errors }: Props) => {
  const { data, loading } = useFetchSupplierCategories();

  const options = (data as any[])?.map(({ name }) => {
    return {
      label: formatCategoryName(name),
      value: name,
    };
  });

  return (
    <>
      {loading ? (
        <div className="w-full  max-w-lg mt-4">
          <label>Supplier Categories</label>
          <div className="h-20 bg-slate-600 rounded animate-pulse mt-2"></div>
        </div>
      ) : (
        <CheckBoxGroup
          label="Supplier Categories"
          name="supplier.categories"
          options={options}
          register={register}
          errors={errors}
        />
      )}
    </>
  );
};

export default SupplierPreference;
