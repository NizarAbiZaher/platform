import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-secondary hover:opacity-90 duration-300 rounded-[5px]',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        discord:
          ' hover:opacity-70 rounded-full my-4 bg-[#738ADB] text-slate-100',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-baseContent underline-offset-4 hover:underline',
        goldHover:
          'border-2 border-white rounded-xl my-3 bg-slate-100 text-black hover:text-slate-100 hover:bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500 font-medium hover: border-none',
        basic:
          'bg-slate-100 text-black border border-[#1e1e1e] hover:text-slate-100 hover:bg-[#1e1e1e] hover:text-slate-100 hover:border hover:border-slate-100/20 duration-300 my-3 rounded-xl',
        pinkHover:
          'border-2 border-white rounded-xl my-3 bg-slate-100 text-black hover:text-slate-100 hover:bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 font-medium hover: border-none',
        blueHover:
          'border-2 border-white rounded-xl my-3 bg-slate-100 text-black hover:text-slate-100 hover:bg-gradient-to-r from-blue-500 via-green-500 to-blue-500 font-medium hover: border-none',
        iconButton:
          'rounded-xl my-3 bg-[#191919] text-white hover:text-slate-100 hover:opacity-75 font-medium',
        brand:
          'rounded-xl bg-[#191919]  hover:opacity-70 font-medium transition duration-300',
        brandLight:
          'rounded-xl bg-slate-100 text-zinc-800 hover:opacity-70 font-medium transition duration-300'
      },
      size: {
        default: 'px-4 py-1.5',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-[6px] px-8',
        brand: 'h-10 w-[110px]',
        icon: 'h-10 w-10'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
