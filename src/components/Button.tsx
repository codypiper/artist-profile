import classNames from "classnames";

interface ButtonProps {
  children: React.ReactNode;
  noShadow?: boolean;
}

const Button = ({ children, noShadow }: ButtonProps) => (
  <button
    className={classNames(
      "min-w-16",
      "rounded-full",
      "border",
      "border-white",
      "p-2",
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
