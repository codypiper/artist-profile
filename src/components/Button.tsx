interface ButtonProps {
  children: React.ReactNode;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  noShadow?: boolean;
  disabled?: boolean;
}

const Button = ({
  children,
  type = "button",
  noShadow = false,
  disabled = false,
}: ButtonProps) => (
  <button
    type={type}
    className={`h-fit w-fit shrink-0 grow-0 rounded-full border border-white px-4.5 py-2 transition duration-200 ${
      noShadow ? "" : "drop-shadow-dark hover:drop-shadow-glow"
    } ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
  >
    {children}
  </button>
);

export default Button;
