import Link from "next/link";

interface InternalLinkProps {
  href: string;
  children: React.ReactNode;
}

const InternalLink = ({ href, children }: InternalLinkProps) => (
  <Link
    href={href}
    className="drop-shadow-dark transition duration-200 hover:drop-shadow-glow"
  >
    {children}
  </Link>
);

export default InternalLink;
