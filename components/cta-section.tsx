"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Sparkles, ArrowRight } from "lucide-react"

export function CTASection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="book" className="py-16 sm:py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/50 to-background"></div>
      
      {/* Animated shapes */}
      <div className="absolute top-20 right-[10%] w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-[10%] w-36 sm:w-56 md:w-72 h-36 sm:h-56 md:h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
      
      <div className="container relative z-10 px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="max-w-4xl mx-auto border border-primary/20 shadow-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-500/5 animate-pulse-glow"></div>
            <CardHeader className="text-center relative z-10 p-4 sm:p-6 md:p-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="inline-flex items-center px-4 py-2 mb-4 text-sm font-semibold rounded-full bg-gradient-to-r from-pink-500/10 via-blue-500/10 to-green-400/10 text-primary border border-white/10 backdrop-blur-sm shadow-md">
                  <Sparkles className="w-4 h-4 mr-2 text-pink-500 animate-bounce" />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-blue-500 to-green-400">Limited Time Offer</span>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <CardTitle className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-blue-500 to-green-400 mb-2">
                  Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-blue-500 to-green-400">Transform</span> Your Business?
                </CardTitle>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 font-heading bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-blue-500 to-green-400 animate-pulse">
                  Only 3 Free SEO Audits Left This Month!
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80 mb-6">
                  Secure your spot for a complimentary strategy call and get a free, expert SEO audit—see exactly how much more traffic and revenue you could be generating. <span className="font-bold text-pink-500">Limited availability.</span> Don’t miss out!
                </p>
              </motion.div>
            </CardHeader>
            <CardContent className="flex justify-center pb-6 sm:pb-8 relative z-10 px-4 sm:px-6 md:px-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative w-full sm:w-auto"
              >
                <Button size="lg" className="group relative z-20 overflow-hidden px-12 py-5 rounded-full bg-gradient-to-r from-pink-500 via-blue-500 to-green-400 text-white text-xl font-extrabold shadow-2xl hover:from-blue-600 hover:via-pink-500 hover:to-green-400 hover:scale-110 hover:shadow-3xl transition-all duration-200 border-0 focus:ring-4 focus:ring-blue-300 w-full sm:w-auto" asChild>
                  <Link href="https://calendly.com/khamareclarke" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    Book My Free Strategy Call
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
              {/* Removed overlay that could obscure button. If needed, move this behind the content with lower z-index or add to Card background only. */}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}