import { Input, Select, TextArea } from "ui";

type Props = {
  register: any;
  errors: any;
  businessTypes: string[];
};

const BusinessRoleDetails = ({ register, errors, businessTypes }: Props) => {
  return (
    <>
      <div className="flex items-center flex-wrap">
        <Input
          name="business.name"
          label="Business Name"
          placeholder="Keji Lumuro"
          register={register}
          errors={errors}
        />
        <Select
          name="business.type"
          label="Business Type"
          options={businessTypes}
          register={register}
          errors={errors}
        />
      </div>
      <TextArea
        name="business.description"
        label="Business description"
        register={register}
        errors={errors}
      />
      <div className="flex items-center flex-wrap">
        <Input
          name="business.contactName"
          label="Contact Name"
          placeholder="Keji Lumuro"
          register={register}
          errors={errors}
        />
        <Input
          name="business.contactEmail"
          type="email"
          label="Business Contact Email"
          placeholder="user@example.app"
          register={register}
          errors={errors}
        />
        <Input
          name="business.phoneNumber"
          type="tel"
          label="Business Contact Number"
          placeholder="+211"
          register={register}
          errors={errors}
        />
      </div>
    </>
  );
};

export default BusinessRoleDetails;
