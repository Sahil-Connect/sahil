import { Card, RadioGroup } from "ui";
import { FC } from "react";
import { Orders } from "@sahil/lib/graphql/__generated__/graphql";
import { paymentMethods, deliveryMethods, notificationOptions, contactMethodOptions } from "./constants";
import {
  FieldValues,
  useForm,
} from "react-hook-form";
import { BaseInputProps } from "ui/types";

type BaseProps = BaseInputProps<FieldValues> & {
  disabled?: boolean;
};

type RadioGroupProps = Partial<BaseProps> & {
  options: { value: string; label: string }[];
  disabled?: boolean;
};

type Props = {
  order: Orders;
};

export const NotificationPreference = ({ register, errors, defaultValue, disabled }: any) => {
  return (
    <RadioGroup
      name="notifyWhen"
      label="Notify when order is ready to fulfill"
      options={notificationOptions}
      defaultValue={defaultValue}
      readOnly={disabled}
      register={register}
      errors={errors ?? {}}
    />
  );
};

export const ContactMethodPreference = ({ register, errors, defaultValue, disabled }: any) => {
  return (
    <RadioGroup
      name="contactMethod"
      label="Preferred contact method"
      options={contactMethodOptions}
      defaultValue={defaultValue}
      readOnly={disabled}
      register={register}
      errors={errors ?? {}}
    />
  );
};

export const PaymentMethodOptions = ({
  register,
  errors,
  defaultValue,
  disabled
}: any) => {
  return (
    <RadioGroup
      name="paymentMethod"
      label="Payment Method"
      options={paymentMethods}
      defaultValue={defaultValue}
      readOnly={disabled}
      register={register}
      errors={errors ?? {}}
    />
  );
};

export const OrderDeliveryOptions = ({
  register,
  errors,
  defaultValue,
  disabled
}: any) => {
  return (
    <RadioGroup
      name="deliveryMethod"
      label="Delivery Method"
      options={deliveryMethods}
      defaultValue={defaultValue}
      readOnly={disabled}
      register={register}
      errors={errors ?? {}}
    />
  );
};

export const OrderPreferences: FC<Props> = ({ order }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
    defaultValues: {
      paymentMethod: "",
      deliveryMethod: "",
      notifyWhen: "",
      contactMethod: "",
      undeliverableAction: "",
    }
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <Card
      title="Order Preferences"
      titleSize="sm"
      height="h-fit"
      className="space-y-2 p-2 rounded-xl shadow"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col md:flex-row gap-2 items-center">
          <div className="grow">
            <PaymentMethodOptions
              register={register}
              errors={errors}
              defaultValue=""
              disabled={false}
            />
            <OrderDeliveryOptions
              register={register}
              errors={errors}
              defaultValue=""
              disabled={false}
            />
          </div>
        </div>
        <div className="space-y-2">
          <NotificationPreference
            register={register}
            errors={errors}
            defaultValue=""
            disabled={false}
          />
          <ContactMethodPreference
            register={register}
            errors={errors}
            defaultValue=""
            disabled={false}
          />
          <div>
            <label htmlFor="undeliverableAction" className="label">Action to take when order can&apos;t be delivered:</label>
            <textarea
              id="undeliverableAction"
              className="textarea textarea-bordered w-full"
              rows={3}
              placeholder="Enter instructions here"
              {...register("undeliverableAction")}
            ></textarea>
            <button type="submit" className="btn btn-sm btn-primary">Save</button>
          </div>
        </div>
      </form>
    </Card>
  );
};
