import Link from "@/components/Link";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IconLinkProps {
  href: string;
  icon: IconProp;
  label: string;
}

const IconLink: React.FC<IconLinkProps> = ({ href, icon, label }) => (
  <Link href={href} label={label}>
    <FontAwesomeIcon icon={icon} size="2xl" fixedWidth />
  </Link>
);

export default IconLink;
