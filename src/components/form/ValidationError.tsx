interface ValidationErrorProps {
  id: string;
  message: string;
}

const ValidationError: React.FC<ValidationErrorProps> = ({ id, message }) => (
  <span id={id} role="alert" className="block text-xs text-error italic">
    {message}
  </span>
);

export default ValidationError;
