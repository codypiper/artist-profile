interface ButtonProps {
  children: React.ReactNode;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
  isSubmitting?: boolean;
  noShadow?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  disabled = false,
  isSubmitting = false,
  noShadow = false,
}) => {
  disabled = disabled || isSubmitting;
  noShadow = noShadow || disabled;

  return (
    <button
      type={type}
      disabled={disabled}
      className={`relative flex h-fit w-fit shrink-0 grow-0 items-center justify-center gap-2 rounded-full border border-white px-4.5 py-2 transition duration-200 ${
        noShadow ? "" : "drop-shadow-dark hover:drop-shadow-glow"
      } ${disabled ? "opacity-dim cursor-not-allowed" : "cursor-pointer"}`}
    >
      <span className={`${isSubmitting ? "invisible" : ""}`}>{children}</span>

      {/* Spinner while loading */}
      {isSubmitting && (
        <div className="absolute h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
      )}
    </button>
  );
};

export default Button;
