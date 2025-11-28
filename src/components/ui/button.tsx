import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const techShapeClasses =
  "group/roll relative inline-flex items-center justify-center text-white border-0 cursor-pointer transition-all duration-300 ease-out h-auto shadow-none rounded-none overflow-hidden w-auto whitespace-normal text-center leading-tight [clip-path:polygon(15px_0,100%_0,100%_calc(100%_-_15px),calc(100%_-_15px)_100%,0_100%,0_15px)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background before:content-[''] before:absolute before:inset-0 before:z-[-1] before:bg-[linear-gradient(to_left_top,hsl(var(--foreground))_50%,transparent_50.1%),linear-gradient(to_right_bottom,hsl(var(--foreground))_50%,transparent_50.1%)] before:bg-[length:0%_0%] before:bg-no-repeat before:bg-[position:100%_100%,0%_0%] before:transition-[background-size] before:duration-300 before:ease-out hover:before:bg-[length:100%_100%]";

const techButtonClasses =
  `${techShapeClasses} bg-primary hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(92,71,222,0.3)]`;

const techOutlineContainerClasses =
  "group/roll relative inline-flex items-center justify-center text-[#DBDAE2] border-0 cursor-pointer transition-all duration-300 ease-out h-auto shadow-none rounded-none w-auto whitespace-normal text-center leading-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background hover:text-white hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(92,71,222,0.3)] [clip-path:polygon(15px_0,100%_0,100%_calc(100%_-_15px),calc(100%_-_15px)_100%,0_100%,0_15px)]";

const techOutlineBackgroundClasses =
  "absolute inset-0 -z-10 bg-black/50 backdrop-blur-sm [clip-path:polygon(15px_0,100%_0,100%_calc(100%_-_15px),calc(100%_-_15px)_100%,0_100%,0_15px)] before:content-[''] before:absolute before:inset-0 before:z-[-1] before:bg-[linear-gradient(to_left_top,hsl(var(--primary))_50%,transparent_50.1%),linear-gradient(to_right_bottom,hsl(var(--primary))_50%,transparent_50.1%)] before:bg-[length:0%_0%] before:bg-no-repeat before:bg-[position:100%_100%,0%_0%] before:transition-[background-size] before:duration-300 before:ease-out group-hover/roll:before:bg-[length:100%_100%]";

const rollingWrapperClasses = "relative inline-flex flex-col overflow-hidden leading-tight min-h-[1em]";
const rollingTextTop =
  "block translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/roll:-translate-y-full";
const rollingTextBottom =
  "block translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/roll:translate-y-0";

const buttonVariants = cva(
  "relative font-title inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-[18px] font-medium uppercase tracking-tight ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-primary hover:text-primary",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-primary hover:text-white",
        link: "text-primary underline-offset-4 hover:underline",
        tech: techButtonClasses,
        "tech-outline": techOutlineContainerClasses,
      },
      size: {
        default: "rounded-md px-4 py-3",
        sm: "text-sm rounded-md px-6 py-2",
        lg: "rounded-md px-8 py-5",
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
      {
        variant: "tech-outline",
        class: "h-auto",
      },
    ],
  },
);

type RollingLabelProps = {
  text: string;
  className?: string;
};

const RollingLabel = ({ text, className }: RollingLabelProps) => (
  <span className={cn(rollingWrapperClasses, className)}>
    <span className={rollingTextTop}>{text}</span>
    <span className={cn("absolute inset-0", rollingTextBottom)} aria-hidden>
      {text}
    </span>
  </span>
);

const AnimatedLinkLabel = ({ text, className, selfHover = true }: RollingLabelProps & { selfHover?: boolean }) => (
  <span className={cn("inline-flex", selfHover && "group/roll")}>
    <RollingLabel text={text} className={className} />
  </span>
);

const TechBorder = () => (
  <>
    {/* Top */}
    <span className="absolute top-0 left-[15px] right-0 h-[1px] bg-[var(--tech-outline-border)] transition-colors duration-300 group-hover/roll:bg-[var(--tech-outline-hover)]" />
    {/* Bottom */}
    <span className="absolute bottom-0 left-0 right-[15px] h-[1px] bg-[var(--tech-outline-border)] transition-colors duration-300 group-hover/roll:bg-[var(--tech-outline-hover)]" />
    {/* Left */}
    <span className="absolute top-[15px] bottom-0 left-0 w-[1px] bg-[var(--tech-outline-border)] transition-colors duration-300 group-hover/roll:bg-[var(--tech-outline-hover)]" />
    {/* Right */}
    <span className="absolute top-0 bottom-[15px] right-0 w-[1px] bg-[var(--tech-outline-border)] transition-colors duration-300 group-hover/roll:bg-[var(--tech-outline-hover)]" />
    {/* TL Diagonal */}
    <span className="absolute top-[15px] left-0 w-[22px] h-[1px] bg-[var(--tech-outline-border)] transition-colors duration-300 group-hover/roll:bg-[var(--tech-outline-hover)] origin-top-left -rotate-45" />
    {/* BR Diagonal */}
    <span className="absolute bottom-[15px] right-0 w-[22px] h-[1px] bg-[var(--tech-outline-border)] transition-colors duration-300 group-hover/roll:bg-[var(--tech-outline-hover)] origin-bottom-right -rotate-45" />
  </>
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  outlineColor?: string;
  outlineHoverColor?: string;
  techBackgroundClassName?: string;
  techBackgroundStyle?: React.CSSProperties;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((buttonProps, ref) => {
  const {
    className,
    variant,
    size,
    asChild = false,
    outlineColor,
    outlineHoverColor,
    children,
    techBackgroundClassName,
    techBackgroundStyle,
    ...rest
  } = buttonProps;
  const Comp = asChild ? Slot : "button";

  const outlineVars = variant === "tech-outline"
    ? {
        ["--tech-outline-border" as string]: outlineColor ?? "hsl(var(--border))",
        ["--tech-outline-hover" as string]: outlineHoverColor ?? "#5C47DE",
      }
    : undefined;

  const decoration = variant === "tech-outline" ? (
    <>
      <span
        className={cn(techOutlineBackgroundClasses, techBackgroundClassName)}
        style={{
          maskImage: "linear-gradient(135deg, transparent 10.6px, black 10.6px), linear-gradient(315deg, transparent 10.6px, black 10.6px)",
          maskComposite: "intersect",
          WebkitMaskImage: "linear-gradient(135deg, transparent 10.6px, black 10.6px), linear-gradient(315deg, transparent 10.6px, black 10.6px)",
          WebkitMaskComposite: "source-in",
          ...techBackgroundStyle,
        }}
      />
      <TechBorder />
    </>
  ) : null;

  if (asChild) {
    return (
      <Slot
        className={cn(buttonVariants({ variant, size, className }))}
        style={outlineVars}
        ref={ref}
        {...rest}
      >
        {React.isValidElement(children)
          ? React.cloneElement(children as React.ReactElement, undefined,
            (children as React.ReactElement).props.children,
            decoration
          )
          : children}
      </Slot>
    );
  }

  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      style={outlineVars}
      ref={ref}
      {...rest}
    >
      {decoration}
      {children}
    </button>
  );
});
Button.displayName = "Button";

type AnimatedLinkTextProps = {
  className?: string;
  children: string;
};

export const AnimatedLinkText = ({ className, children }: AnimatedLinkTextProps) => (
  <AnimatedLinkLabel text={children} className={className} />
);

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants };
