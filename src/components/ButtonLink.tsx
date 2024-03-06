import Button from "./Button";
import Link from "./Link";

const ButtonLink = ({
  children,
  noShadow = false,
  ...props
}: React.ComponentProps<typeof Link>) => (
  <Link {...props} noShadow>
    <Button noShadow={noShadow}>{children}</Button>
  </Link>
);

export default ButtonLink;
