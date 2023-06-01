import { DateTime, DurationObjectUnits } from "luxon";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import Arrow from "../../assets/arrowIcon";
import Input from "../input";

import { DAY_ERRORS, MONTH_ERRORS, YEAR_ERRORS } from "../../constants";
import { IFormInput } from "../../types";

type Props = {
  setAge: (data: DurationObjectUnits) => void;
};

export default function Form({ setAge }: Props) {
  const [isValid, setIsValid] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const { day, month, year } = data;

    const now = DateTime.now();
    const birthday = DateTime.local(year, month, day);

    if (!birthday.isValid) {
      return setIsValid(false);
    }

    if (!isValid && birthday.isValid) {
      setIsValid(true);
    }

    const diff = now.diff(birthday, ["years", "months", "days"]).toObject();

    setAge(diff);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-4 sm:w-4/5">
        <Input
          register={register}
          error={errors?.day ? DAY_ERRORS[errors.day.type] : ""}
          isValid={isValid}
          format="day"
          required
          min={1}
          max={31}
          placeholder="DD"
          type="number"
          valueAsNumber
        />
        <Input
          register={register}
          error={errors?.month ? MONTH_ERRORS[errors.month.type] : ""}
          format="month"
          required
          min={1}
          max={12}
          placeholder="MM"
          type="number"
          valueAsNumber
        />
        <Input
          register={register}
          error={errors?.year ? YEAR_ERRORS[errors.year.type] : ""}
          format="year"
          required
          min={1}
          max={new Date().getFullYear()}
          placeholder="YYYY"
          type="number"
          valueAsNumber
        />
      </div>
      <div className="relative flex w-full justify-center sm:justify-end">
        <span className="absolute top-1/2 block h-[2px] w-full bg-slate-200" />
        <button
          type="submit"
          className="z-10 flex h-16 w-16 items-center justify-center rounded-full bg-purple-500 sm:h-20 sm:w-20"
        >
          <Arrow />
        </button>
      </div>
    </form>
  );
}
