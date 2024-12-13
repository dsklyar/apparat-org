import { cn } from "@/utils";

type TextProps = 
{
  bold?: boolean;
  italic?: boolean;
  uppercase?: boolean;
  className?: string;
};

const Body = ({
  bold = false,
  italic = false,
  uppercase= false,
  className = "",
  children,
}: React.PropsWithChildren<TextProps>) => (
  <div
    className={cn(
      "text-white text-sm sm:text-base font-normal font-[family-name:var(--font-geist-mono)]", 
      bold && "font-bold",
      italic && "italic",
      uppercase && "uppercase",
      className
    )}
  >
    {children}
  </div>
);

export const Text = {
  Body,
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