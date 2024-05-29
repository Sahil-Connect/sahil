import { RadioGroup } from "ui";
import {
  HiOutlineEnvelope,
  HiOutlineBanknotes,
  HiOutlineDevicePhoneMobile,
  HiOutlineBuildingOffice2,
  HiOutlineTruck,
  HiOutlineCreditCard,
} from "react-icons/hi2";

type Props = {
  register: any;
  errors: any;
  methods: {
    contact: string[];
    delivery: string[];
    payment: string[];
  };
};

const BusinessPreference = ({ register, errors, methods }: Props) => {
  const { contact, delivery, payment } = methods;

  const icons = {
    email: HiOutlineEnvelope,
    phone: HiOutlineDevicePhoneMobile,
    "pick-up": HiOutlineTruck,
    delivery: HiOutlineBuildingOffice2,
    cash: HiOutlineBanknotes,
    credit: HiOutlineCreditCard,
  };

  const contactOptions = contact.map((option) => {
    return {
      label: option,
      value: option,
      icon: icons[option as keyof typeof icons],
    };
  });

  const deliveryOptions = delivery.map((option) => {
    return {
      label: option,
      value: option,
      icon: icons[option as keyof typeof icons],
    };
  });

  const paymentOptions = payment.map((option) => {
    return {
      label: option,
      value: option,
      icon: icons[option as keyof typeof icons],
    };
  });

  return (
    <>
      <RadioGroup
        options={contactOptions}
        label="Preferred Contact Method"
        name="business.contactMethod"
        register={register}
        errors={errors}
      />

      <RadioGroup
        options={deliveryOptions}
        label="Preferred Delivery Method"
        name="business.deliveryMethod"
        register={register}
        errors={errors}
      />

      <RadioGroup
        options={paymentOptions}
        label="Preferred Payment Method"
        name="business.paymentMethod"
        register={register}
        errors={errors}
      />
    </>
  );
};

export default BusinessPreference;
