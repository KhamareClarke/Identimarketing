"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Send, Mail, Phone, MapPin, CheckCircle } from "lucide-react"

export function ContactSection() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData)
      
      // Show success toast
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      })
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      })
      setIsSubmitting(false)
    }, 1000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-muted/50 to-transparent"></div>
      <div className="absolute top-20 right-[10%] w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-[10%] w-36 sm:w-56 md:w-72 h-36 sm:h-56 md:h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10 px-4 sm:px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <span className="inline-flex items-center px-4 py-2 mb-4 text-sm font-semibold rounded-full bg-gradient-to-r from-pink-500/10 via-blue-500/10 to-green-400/10 text-primary border border-white/10 backdrop-blur-sm shadow-md">
            <Mail className="w-4 h-4 mr-2 text-pink-500 animate-bounce" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-blue-500 to-green-400">Get In Touch</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 font-heading bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-blue-500 to-green-400">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-blue-500 to-green-400">Contact</span> Us
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
            Get in touch with our team to discuss your project
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8">
            <motion.div 
              className="lg:col-span-2 space-y-6 sm:space-y-8"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <motion.div variants={itemVariants} className="flex items-start space-x-3 sm:space-x-4">
                <div className="p-2 sm:p-3 rounded-lg bg-primary/10 text-primary">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1 text-sm sm:text-base">Phone</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex items-start space-x-3 sm:space-x-4">
                <div className="p-2 sm:p-3 rounded-lg bg-primary/10 text-primary">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1 text-sm sm:text-base">Email</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">contact@identimarketing.com</p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex items-start space-x-3 sm:space-x-4">
                <div className="p-2 sm:p-3 rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1 text-sm sm:text-base">Address</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">123 Marketing Street, Digital City, DC 12345</p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="bg-muted p-4 sm:p-6 rounded-lg">
                <h3 className="font-medium mb-2 text-sm sm:text-base">Office Hours</h3>
                <ul className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="lg:col-span-3 bg-background/70 backdrop-blur-lg rounded-2xl p-4 sm:p-8 border-0 shadow-xl relative overflow-hidden"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-blue-500/10 to-green-400/10 opacity-90 rounded-2xl pointer-events-none"></div>
              <div className="absolute -inset-1 rounded-2xl border-2 border-gradient-to-r from-pink-500 via-blue-500 to-green-400 opacity-60 animate-pulse-slow pointer-events-none"></div>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-1 sm:space-y-2">
                    <label htmlFor="name" className="text-xs sm:text-sm font-medium">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="rounded-full border border-gray-300 focus:outline-none focus:border-primary text-base bg-white/70 backdrop-blur px-5 py-3 shadow-sm"
                    />
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <label htmlFor="email" className="text-xs sm:text-sm font-medium">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="rounded-full border border-gray-300 focus:outline-none focus:border-primary text-base bg-white/70 backdrop-blur px-5 py-3 shadow-sm"
                    />
                  </div>
                </motion.div>
                <motion.div variants={itemVariants} className="space-y-1 sm:space-y-2">
                  <label htmlFor="phone" className="text-xs sm:text-sm font-medium">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={handleChange}
                    className="rounded-full border border-gray-300 focus:outline-none focus:border-primary text-base bg-white/70 backdrop-blur px-5 py-3 shadow-sm"
                  />
                </motion.div>
                <motion.div variants={itemVariants} className="space-y-1 sm:space-y-2">
                  <label htmlFor="message" className="text-xs sm:text-sm font-medium">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="rounded-2xl border border-gray-300 focus:outline-none focus:border-primary text-base bg-white/70 backdrop-blur px-5 py-3 shadow-sm resize-none min-h-[100px]"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full md:w-auto group relative z-20 overflow-hidden px-12 py-5 rounded-full bg-gradient-to-r from-pink-500 via-blue-500 to-green-400 text-white text-lg font-bold shadow-2xl hover:from-blue-600 hover:via-pink-500 hover:to-green-400 hover:scale-105 hover:shadow-3xl transition-all duration-200 border-0 focus:ring-4 focus:ring-blue-300"
                    disabled={isSubmitting}
                  >
                    <span className="relative z-10 flex items-center">
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 text-white" />
                    </span>
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}