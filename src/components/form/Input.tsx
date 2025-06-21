import type {
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import FieldErrorComponent from "./FieldError";

type InputProps<T extends FieldValues> = {
  name: Path<T>;
  type?: string;
  label: string;
  placeholder?: string;
  register: UseFormRegister<T>;
  options?: RegisterOptions<T>;
  errors?: FieldError;
};

const Input = <T extends FieldValues>({
  name,
  type,
  label,
  placeholder,
  register,
  options,
  errors,
}: InputProps<T>) => {
  const isError = errors != null;

  return (
    <div className="flex flex-col items-center gap-1">
      <input
        aria-label={label}
        aria-invalid={isError}
        type={type}
        placeholder={placeholder}
        {...register(name, options)}
        className={`placeholder:white/dim text-md min-w-80 rounded-xs border bg-black/50 p-2 text-center text-white backdrop-blur-sm placeholder:italic focus:outline focus:outline-white ${
          isError ? "border-error" : "border-white"
        }`}
      />
      {errors != null && <FieldErrorComponent message={errors.message!} />}
    </div>
  );
};

export default Input;
