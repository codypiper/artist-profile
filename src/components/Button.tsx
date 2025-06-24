import clsx from "clsx";

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
  const isDisabled = disabled || isSubmitting;
  const hasShadow = !(noShadow || disabled);

  return (
    <button
      type={type}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-busy={isSubmitting}
      className={clsx(
        "relative flex h-fit w-fit shrink-0 grow-0 items-center justify-center gap-2 rounded-full border border-white px-4.5 py-2 transition duration-200",
        isDisabled ? "opacity-dim cursor-not-allowed" : "cursor-pointer",
        hasShadow && "drop-shadow-dark hover:drop-shadow-glow",
      )}
    >
      <span className={clsx(isSubmitting && "invisible")}>{children}</span>

      {/* Spinner while loading */}
      {isSubmitting && (
        <>
          <div className="absolute h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
          <span className="sr-only">Submitting...</span>
        </>
      )}
    </button>
  );
};

export default Button;
