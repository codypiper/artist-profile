interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
}

const ExternalLink = ({ href, children }: ExternalLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="drop-shadow-dark transition duration-200 hover:drop-shadow-glow"
  >
    {children}
  </a>
);

export default ExternalLink;
