import ExternalLink from "@/components/ExternalLink";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IconLinkProps {
  href: string;
  icon: IconProp;
}

const IconLink = ({ href, icon }: IconLinkProps) => (
  <ExternalLink href={href}>
    <FontAwesomeIcon icon={icon} size="2xl" fixedWidth />
  </ExternalLink>
);

export default IconLink;
