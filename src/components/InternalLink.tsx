import classNames from "classnames";
import Link from "next/link";

interface InternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const InternalLink = ({ href, children, className }: InternalLinkProps) => (
  <Link
    href={href}
    className={classNames(
      "transition duration-200 hover:drop-shadow-glow",
      className,
    )}
  >
    {children}
  </Link>
);

export default InternalLink;
