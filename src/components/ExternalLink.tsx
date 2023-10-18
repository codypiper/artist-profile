import classNames from "classnames";

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const ExternalLink = ({ href, children, className }: ExternalLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className={classNames(
      "transition duration-200 hover:drop-shadow-glow",
      className,
    )}
  >
    {children}
  </a>
);

export default ExternalLink;
