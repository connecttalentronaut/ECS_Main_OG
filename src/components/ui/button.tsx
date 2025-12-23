import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 transform active:scale-95 hover:shadow-lg",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-primary to-primary-custom text-white hover:from-primary/90 hover:to-primary-custom/90 shadow-md hover:shadow-xl",
        destructive:
          "bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 shadow-md hover:shadow-xl",
        outline:
          "border-2 border-primary/20 bg-white/80 backdrop-blur-sm hover:bg-primary/5 hover:border-primary/40 text-primary-custom hover:text-primary shadow-sm",
        secondary:
          "bg-gradient-to-r from-secondary to-secondary-custom text-white hover:from-secondary/90 hover:to-secondary-custom/90 shadow-md hover:shadow-xl",
        accent:
          "bg-gradient-to-r from-accent to-accent-custom text-white hover:from-accent/90 hover:to-accent-custom/90 shadow-md hover:shadow-xl",
        ghost: "hover:bg-gray-100/80 hover:text-primary-custom backdrop-blur-sm text-gray-700",
        link: "text-primary-custom underline-offset-4 hover:underline hover:text-primary",
        glass: "bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 shadow-lg",
        gradient: "bg-gradient-to-r from-primary via-secondary to-accent text-white hover:shadow-2xl hover:scale-105 shadow-lg",
      },
      size: {
        default: "h-11 px-6 py-3",
        sm: "h-9 rounded-lg px-4 text-sm",
        lg: "h-14 rounded-2xl px-10 text-lg font-bold",
        xl: "h-16 rounded-2xl px-12 text-xl font-bold",
        icon: "h-11 w-11 rounded-xl",
        "icon-sm": "h-9 w-9 rounded-lg",
        "icon-lg": "h-14 w-14 rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={loading || props.disabled}
        {...props}
      >
        {loading && (
          <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
        )}
        {children}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
