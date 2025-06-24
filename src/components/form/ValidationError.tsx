interface ValidationErrorProps {
  id: string;
  message: string;
}

const ValidationError: React.FC<ValidationErrorProps> = ({ id, message }) => (
  <span id={id} role="alert" className="text-error block text-xs italic">
    {message}
  </span>
);

export default ValidationError;
