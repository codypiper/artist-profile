"use client";

import clsx from "clsx";
import NextLink from "next/link";
import type { MouseEventHandler } from "react";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  disabled?: boolean;
  noShadow?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  label?: string;
}

const isInternalLink = (href: string): boolean =>
  href.startsWith("/") || href.startsWith("#");

const Link: React.FC<LinkProps> = ({
  href,
  children,
  disabled = false,
  noShadow = false,
  onClick,
  label,
}) => {
  const isInternal = isInternalLink(href);

  const className = clsx(
    "cursor-pointer transition duration-200",
    disabled && "opacity-dim pointer-events-none",
    !noShadow && "drop-shadow-dark",
    !(noShadow || disabled) && "hover:drop-shadow-glow",
  );

  const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    onClick?.(event);
  };

  const commonProps = {
    href,
    className,
    onClick: handleClick,
    "aria-disabled": disabled,
    "aria-label": label,
    children,
  };

  if (isInternal) {
    return <NextLink {...commonProps} />;
  }

  return <a target="_blank" rel="noreferrer" {...commonProps} />;
};

export default Link;
