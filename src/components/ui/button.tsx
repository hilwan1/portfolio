import * as React from "react";
import { cn } from "@/lib/utils";

const variantClasses = {
  default: "bg-[#ff5500] text-[#0a0a0a] font-semibold hover:bg-[#ff7733]",
  destructive: "bg-red-600 text-white hover:bg-red-700",
  outline:
    "border border-white/20 bg-transparent text-white hover:bg-white/10",
  secondary: "bg-neutral-800 text-white hover:bg-neutral-700",
  ghost: "hover:bg-white/10 hover:text-white",
  link: "text-[#ff7733] underline-offset-4 hover:underline",
} as const;

const sizeClasses = {
  default: "h-11 px-4 py-2",
  sm: "h-9 rounded-md px-3",
  lg: "h-12 rounded-md px-8",
  icon: "h-11 w-11",
} as const;

export type ButtonVariant = keyof typeof variantClasses;
export type ButtonSize = keyof typeof sizeClasses;

export function buttonVariants({
  variant = "default",
  size = "default",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5500] disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant],
    sizeClasses[size],
    className
  );
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, children, ...props }, ref) => {
    const classes = buttonVariants({ variant, size, className });

    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<{ className?: string }>;
      return React.cloneElement(child, {
        className: cn(classes, child.props.className),
      });
    }

    return (
      <button className={classes} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
