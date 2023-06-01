import { UseFormRegister } from "react-hook-form";
import { IFormInput } from "../../types";

type InputProps = {
  register: UseFormRegister<IFormInput>;
  required: boolean;
  error: string;
  format: "day" | "month" | "year";
  isValid?: boolean;
  min?: number;
  max?: number;
  placeholder?: string;
  type?: string;
  valueAsNumber?: boolean;
};

export default function Input({
  register,
  error,
  format,
  isValid = true,
  min,
  max,
  placeholder,
  type,
  valueAsNumber,
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label
        className={`text-sm font-extrabold uppercase tracking-widest ${
          error ? "text-red-600" : ""
        }`}
        htmlFor={format}
      >
        {format}
      </label>
      <input
        id={format}
        type={type}
        placeholder={placeholder}
        className={`w-full rounded-lg border px-2 py-3 text-xl font-extrabold hover:border-purple-300 focus:border-purple-600 focus:outline-none sm:px-4  ${
          error ? "border-red-600" : ""
        }`}
        {...register(format, {
          required: "This field is required",
          min,
          max,
          valueAsNumber,
        })}
      />

      {!isValid ? (
        <p className="h-4 text-xs italic text-red-600 ">Must be a valid date</p>
      ) : (
        <p className="h-4 text-xs italic text-red-600 ">{error}</p>
      )}
    </div>
  );
}
