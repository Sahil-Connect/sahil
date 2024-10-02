import { Fragment } from "react";
import { z } from "zod";
import { useRouter } from "next/router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { useOnBoardingFormStore } from "@sahil/lib/hooks/formStores/useOnBoardingFormStore";
import { formatCategoryName } from "@sahil/lib/strings";
import {
  daysOfWeek,
  PREFERENCE_SCHEMA,
  ROLE_DETAILS_SCHEMA,
  USER_DETAILS_SCHEMA,
  WORK_SCHEDULE_SCHEMA,
} from "./constants";
import { Card } from "ui";
import { HiArrowSmallRight } from "react-icons/hi2";
import { useOnboardBusiness } from "@sahil/lib/hooks/businesses";
import { useOnboardSupplier } from "@sahil/lib/hooks/suppliers";
import {
  Business_Insert_Input,
  Suppliers_Insert_Input,
  User_Role_Enum,
} from "@sahil/lib/graphql/__generated__/graphql";
import { formatTime } from "@sahil/lib";

type Props = {
  user: any;
  update: any;
};

export const Summary = ({ user, update }: Props) => {
  const router = useRouter();
  const { formData } = useOnBoardingFormStore((state) => state);
  const {
    onboardBusiness,
    loading: businessLoading,
    error: businessError,
  } = useOnboardBusiness();
  const {
    onboardSupplier,
    data: supplierResult,
    loading: supplierLoading,
    error: supplierError,
  } = useOnboardSupplier();

  const role = formData.role as "supplier" | "business";
  // Create schema in two steps to avoid TS error with
  // computed properties (role) on combined schema.
  const baseSchema = z.object({
    ...USER_DETAILS_SCHEMA.shape,
  });
  const combinedSchema = baseSchema.extend({
    [role]: ROLE_DETAILS_SCHEMA.shape[role],
    preference: PREFERENCE_SCHEMA.shape[role],
    schedule: WORK_SCHEDULE_SCHEMA,
  });

  type FormData = z.infer<typeof combinedSchema>;

  const {
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(combinedSchema),
    values: formData as any,
  });

  const onSubmit: SubmitHandler<FormData> = async () => {
    console.log(formData);
    const validatedInput = combinedSchema.parse(formData);

    if (!businessLoading && !supplierLoading) {
      const { business, supplier, preference, schedule } = validatedInput;

      const _schedule = {
        data: {
          days: daysOfWeek.map((day) => schedule?.days.includes(day.value)),
          shifts: {
            data: schedule?.shifts,
          },
        },
      };

      const _role = role as User_Role_Enum;

      switch (_role) {
        case "business":
          const businessObject = {
            ...preference,
            ...business,
            schedule: _schedule,
            owner_id: user?.id,
            registration_channel: "APP",
          } as Business_Insert_Input;

          await onboardBusiness({
            variables: {
              userId: user?.id,
              role: _role,
              object: businessObject,
            },
          });
          break;
        case "supplier":
          const categories = (
            preference as { categories: string[] }
          )?.categories.map((category) => {
            return {
              category_name: category,
            };
          });
          const supplierObject = {
            ...supplier,
            schedule: _schedule,
            user_id: user?.id,
            categories: {
              data: categories,
            },
          } as Suppliers_Insert_Input;

          await onboardSupplier({
            variables: {
              userId: user?.id,
              role: _role,
              object: supplierObject,
            },
          });
          break;

        default:
          break;
      }

      await update();
      router.push(`/`);
    }
  };

  console.log(supplierResult, supplierError);

  const renderForm = () => {
    const preference: any = formData.preference;
    switch (role) {
      case "business":
        const business: any = formData.business;
        return (
          <>
            <div>
              <h3 className="text-lg font-bold">Business Details</h3>
              <p>
                <b>Name:</b> {business?.name}
              </p>
              <p>
                <b>Type:</b> {business?.type}
              </p>
              <p>
                <b>description:</b> {business?.description}
              </p>
              <p>
                <b>Contact Name: </b>
                {business?.contactName}
              </p>
              <p>
                <b>Contact Email: </b>
                {business?.contactEmail}
              </p>
              <p>
                <b>Phone Number: </b>
                {business?.phoneNumber}
              </p>
              {errors[role] && (
                <p className="text-base font-bold text-error">
                  Fill out the Required Business Fields!
                </p>
              )}
            </div>
            <div>
              <h3 className="text-lg font-bold">Preferences</h3>
              <p>
                <b>Contact Method:</b> {preference?.preferredContactMethod}
              </p>
              <p>
                <b>Delivery Method:</b> {preference?.preferredDeliveryMethod}
              </p>
              <p>
                <b>Payment Method:</b> {preference?.preferredPaymentMethod}
              </p>
              {errors.preference && (
                <p className="text-base font-bold text-error">
                  Fill out the Required Preference Fields!
                </p>
              )}
            </div>
          </>
        );
      case "supplier":
        const supplier: any = formData.supplier;
        return (
          <>
            <div>
              <h3 className="text-lg font-bold">Supplier Details</h3>
              <p>
                <b>Name:</b> {supplier?.name}
              </p>
              <p>
                <b>description:</b> {supplier?.description}
              </p>
              <p>
                <b>Street Address:</b> {supplier?.streetAddress}
              </p>
              <p>
                <b>Contact Name: </b>
                {supplier?.contactName}
              </p>
              <p>
                <b>Contact Email: </b>
                {supplier?.contactEmail}
              </p>
              <p>
                <b>Phone Number: </b>
                {supplier?.phoneNumber}
              </p>
              {errors[role] && (
                <p className="text-base font-bold text-error">
                  Fill out the Required Supplier Fields!
                </p>
              )}
            </div>
            <div>
              <h3 className="text-lg font-bold">Preferences</h3>
              <div className="flex gap-2">
                <b>Categories:</b>
                <div className="flex items-center flex-wrap gap-2">
                  {(preference?.categories as string[])?.map((name) => {
                    return (
                      <span
                        key={name}
                        className="badge badge-sm badge-outline opacity-80"
                      >
                        {formatCategoryName(name)}
                      </span>
                    );
                  })}
                </div>
              </div>
              {errors.preference && (
                <p className="text-base font-bold text-error">
                  Fill out the Required Business Fields!
                </p>
              )}
            </div>
          </>
        );
      default:
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card className="space-y-6">
        <div>
          <h3 className="text-lg font-bold">User Details</h3>
          <p>
            <b>Name:</b> {formData?.name}
          </p>
          <p>
            <b>Email:</b> {formData?.email}
          </p>
          <p>
            <b>Role: </b>
            {formData?.role}
          </p>
          {(errors.name || errors.role || errors.email) && (
            <p className="text-base font-bold text-error">
              Fill out the Required User Fields!
            </p>
          )}
        </div>

        {renderForm()}

        <div>
          <h3 className="text-lg font-bold">Work Schedule</h3>

          <div className="mb-1">
            <b>Days of week</b>
            <div className="flex flex-wrap gap-2">
              {daysOfWeek.map((day) => (
                <div key={day.value} className="flex  items-center gap-2">
                  <input
                    type="checkbox"
                    checked={watch("schedule.days").includes(day.value)}
                    readOnly={true}
                  />
                  {day.label}
                </div>
              ))}
            </div>
          </div>
          <div>
            <b>Working hours</b>
            <div className="flex flex-wrap gap-2">
              {watch("schedule.shifts").map((shift, index) => (
                <Fragment key={index}>
                  <span className="flex items-center gap-2">
                    {formatTime(shift.start_time)} -{" "}
                    {formatTime(shift.end_time)}
                  </span>
                  <div className="divider divider-horizontal mx-2 md:mx-4 last:hidden" />
                </Fragment>
              ))}
            </div>
          </div>
        </div>

        {(businessError || supplierError) && (
          <div className="my-4">
            <p className="text-base font-bold text-error">
              An error occurred while creating your account. Please try again.
            </p>
          </div>
        )}

        <div
          className={`btn btn-sm btn-primary w-fit mt-2 ${
            businessLoading || supplierLoading ? "animate-pulse" : ""
          }`}
        >
          <input type="submit" value="Continue" />
          <HiArrowSmallRight />
        </div>
      </Card>
    </form>
  );
};
