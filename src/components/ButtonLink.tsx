import Button from "./Button";
import Link from "./Link";

type ButtonLinkProps = React.ComponentProps<typeof Link>;

const ButtonLink = ({
  children,
  noShadow = false,
  ...props
}: ButtonLinkProps) => (
  <Link {...props} noShadow>
    <Button noShadow={noShadow}>{children}</Button>
  </Link>
);

export default ButtonLink;
