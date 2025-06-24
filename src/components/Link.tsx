import NextLink from "next/link";
import type { MouseEventHandler } from "react";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  disabled?: boolean;
  isInternal?: boolean;
  noShadow?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  label?: string;
}

const Link: React.FC<LinkProps> = ({
  href,
  children,
  disabled = false,
  isInternal = false,
  noShadow = false,
  onClick,
  label,
}) => {
  return isInternal ? (
    <NextLink
      href={href}
      className={`cursor-pointer transition duration-200 ${
        disabled ? "opacity-dim pointer-events-none" : ""
      } ${noShadow ? "" : "drop-shadow-dark"} ${
        noShadow || disabled ? "" : "hover:drop-shadow-glow"
      }`}
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
      className={`cursor-pointer transition duration-200 ${
        disabled ? "opacity-dim pointer-events-none" : ""
      } ${noShadow ? "" : "drop-shadow-dark"} ${
        noShadow || disabled ? "" : "hover:drop-shadow-glow"
      }`}
      aria-disabled={disabled}
      aria-label={label}
    >
      {children}
    </a>
  );
};

export default Link;
