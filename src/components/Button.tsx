import classNames from "classnames";

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
    className={classNames(
      "min-w-16",
      "rounded-full",
      "border",
      "border-white",
      "p-2",
      "cursor-pointer",
      "transition",
      "duration-200",
      { "drop-shadow-dark": !noShadow },
      { "hover:drop-shadow-glow": !noShadow },
    )}
  >
    {children}
  </button>
);

export default Button;
