"use client"

import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Our new website doubled conversions and added £120k in yearly revenue.",
    name: "David Thompson",
    title: "Digital Solutions",
    avatar: "DT",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974"
  },
  {
    quote: "SEO campaign boosted traffic 180% in 3 months and tripled inbound leads.",
    name: "Sarah Johnson",
    title: "TechStart",
    avatar: "SJ",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974"
  },
  {
    quote: "Social media strategy brought in 1,200+ new customers in 90 days.",
    name: "Michael Chen",
    title: "Innovative Retail",
    avatar: "MC",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974"
  },
  {
    quote: "Rebrand positioned us as leaders — sales jumped 45% in Q1.",
    name: "Emma Williams",
    title: "Creative Solutions",
    avatar: "EW",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976"
  }
]

export function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="testimonials" className="relative py-16 sm:py-20 overflow-hidden bg-muted/50">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
      
      <div className="container relative z-10 px-4 sm:px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <span className="inline-flex items-center px-3 py-1 mb-3 sm:mb-4 text-xs sm:text-sm font-medium rounded-full bg-primary/10 text-primary">
            <Quote className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            <span>Client Success Stories</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 font-heading bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-blue-500 to-green-400">
            What Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-blue-500 to-green-400">Clients Say</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
            Success stories from businesses we've helped grow
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-5xl mx-auto px-1"
        >
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 sm:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 sm:pl-4 md:basis-1/2 lg:basis-1/2">
                  <Card className="relative border-0 bg-background/70 backdrop-blur-lg shadow-xl hover:shadow-2xl rounded-2xl transition-all duration-500 hover:-translate-y-1 group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-blue-500/10 to-green-400/10 opacity-90 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                    <div className="absolute -inset-1 rounded-2xl border-2 border-gradient-to-r from-pink-500 via-blue-500 to-green-400 opacity-60 group-hover:opacity-100 transition-all duration-500 animate-pulse-slow"></div>
                    <CardHeader className="pb-2 relative p-4 sm:p-6">
                      <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-primary/20 absolute top-4 right-4" />
                    </CardHeader>
                    <CardContent className="pt-0 p-4 sm:p-6">
                      <blockquote className="text-base sm:text-lg md:text-xl italic font-semibold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
                        "{testimonial.quote}"
                      </blockquote>
                    </CardContent>
                    <CardFooter className="flex items-center gap-3 sm:gap-4 pt-4 border-t p-4 sm:p-6">
                      <Avatar className="h-10 w-10 sm:h-12 sm:w-12 ring-2 ring-pink-500/60 ring-offset-2 ring-offset-background">
                        {testimonial.image ? (
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        ) : (
                          <AvatarFallback className="bg-primary/10 text-primary">{testimonial.avatar}</AvatarFallback>
                        )}
                      </Avatar>
                      <div>
                        <p className="font-bold text-sm sm:text-base bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-blue-500 to-green-400">{testimonial.name}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.title}</p>
                      </div>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-6 sm:mt-8">
              <CarouselPrevious className="relative inset-0 translate-y-0 h-12 w-12 sm:h-14 sm:w-14 bg-gradient-to-r from-pink-500 via-blue-500 to-green-400 rounded-full" />
              <CarouselNext className="relative inset-0 translate-y-0 h-12 w-12 sm:h-14 sm:w-14 bg-gradient-to-r from-pink-500 via-blue-500 to-green-400 rounded-full" />
            </div>
          </Carousel>
        </motion.div>
      </div>
      <div className="text-center mt-10">
        <a href="/case-studies" className="inline-block px-8 py-3 rounded-full font-bold bg-gradient-to-r from-pink-500 via-blue-500 to-green-400 text-white shadow-lg hover:scale-105 transition-transform duration-300">
          Read Full Case Studies →
        </a>
      </div>
    </section>
  )
}