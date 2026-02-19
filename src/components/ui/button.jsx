import * as React from "react"
import { cva } from "class-variance-authority";
import { Slot } from "radix-ui"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  ["inline-flex items-center justify-center",
    "rounded-[8px]",
    "gap-1",
    "text-ui",
    "font-archivo",
    // mobile (base)
    "px-[20px] py-[14px]",                 // fixed padding
    "text-[14px]",
    // Desktop sm & above
    // "sm:px-[24px] sm:py-[16px]",                 // fixed padding
    // "sm:text-[16px]",                        // fixed font size
    "font-bold",                          // bold
    "uppercase tracking-wide",            // uppercase text
    "transition-all duration-200",
    "cursor-pointer",
    "disabled:opacity-50 disabled:pointer-events-none"].join(" "),
  {
    variants: {
      variant: {
        // Primary Button (Blue with arrow)
        primary: "bg-gradient-primary",
        secondary: "bg-radial",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props} />
  );
}

export { Button, buttonVariants }
