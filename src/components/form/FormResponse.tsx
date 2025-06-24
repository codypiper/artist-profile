import clsx from "clsx";

interface FormResponseProps {
  type: "success" | "error";
  message: string;
}

const FormResponse: React.FC<FormResponseProps> = ({ type, message }) => (
  <span
    role={type === "success" ? "status" : "alert"}
    className={clsx(
      "block font-semibold italic",
      type === "success" ? "text-success" : "text-error",
    )}
  >
    {message}
  </span>
);

export default FormResponse;
