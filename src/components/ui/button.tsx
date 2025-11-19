import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const techButtonClasses =
  "group/roll relative inline-flex items-center justify-center px-10 py-6 font-['Refinery95'] text-xl font-black uppercase tracking-[0.25em] text-white border-0 cursor-pointer transition-all duration-300 ease-in-out h-auto shadow-none rounded-none overflow-hidden w-full max-w-[300px] whitespace-normal text-center leading-tight [clip-path:polygon(15px_0,100%_0,100%_calc(100%_-_15px),calc(100%_-_15px)_100%,0_100%,0_15px)] bg-[#5C47DE] hover:bg-[#3E2EC4] hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(92,71,222,0.3)] before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:opacity-60 before:transition-all before:duration-500 hover:before:left-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const rollingTextContainer = "relative inline-flex flex-col overflow-hidden leading-tight min-h-[1em]";
const rollingTextTop = "block translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/roll:-translate-y-full";
const rollingTextBottom = "block translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/roll:translate-y-0";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        tech: techButtonClasses,
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
    compoundVariants: [
      {
        variant: "tech",
        class: "h-auto",
      },
    ],
  },
);

type RollingTextProps = {
  text: string;
  className?: string;
};

const RollingText = ({ text, className, selfHover = false }: RollingTextProps & { selfHover?: boolean }) => (
  <span className={cn(selfHover && "group/roll", rollingTextContainer, className)}>
    <span className={rollingTextTop}>{text}</span>
    <span className={cn("absolute inset-0", rollingTextBottom)} aria-hidden>
      {text}
    </span>
  </span>
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  flipLabel?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((buttonProps, ref) => {
  const { className, variant, size, asChild = false, flipLabel, children, ...rest } = buttonProps;
  const Comp = asChild ? Slot : "button";
  const needsRollingLabel = variant === "tech";
  const ariaLabel = buttonProps["aria-label"];
  const computedLabel = needsRollingLabel
    ? flipLabel ??
      (typeof children === "string" ? children : undefined) ??
      (typeof ariaLabel === "string" ? ariaLabel : undefined) ??
      ""
    : undefined;

  const content = needsRollingLabel && computedLabel ? <RollingText text={computedLabel} className="text-white" /> : children;

  return (
    <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...rest}>
      {content}
    </Comp>
  );
});
Button.displayName = "Button";

type AnimatedLinkTextProps = {
  className?: string;
  children: string;
};

export const AnimatedLinkText = ({ className, children }: AnimatedLinkTextProps) => (
  <RollingText text={children} className={className} selfHover />
);

export { Button, buttonVariants };
