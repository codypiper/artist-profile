interface ValidationErrorProps {
  message: string;
}

const ValidationError: React.FC<ValidationErrorProps> = ({ message }) => (
  <span role="alert" className="text-error block text-xs italic">
    {message}
  </span>
);

export default ValidationError;
