import { Input } from "ui";

type Props = {
  register: any;
  errors: any;
};

export const SupplierRoleDetails = ({ register, errors }: Props) => {
  return (
    <>
      <div className="flex items-center flex-wrap">
        <Input
          name="supplier.name"
          label="Supplier Name"
          placeholder="Keji Lumuro"
          register={register}
          errors={errors}
        />
        <Input
          name="supplier.streetAddress"
          label="Supplier Street Address"
          register={register}
          errors={errors}
        />
      </div>
      <div className="flex items-center flex-wrap">
        <Input
          name="supplier.contactName"
          label="Contact Name"
          placeholder="Keji Lumuro"
          register={register}
          errors={errors}
        />
        <Input
          name="supplier.contactEmail"
          type="email"
          label="Supplier Contact Email"
          placeholder="user@example.app"
          register={register}
          errors={errors}
        />
        <Input
          name="supplier.phoneNumber"
          type="tel"
          label="Supplier Contact Number"
          placeholder="+211"
          register={register}
          errors={errors}
        />
      </div>
    </>
  );
};
