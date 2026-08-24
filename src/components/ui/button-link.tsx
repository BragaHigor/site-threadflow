import type { PropsWithChildren } from "react";

type ButtonVariant = "primary" | "ghost" | "light";

type ButtonLinkProps = PropsWithChildren<{
  href: string;
  variant: ButtonVariant;
  small?: boolean;
  arrow?: boolean;
  onClick?: () => void;
}>;

export function ButtonLink({
  href,
  variant,
  small = false,
  arrow = false,
  onClick,
  children,
}: ButtonLinkProps) {
  const className = [
    "button",
    `button--${variant}`,
    small ? "button--small" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a className={className} href={href} onClick={onClick}>
      {children}
      {arrow ? <span aria-hidden="true">→</span> : null}
    </a>
  );
}
