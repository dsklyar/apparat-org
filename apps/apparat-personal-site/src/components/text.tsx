import { cn } from "@/utils";

type TextProps = {
  bold?: boolean;
  italic?: boolean;
  uppercase?: boolean;
  className?: string;
  insertHTML?: boolean;
};

const Body = ({
  bold = false,
  italic = false,
  uppercase = false,
  insertHTML = false,
  className = "",
  children,
}: React.PropsWithChildren<TextProps>) => {
  const composed = cn(
    "text-white text-sm sm:text-base font-normal",
    bold && "font-bold",
    italic && "italic",
    uppercase && "uppercase",
    className
  );
  return insertHTML ? (
    <span className={composed} dangerouslySetInnerHTML={{ __html: children as string }}/>
  ) : (
    <span className={composed}>{children}</span>
  );
};

export const Text = {
  Body,
  SupaHeader: ({
    children,
    className,
    ...props
  }: React.PropsWithChildren<TextProps>) => (
    <Body {...props} className={cn("text-2xl sm:text-5xl", className)}>
      {children}
    </Body>
  ),
  Header: ({
    children,
    className,
    ...props
  }: React.PropsWithChildren<TextProps>) => (
    <Body {...props} className={cn("text-xl sm:text-3xl", className)}>
      {children}
    </Body>
  ),
  Subheader: ({
    children,
    className,
    ...props
  }: React.PropsWithChildren<TextProps>) => (
    <Body {...props} className={cn("text-base sm:text-xl", className)}>
      {children}
    </Body>
  ),
  Small: ({
    children,
    className,
    ...props
  }: React.PropsWithChildren<TextProps>) => (
    <Body {...props} className={cn("text-xs", className)}>
      {children}
    </Body>
  ),
};
