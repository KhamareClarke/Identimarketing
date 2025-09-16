"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Sparkles, ArrowRight, Zap, Briefcase, Smile, Brain, MapPin } from "lucide-react"
import { TypewriterEffect } from "@/components/typewriter-effect"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

const stats = [
  { value: 500, label: "Projects Delivered", suffix: "+" },
  { value: 99, label: "Client Satisfaction", suffix: "%" },
  { value: 50, label: "SEO & AI Experts", suffix: "+" },
  { value: 20, label: "Local Offices in the UK & US", suffix: "+" }
]

const services = [
  "AI-Powered Solutions",
  "Digital Marketing",
  "SEO Services",
  "Web Development",
  "Brand Identity",
  "Social Media Management"
]

function AnimatedCounter({ value, suffix = "", delay = 0 }: { value: number; suffix?: string; delay?: number }) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps
    let currentStep = 0
    
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        currentStep++
        const progress = currentStep / steps
        const easedProgress = 1 - Math.pow(1 - progress, 3)
        setCount(Math.floor(value * easedProgress))
        
        if (currentStep >= steps) {
          clearInterval(interval)
          setCount(value)
        }
      }, stepDuration)
      
      return () => clearInterval(interval)
    }, delay)
    
    return () => clearTimeout(timer)
  }, [value, delay])
  
  return (
    <span className="font-bold">{count}{suffix}</span>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center py-20 overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-primary/20 via-background to-background"
          animate={{
            opacity: [0.5, 0.3, 0.5],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            <TypewriterEffect words={services} />
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl font-black leading-tight tracking-tight mb-6 sm:mb-8 font-heading gradient-text drop-shadow-xl flex flex-wrap justify-center items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Unleash AI-Powered Growth for Ambitious Brands
        </motion.h1>
          
        <motion.p 
          className="text-base sm:text-2xl text-muted-foreground max-w-md mx-auto mb-8 sm:mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Boost traffic, leads, and sales with trusted AI-driven marketing.
        </motion.p>
        {/* Unique Hero Visual: AI/Digital Animation */}
        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-2/5 h-3/5 pointer-events-none z-0 opacity-60 blur-lg">
          <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-pulse-glow">
            <defs>
              <radialGradient id="aiGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#6EE7B7" stopOpacity="0.5"/>
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.12"/>
              </radialGradient>
            </defs>
            <circle cx="200" cy="200" r="160" fill="url(#aiGlow)" />
            <ellipse cx="200" cy="200" rx="120" ry="60" fill="#fff" fillOpacity="0.04"/>
            <ellipse cx="200" cy="200" rx="80" ry="30" fill="#fff" fillOpacity="0.02"/>
            <circle cx="200" cy="200" r="40" fill="#fff" fillOpacity="0.03"/>
            <g>
              <circle cx="200" cy="200" r="12" fill="#3B82F6" />
              <circle cx="200" cy="200" r="8" fill="#6EE7B7" />
              <circle cx="200" cy="200" r="4" fill="#fff" />
            </g>
          </svg>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center items-center mb-6 text-xs sm:text-sm"
        >
          <span className="flex items-center gap-2 px-3 py-1 bg-white/80 rounded-full shadow text-xs font-semibold text-gray-700 border border-gray-200">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-green-600"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            Google Partner
          </span>
          <span className="flex items-center gap-2 px-3 py-1 bg-white/80 rounded-full shadow text-xs font-semibold text-gray-700 border border-gray-200">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-yellow-500"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 17.75L18.25 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.39 4.73L5.75 21z" /></svg>
            5-Star Reviews
          </span>
          <span className="flex items-center gap-2 px-3 py-1 bg-white/80 rounded-full shadow text-xs font-semibold text-gray-700 border border-gray-200">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-600"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2l4-4" /></svg>
            Certified AI Experts
          </span>
          <span className="flex items-center gap-2 px-3 py-1 bg-white/80 rounded-full shadow text-xs font-semibold text-gray-700 border border-gray-200">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-500"><rect width="18" height="18" x="3" y="3" rx="2"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 13l3 3 7-7" /></svg>
            GDPR Compliant
          </span>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center mb-12"
        >
          <Button
            size="lg"
            className="group relative overflow-hidden px-12 py-5 rounded-full bg-gradient-to-r from-pink-500 via-blue-500 to-green-400 text-white text-xl font-extrabold shadow-2xl hover:from-blue-600 hover:via-pink-500 hover:to-green-400 hover:scale-110 hover:shadow-3xl transition-all duration-200 border-0 focus:ring-4 focus:ring-blue-300"
            asChild
          >
            <Link href="https://calendly.com/khamareclarke" target="_blank" rel="noopener noreferrer">
              <span className="relative z-10 flex items-center text-xl">
Book Your Free Strategy Call
                <Zap className="ml-3 h-6 w-6 transition-transform group-hover:rotate-12" />
              </span>
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-8 justify-center items-stretch max-w-5xl mx-auto mt-10"
        >
          {/* Stats with icons */}
          {[
            { icon: <Briefcase className="text-pink-500 text-4xl mb-3" />, value: 500, suffix: '+', label: 'Projects Delivered' },
            { icon: <Smile className="text-green-500 text-4xl mb-3" />, value: 99, suffix: '%', label: 'Client Satisfaction' },
            { icon: <Brain className="text-blue-500 text-4xl mb-3" />, value: 50, suffix: '+', label: 'SEO & AI Experts' },
            { icon: <MapPin className="text-yellow-500 text-4xl mb-3" />, value: 20, suffix: '+', label: 'Local Offices in the UK & US' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
              className="flex-1 flex flex-col items-center justify-center px-8 py-6 bg-white/70 dark:bg-background/70 rounded-2xl shadow-2xl border border-white/20 backdrop-blur-lg hover:scale-105 transition-transform duration-200"
            >
              {stat.icon}
              <span className="text-4xl sm:text-5xl font-extrabold mb-1">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} delay={1000 + index * 200} />
              </span>
              <span className="text-base sm:text-lg font-semibold text-center text-gray-700 dark:text-gray-200">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}