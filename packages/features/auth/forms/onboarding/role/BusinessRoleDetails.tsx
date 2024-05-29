import { useFetchBusinessTypes } from "@sahil/lib/hooks/businesses";
import { Input, Select, TextArea } from "ui";

type Props = {
  register: any;
  errors: any;
};

const BusinessRoleDetails = ({ register, errors }: Props) => {
  const { data, loading } = useFetchBusinessTypes();

  const types = (data as any[])?.map(({ type }) => type);

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
        {loading ? (
          <div className="w-full  max-w-lg mt-4">
            <label>Business Type</label>
            <div className="h-10 bg-slate-600 rounded animate-pulse"></div>
          </div>
        ) : (
          <Select
            name="business.type"
            label="Business Type"
            options={types}
            register={register}
            errors={errors}
          />
        )}
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
