import { type ComponentPropsWithoutRef, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type TitleWeight = "black" | "bold" | "semibold" | "medium" | "normal";
type TitleAlign = "left" | "center" | "right";
type TitleLeading = "tight" | "snug" | "normal";

type TitleProps<T extends ElementType = "h1"> = {
  as?: T;
  children: ReactNode;
  weight?: TitleWeight;
  align?: TitleAlign;
  leading?: TitleLeading;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

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
        "font-title uppercase text-5xl lg:text-[80px]",
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
