interface FieldErrorProps {
  message: string;
}

const FieldError = ({ message }: FieldErrorProps) => (
  <span role="alert" className="text-error block text-xs italic">
    {message}
  </span>
);

export default FieldError;
