interface ButtonProps {
  children: React.ReactNode;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  noShadow?: boolean;
}

const Button = ({
  children,
  type = "button",
  noShadow = false,
}: ButtonProps) => (
  <button
    type={type}
    className={`min-w-16 cursor-pointer rounded-full border border-white p-2 transition duration-200 ${
      noShadow ? "" : "drop-shadow-dark hover:drop-shadow-glow"
    }`}
  >
    {children}
  </button>
);

export default Button;
