import classNames from "classnames";
import NextLink from "next/link";
import { MouseEventHandler } from "react";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  disabled?: boolean;
  isInternal?: boolean;
  noShadow?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  label?: string;
}

const Link = ({
  href,
  children,
  disabled = false,
  isInternal = false,
  noShadow = false,
  onClick,
  label,
}: LinkProps) => {
  const className = classNames(
    "cursor-pointer",
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
      onClick={onClick}
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
