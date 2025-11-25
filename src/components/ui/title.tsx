import { type ComponentPropsWithoutRef, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type TitleSize = "mega" | "xl" | "lg" | "md" | "sm" | "xs";
type TitleWeight = "black" | "bold" | "semibold" | "medium" | "normal";
type TitleAlign = "left" | "center" | "right";
type TitleLeading = "tight" | "snug" | "normal";

type TitleProps<T extends ElementType = "h1"> = {
  as?: T;
  children: ReactNode;
  size?: TitleSize;
  weight?: TitleWeight;
  align?: TitleAlign;
  leading?: TitleLeading;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

const sizeClasses: Record<TitleSize, string> = {
  mega: "text-[80px]",
  xl: "text-6xl",
  lg: "text-5xl",
  md: "text-4xl",
  sm: "text-3xl",
  xs: "text-2xl",
};

const weightClasses: Record<TitleWeight, string> = {
  black: "font-black",
  bold: "font-bold",
  semibold: "font-semibold",
  medium: "font-medium",
  normal: "font-normal",
};

const alignClasses: Record<TitleAlign, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const leadingClasses: Record<TitleLeading, string> = {
  tight: "leading-[1.05]",
  snug: "leading-snug",
  normal: "leading-normal",
};

export function Title<T extends ElementType = "h1">({
  as,
  children,
  size = "mega",
  weight = "black",
  align = "left",
  leading = "tight",
  className,
  ...rest
}: TitleProps<T>) {
  const Component = (as ?? "h1") as ElementType;

  return (
    <Component
      className={cn(
        "font-title uppercase",
        sizeClasses[size],
        weightClasses[weight],
        alignClasses[align],
        leadingClasses[leading],
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}

export default Title;
