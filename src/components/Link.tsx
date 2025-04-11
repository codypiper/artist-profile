import classNames from "classnames";
import NextLink from "next/link";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  disabled?: boolean;
  isInternal?: boolean;
  noShadow?: boolean;
  label?: string;
}

const Link = ({
  href,
  children,
  disabled = false,
  isInternal = false,
  noShadow = false,
  label,
}: LinkProps) => {
  const className = classNames(
    "transition",
    "duration-200",
    { "drop-shadow-dark": !noShadow },
    { "hover:drop-shadow-glow": !(noShadow || disabled) },
    { "opacity-dim": disabled },
    { "pointer-events-none": disabled },
  );

  return isInternal ? (
    <NextLink
      href={href}
      className={className}
      aria-disabled={disabled}
      aria-label={label}
    >
      {children}
    </NextLink>
  ) : (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={className}
      aria-disabled={disabled}
      aria-label={label}
    >
      {children}
    </a>
  );
};

export default Link;
