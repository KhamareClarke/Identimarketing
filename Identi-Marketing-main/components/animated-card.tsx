"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface AnimatedCardProps extends React.ComponentProps<typeof Card> {
  index?: number
  children: React.ReactNode
}

export function AnimatedCard({ children, className, index = 0, ...props }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: {
          type: "spring",
          damping: 20,
          stiffness: 100,
          delay: index * 0.1
        }
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { type: "spring", damping: 10, stiffness: 100 }
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Card 
        className={cn(
          "transform-gpu backdrop-blur-sm transition-all duration-300",
          "hover:shadow-lg hover:shadow-primary/20",
          "dark:hover:shadow-primary/10",
          className
        )}
        {...props}
      >
        {children}
      </Card>
    </motion.div>
  )
}