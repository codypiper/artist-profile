import Link from "@/components/Link";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IconLinkProps {
  href: string;
  icon: IconProp;
}

const IconLink = ({ href, icon }: IconLinkProps) => (
  <Link href={href}>
    <FontAwesomeIcon icon={icon} size="2xl" fixedWidth />
  </Link>
);

export default IconLink;
