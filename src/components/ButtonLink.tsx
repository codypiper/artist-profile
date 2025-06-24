import Button from "./Button";
import Link from "./Link";

type ButtonLinkProps = React.ComponentProps<typeof Link>;

const ButtonLink: React.FC<ButtonLinkProps> = ({
  children,
  noShadow = false,
  ...props
}) => (
  <Link {...props} noShadow>
    <Button noShadow={noShadow}>{children}</Button>
  </Link>
);

export default ButtonLink;
