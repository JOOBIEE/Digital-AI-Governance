import type { ButtonHTMLAttributes } from "react";
import { Link, type LinkProps } from "react-router-dom";
import { useMagneticButton } from "../../hooks/useMagneticButton";
import { cn } from "../../lib/cn";

type Variant = "primary" | "secondary" | "ghost";

const VARIANT_CLASSES: Record<Variant, string> = {
  primary: "bg-gold text-white hover:bg-gold-deep",
  secondary: "border border-white text-white hover:bg-gold hover:text-navy",
  ghost: "text-gold hover:bg-gold/10",
};

const BASE_CLASSES =
  "inline-flex items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 ease-standard";

interface ButtonAsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  to?: undefined;
  /** Desktop-only cursor-pull effect — reserve for hero/marquee CTAs only. */
  magnetic?: boolean;
}

interface ButtonAsLinkProps extends Omit<LinkProps, "className"> {
  variant?: Variant;
  className?: string;
  magnetic?: boolean;
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export function Button({
  variant = "primary",
  className,
  magnetic = false,
  ...props
}: ButtonProps) {
  const classes = cn(BASE_CLASSES, VARIANT_CLASSES[variant], className);
  const magneticRef = useMagneticButton<
    HTMLAnchorElement & HTMLButtonElement
  >();
  const ref = magnetic ? magneticRef : undefined;

  if ("to" in props && props.to !== undefined) {
    const { to, ...rest } = props as ButtonAsLinkProps;
    return <Link to={to} ref={ref} className={classes} {...rest} />;
  }

  return (
    <button ref={ref} className={classes} {...(props as ButtonAsButtonProps)} />
  );
}
