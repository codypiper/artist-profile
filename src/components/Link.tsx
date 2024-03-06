import classNames from "classnames";
import NextLink from "next/link";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  disabled?: boolean;
  isInternal?: boolean;
  noShadow?: boolean;
}

const Link = ({
  href,
  children,
  disabled = false,
  isInternal = false,
  noShadow = false,
}: LinkProps) => {
  const className = classNames(
    "transition",
    "duration-200",
    { "drop-shadow-dark": !noShadow },
    { "hover:drop-shadow-glow": !(noShadow || disabled) },
    { "opacity-70": disabled },
    { "pointer-events-none": disabled },
  );

  return isInternal ? (
    <NextLink href={href} className={className} aria-disabled={disabled}>
      {children}
    </NextLink>
  ) : (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={className}
      aria-disabled={disabled}
    >
      {children}
    </a>
  );
};

export default Link;
