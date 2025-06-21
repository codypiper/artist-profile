interface FormResponseProps {
  type: "success" | "error";
  message: string;
}

const FormResponse = ({ type, message }: FormResponseProps) => (
  <span
    role={type === "success" ? "status" : "alert"}
    className={`${type === "success" ? "text-success" : "text-error"}`}
  >
    {message}
  </span>
);

export default FormResponse;
