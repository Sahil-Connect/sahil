import { Card, RadioGroup } from "ui";
import { FC } from "react";
import { Orders } from "@sahil/lib/graphql/__generated__/graphql";
import { paymentMethods, deliveryMethods, notificationOptions, contactMethodOptions } from "./constants";
import {
  FieldValues,
} from "react-hook-form";
import { BaseInputProps } from "ui/types";

type BaseProps = BaseInputProps<FieldValues> & {
  disabled?: boolean;
};

type RadioGroupProps = BaseProps & {
  options: { value: string; label: string }[];
  disabled?: boolean;
};

type Props = {
  order: Orders;
};

export const NotificationPreference = ({ register, errors, defaultValue, disabled }: RadioGroupProps) => {
  return (
    <RadioGroup
      name="notifyWhen"
      label="Notify when order is ready to fulfill"
      options={notificationOptions}
      defaultValue={defaultValue}
      readOnly={disabled}
      register={register}
      errors={errors}
    />
  );
};

export const ContactMethodPreference = ({ register, errors, defaultValue, disabled }: RadioGroupProps) => {
  return (
    <RadioGroup
      name="contactMethod"
      label="Preferred contact method"
      options={contactMethodOptions}
      defaultValue={defaultValue}
      readOnly={disabled}
      register={register}
      errors={errors}
    />
  );
};

export const PaymentMethodOptions = ({
  register,
  errors,
  defaultValue,
  disabled
}: RadioGroupProps) => {
  return (
    <RadioGroup
      name="paymentMethod"
      label="Payment Method"
      options={paymentMethods}
      defaultValue={defaultValue}
      readOnly={disabled}
      register={register}
      errors={errors}
    />
  );
};

export const OrderDeliveryOptions = ({
  register,
  errors,
  defaultValue,
  disabled
}: RadioGroupProps) => {
  return (
    <RadioGroup
      name="deliveryMethod"
      label="Delivery Method"
      options={deliveryMethods}
      defaultValue={defaultValue}
      readOnly={disabled}
      register={register}
      errors={errors}
    />
  );
};

export const OrderPreferences: FC<Props> = ({ order }) => {
  return (
    <Card
      title="Order Preferences"
      titleSize="sm"
      height="h-fit"
      className="space-y-2 p-2 rounded-xl shadow"
    >
      <div className="flex flex-col md:flex-row gap-2 items-center">
        <div className="grow">
          <PaymentMethodOptions defaultValue={order?.payment_method} disabled={false} />
          <OrderDeliveryOptions defaultValue={order?.delivery_method} disabled={false} />
        </div>
      </div>
      <div className="space-y-2">
        <NotificationPreference defaultValue={order?.notify_when} disabled={false} />
        <ContactMethodPreference defaultValue={order?.contact_method} disabled={false} />
        <div>
          <label htmlFor="undeliverableAction" className="label">Action to take when order can&apos;t be delivered:</label>
          <textarea id="undeliverableAction" className="textarea textarea-bordered w-full" rows={3} placeholder="Enter instructions here"></textarea>
          <button className="btn btn-sm btn-primary">Save</button>
        </div>
      </div>
    </Card>
  );
};
