import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { useOnBoardingFormStore } from "@sahil/lib/hooks/formStores/useOnBoardingFormStore";
import { daysOfWeek, defaultShift, WORK_SCHEDULE_SCHEMA } from "./constants";
import { Card, CheckBoxGroup, Input } from "ui";
import { HiMiniPlus, HiArrowSmallRight, HiXMark } from "react-icons/hi2";

type FormData = z.infer<typeof WORK_SCHEDULE_SCHEMA>;

type WorkScheduleProps = {
  navigateToNextStep: (step: string) => void;
};

export const WorkSchedule = ({ navigateToNextStep }: WorkScheduleProps) => {
  const { updateStepFormData } = useOnBoardingFormStore((state) => state);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(WORK_SCHEDULE_SCHEMA),
    defaultValues: {
      days: ["0", "1", "2", "3", "4", "5", "6"],
      shifts: [defaultShift],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "shifts",
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const validatedInput = WORK_SCHEDULE_SCHEMA.parse(data);

    const schedule = {
      days: validatedInput.days,
      shifts: validatedInput.shifts,
    };
    updateStepFormData({ schedule });
    navigateToNextStep("preferences");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <div className="space-y-4">
          <CheckBoxGroup
            name="days"
            register={register}
            errors={errors}
            options={daysOfWeek}
            label="Select working days"
          />

          <div>
            <div className="flex items-center justify-between">
              <h4 className="font-medium">Working hours</h4>
              <button
                type="button"
                className="btn btn-sm btn-primary"
                disabled={fields.length >= 3}
                onClick={() => fields.length < 3 && append(defaultShift)}
              >
                New Shift <HiMiniPlus />
              </button>
            </div>

            {fields.map((field, index) => (
              <div key={field.id}>
                <h3>Shift {index + 1}</h3>
                <div className="grid md:grid-cols-2 gap-2">
                  <Input
                    label="Start Time"
                    name={`shifts.${index}.start_time`}
                    type="time"
                    register={register}
                    errors={errors}
                  />
                  <Input
                    label="End Time"
                    name={`shifts.${index}.end_time`}
                    type="time"
                    register={register}
                    errors={errors}
                  />
                </div>
                <button
                  onClick={() => index > 0 && remove(index)}
                  type="button"
                  disabled={index === 0}
                  className="btn btn-sm btn-error w-fit mt-2"
                >
                  Remove <HiXMark />
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-end">
            <button type="submit" className="btn btn-sm btn-primary w-fit">
              Continue <HiArrowSmallRight />
            </button>
          </div>
        </div>
      </Card>
    </form>
  );
};
