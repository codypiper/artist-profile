import classNames from "classnames";
import Link from "next/link";

interface InternalLinkProps {
  href: string;
  children: React.ReactNode;
  disabled?: boolean;
}

const InternalLink = ({
  href,
  children,
  disabled = false,
}: InternalLinkProps) => (
  <Link
    href={href}
    className={classNames(
      "drop-shadow-dark",
      "transition",
      "duration-200",
      { "hover:drop-shadow-glow": !disabled },
      { "opacity-70": disabled },
      { "pointer-events-none": disabled },
    )}
    aria-disabled={disabled}
  >
    {children}
  </Link>
);

export default InternalLink;
