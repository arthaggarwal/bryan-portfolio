
import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative rounded-lg border bg-card text-card-foreground shadow-sm overflow-visible",
      className
    )}
    {...props}
  >
    <div className="absolute -top-[5px] -left-[5px] w-2.5 h-2.5 border-t-2 border-l-2 border-[hsl(var(--card-foreground))] rounded-tl-sm" aria-hidden="true"></div>
    <div className="absolute -top-[5px] -right-[5px] w-2.5 h-2.5 border-t-2 border-r-2 border-[hsl(var(--card-foreground))] rounded-tr-sm" aria-hidden="true"></div>
    <div className="absolute -bottom-[5px] -left-[5px] w-2.5 h-2.5 border-b-2 border-l-2 border-[hsl(var(--card-foreground))] rounded-bl-sm" aria-hidden="true"></div>
    <div className="absolute -bottom-[5px] -right-[5px] w-2.5 h-2.5 border-b-2 border-r-2 border-[hsl(var(--card-foreground))] rounded-br-sm" aria-hidden="true"></div>
    {props.children}
  </div>
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
