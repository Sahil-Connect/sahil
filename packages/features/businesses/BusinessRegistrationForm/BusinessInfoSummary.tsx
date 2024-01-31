import { useState } from "react";
import { Card, Spinner, FormControl } from "ui";
import { HiArrowSmallRight, HiOutlineCheckCircle } from "react-icons/hi2";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";
import {
  useRegisterBusiness,
  useRegisterBusinessSubscription,
} from "@sahil/lib/hooks/businesses";
import { useBusinessFormStore } from "@sahil/lib/hooks/useBusinessFormStore";

export const BusinessInfoSummary = () => {
  const [actionId, setActionId] = useState<string>("");
  const { formData } = useBusinessFormStore();
  const router = useRouter();

  const { data, loading: subscriptionLoading } =
    useRegisterBusinessSubscription(actionId);

  const { error, loading, registerBusinessAction } = useRegisterBusiness();
  const onSubmit = async () => {
    const business = await registerBusinessAction({
      variables: {
        object: {
          name: formData.name,
        },
      },
    });
    setActionId(business?.data?.registerBusinessAction);
    router.push(`/businesses/${data?.output?.id}`);
  };

  if (error) {
    toast.error("This didn't work.");
  }
  return (
    <>
      <div className="space-y-2">
        <Card title="Business Info" titleSize="sm">
          <FormControl label="Business Name">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder={formData.name as string}
                className="input input-sm input-bordered w-full max-w-lg"
                readOnly={true}
              />
              <span className="p-2 rounded-md bg-success text-white">
                <HiOutlineCheckCircle />
              </span>
            </div>
          </FormControl>
          {formData.businessType && (
            <FormControl label="Business Type">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder={formData.businessType as string}
                  className="input input-sm input-bordered w-full max-w-lg"
                  readOnly={true}
                />
                <span className="p-2 rounded-md bg-success text-white">
                  <HiOutlineCheckCircle />
                </span>
              </div>
            </FormControl>
          )}
        </Card>
        <Card title="Address Information" titleSize="sm">
          <FormControl label="Street Name">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder={formData.streetName as string}
                className="input input-sm input-bordered w-full max-w-lg"
                readOnly={true}
              />
              <span className="p-2 rounded-md bg-success text-white">
                <HiOutlineCheckCircle />
              </span>
            </div>
          </FormControl>
        </Card>
        <Card title="Business Preferences" titleSize="sm">
          <FormControl label="Preferred Contact Method">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder={formData.preferredContactMethod as string}
                className="input input-sm input-bordered w-full max-w-lg"
                readOnly={true}
              />
              <span className="p-2 rounded-md bg-success text-white">
                <HiOutlineCheckCircle />
              </span>
            </div>
          </FormControl>
          {formData.preferredPaymentMethod && (
            <FormControl label="Preferred Payment Method">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder={formData.preferredPaymentMethod as string}
                  className="input input-sm input-bordered w-full max-w-lg"
                  readOnly={true}
                />
                <span className="p-2 rounded-md bg-success text-white">
                  <HiOutlineCheckCircle />
                </span>
              </div>
            </FormControl>
          )}
        </Card>
        <div className="btn btn-sm btn-primary w-fit">
          <input type="submit" value="Continue" onClick={onSubmit} />
          {loading ? <Spinner /> : <HiArrowSmallRight />}
        </div>
      </div>
      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
};
