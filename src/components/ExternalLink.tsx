interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
}

const ExternalLink = ({ href, children }: ExternalLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="hover:drop-shadow-glow transition-all"
  >
    {children}
  </a>
);

export default ExternalLink;
