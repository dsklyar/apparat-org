import { cn } from "@/utils";
import Link from "next/link";

type StyledLinkType = React.ComponentProps<typeof Link> & {
  showUnderline?: boolean;
};

export const StyledLink = ({
  className,
  children,
  showUnderline,
  ...props
}: StyledLinkType) => (
  <Link
    className={cn(
      "flex items-center gap-2 hover:underline hover:underline-offset-4",
      showUnderline && "underline underline-offset-4",
      className
    )}
    {...props}
  >
    {children}
  </Link>
);
