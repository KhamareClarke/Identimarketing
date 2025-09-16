import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, MapPin, Phone, Mail, ArrowRight, Globe, Users, Target, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const ukLocations = [
  {
    city: "London",
    address: "123 Digital Avenue, London, EC1A 1BB",
    phone: "+44 20 1234 5678",
    email: "london@identimarketing.com",
    services: ["SEO Services", "Digital Marketing", "Web Development", "Social Media Management"],
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad"
  },
  {
    city: "Manchester",
    address: "45 Tech Street, Manchester, M1 2AB",
    phone: "+44 161 987 6543",
    email: "manchester@identimarketing.com",
    services: ["SEO Services", "Content Marketing", "Brand Identity", "PPC Advertising"],
    image: "https://images.unsplash.com/photo-1543674892-8f7c7ce61394"
  },
  {
    city: "Birmingham",
    address: "78 Marketing Road, Birmingham, B1 1TF",
    phone: "+44 121 456 7890",
    email: "birmingham@identimarketing.com",
    services: ["SEO Services", "Web Development", "Social Media Management", "Email Marketing"],
    image: "https://images.unsplash.com/photo-1571576870939-8c5ccc7d7e61"
  },
  {
    city: "Edinburgh",
    address: "32 Royal Mile, Edinburgh, EH1 1PQ",
    phone: "+44 131 234 5678",
    email: "edinburgh@identimarketing.com",
    services: ["SEO Services", "Digital Marketing", "Brand Identity", "Content Creation"],
    image: "https://images.unsplash.com/photo-1568797629192-908d1aefe100"
  },
  {
    city: "Glasgow",
    address: "56 Highland Street, Glasgow, G1 2CD",
    phone: "+44 141 876 5432",
    email: "glasgow@identimarketing.com",
    services: ["SEO Services", "Web Development", "Digital Marketing", "Social Media Advertising"],
    image: "https://images.unsplash.com/photo-1556649102-18d00a0d314c"
  },
  {
    city: "Stoke-on-Trent",
    address: "15 Pottery Lane, Stoke-on-Trent, ST1 3DE",
    phone: "+44 178 234 5678",
    email: "stoke@identimarketing.com",
    services: ["SEO Services", "Local SEO", "Web Design", "Digital Marketing"],
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99"
  }
];

const usLocations = [
  {
    city: "New York",
    address: "456 Digital Street, New York, NY 10001",
    phone: "+1 212 987 6543",
    email: "newyork@identimarketing.com",
    services: ["SEO Services", "Digital Marketing", "Web Development", "Social Media Management"],
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9"
  },
  {
    city: "Los Angeles",
    address: "789 Tech Boulevard, Los Angeles, CA 90001",
    phone: "+1 323 456 7890",
    email: "la@identimarketing.com",
    services: ["SEO Services", "Content Marketing", "Brand Identity", "Influencer Marketing"],
    image: "https://images.unsplash.com/photo-1580655653885-65763b2597d0"
  },
  {
    city: "Chicago",
    address: "321 Windy Avenue, Chicago, IL 60601",
    phone: "+1 312 345 6789",
    email: "chicago@identimarketing.com",
    services: ["SEO Services", "Web Development", "Digital Marketing", "Email Marketing"],
    image: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f"
  },
  {
    city: "Miami",
    address: "123 Ocean Drive, Miami, FL 33101",
    phone: "+1 305 234 5678",
    email: "miami@identimarketing.com",
    services: ["SEO Services", "Social Media Management", "Brand Identity", "Content Creation"],
    image: "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f"
  },
  {
    city: "San Francisco",
    address: "456 Tech Valley, San Francisco, CA 94101",
    phone: "+1 415 876 5432",
    email: "sf@identimarketing.com",
    services: ["SEO Services", "Web Development", "Digital Marketing", "App Development"],
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29"
  },
  {
    city: "Boston",
    address: "789 Harbor Street, Boston, MA 02101",
    phone: "+1 617 234 5678",
    email: "boston@identimarketing.com",
    services: ["SEO Services", "Content Marketing", "Digital Strategy", "Social Media Advertising"],
    image: "https://images.unsplash.com/photo-1501979376754-2ff867a4f659"
  }
];

export default function LocationsPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    },
    hover: {
      y: -5,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-background/90">
      <SiteHeader />
      <main className="flex-1">
        <div className="relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-pink-500/5 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full blur-3xl"></div>
          </div>
          
          <div className="container relative z-10 max-w-6xl py-12 sm:py-20 px-4 sm:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
              ref={ref}
              className="mb-6 sm:mb-10"
            >
              <Button variant="ghost" className="group px-0 hover:bg-transparent" asChild>
                <Link href="/" className="flex items-center text-sm sm:text-base font-medium text-muted-foreground hover:text-foreground">
                  <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  Back to home
                </Link>
              </Button>
            </motion.div>
            
            <motion.div 
              className="text-center mb-12 sm:mb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <motion.div 
                className="inline-flex items-center px-4 py-2 mb-4 sm:mb-6 text-sm sm:text-base font-medium rounded-full bg-gradient-to-r from-pink-500/10 via-blue-500/10 to-green-400/10 text-primary border border-white/10 backdrop-blur-sm"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-pink-500" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-blue-500 to-green-400">
                  Global Reach
                </span>
              </motion.div>
              
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 font-heading bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80"
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Local Leverage, <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-blue-500 to-green-400">Global Reach</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                We help businesses in London, Manchester, Birmingham, Edinburgh, Glasgow, Stoke-on-Trent — and across the US — grow with custom digital strategies.
              </motion.p>
            </motion.div>
            
            {/* Stats Section */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-20"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={containerVariants}
            >
              {[
                { icon: 'MapPin', value: '20+', label: 'Office Locations' },
                { icon: 'Users', value: '100+', label: 'Local SEO Experts' },
                { icon: 'Target', value: '1,000+', label: 'Digital Projects' },
                { icon: 'Award', value: '10+', label: 'Years Experience' }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="bg-background/70 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
{{ ... }}
                >
                  <div className="inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-r from-pink-500/10 via-blue-500/10 to-green-400/10 mb-3 sm:mb-4">
                    {React.createElement(
                      {
                        'MapPin': MapPin,
                        'Users': Users,
                        'Target': Target,
                        'Award': Award
                      }[stat.icon],
                      {
                        className: "h-5 w-5 sm:h-6 sm:w-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-blue-500 to-green-400"
                      }
                    )}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
                    {stat.value}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          
          <motion.div 
            id="locations"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-12 sm:mb-16"
          >
            <Tabs defaultValue="uk" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 sm:mb-12 p-1 bg-muted/30 backdrop-blur-sm border border-white/10 rounded-full">
                <TabsTrigger 
                  value="uk" 
                  className="text-sm sm:text-base font-medium data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:via-blue-500 data-[state=active]:to-green-400 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-full transition-all duration-200"
                >
                  United Kingdom
                </TabsTrigger>
                <TabsTrigger 
                  value="us" 
                  className="text-sm sm:text-base font-medium data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:via-blue-500 data-[state=active]:to-green-400 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-full transition-all duration-200"
                >
                  United States
                </TabsTrigger>
              </TabsList>
            
            <TabsContent value="uk" className="space-y-8">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={containerVariants}
              >
                {ukLocations.map((location, index) => (
                  <motion.div 
                    key={location.city}
                    variants={itemVariants}
                    whileHover="hover"
                  >
                    <Card className="h-full bg-background/70 backdrop-blur-sm border border-white/10 hover:border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={location.image}
                          alt={`${location.city} Office`}
                          fill
                          style={{ objectFit: "cover" }}
                          className="transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-4 sm:p-6 w-full">
                          <h3 className="font-bold text-xl sm:text-2xl text-white">{location.city}</h3>
                          <p className="text-sm text-white/80">United Kingdom</p>
                        </div>
                      </div>
                      
                      <CardHeader className="p-6 sm:p-8">
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-gradient-to-r from-pink-500/10 via-blue-500/10 to-green-400/10">
                            <MapPin className="h-5 w-5 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-blue-500 to-green-400" />
                          </div>
                          <div>
                            <CardTitle className="text-lg sm:text-xl font-semibold mb-1">Address</CardTitle>
                            <CardDescription className="text-sm sm:text-base">{location.address}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="p-6 sm:p-8 pt-0 space-y-6">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-1">
                            <Phone className="h-4 w-4 text-primary" />
                            Contact
                          </div>
                          <p className="text-sm sm:text-base">{location.phone}</p>
                          <p className="text-sm sm:text-base text-muted-foreground">{location.email}</p>
                        </div>
                        
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium text-muted-foreground">Services</h4>
                          <ul className="space-y-2">
                            {location.services.map((service, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 mt-2 flex-shrink-0"></div>
                                <span className="text-sm sm:text-base">{service}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <Button 
                          variant="outline" 
                          className="w-full mt-4 group relative overflow-hidden border border-border/30 hover:border-transparent"
                          asChild
                        >
                          <Link href="/contact" className="flex items-center justify-center">
                            <span className="relative z-10">Contact This Office</span>
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
            
            <TabsContent value="us" className="space-y-8">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={containerVariants}
              >
                {usLocations.map((location, index) => (
                  <motion.div 
                    key={location.city}
                    variants={itemVariants}
                    whileHover="hover"
                  >
                    <Card className="h-full bg-background/70 backdrop-blur-sm border border-white/10 hover:border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={location.image}
                          alt={`${location.city} Office`}
                          fill
                          style={{ objectFit: "cover" }}
                          className="transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-4 sm:p-6 w-full">
                          <h3 className="font-bold text-xl sm:text-2xl text-white">{location.city}</h3>
                          <p className="text-sm text-white/80">United States</p>
                        </div>
                      </div>
                      
                      <CardHeader className="p-6 sm:p-8">
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-gradient-to-r from-pink-500/10 via-blue-500/10 to-green-400/10">
                            <MapPin className="h-5 w-5 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-blue-500 to-green-400" />
                          </div>
                          <div>
                            <CardTitle className="text-lg sm:text-xl font-semibold mb-1">Address</CardTitle>
                            <CardDescription className="text-sm sm:text-base">{location.address}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="p-6 sm:p-8 pt-0 space-y-6">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-1">
                            <Phone className="h-4 w-4 text-primary" />
                            Contact
                          </div>
                          <p className="text-sm sm:text-base">{location.phone}</p>
                          <p className="text-sm sm:text-base text-muted-foreground">{location.email}</p>
                        </div>
                        
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium text-muted-foreground">Services</h4>
                          <ul className="space-y-2">
                            {location.services.map((service, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 mt-2 flex-shrink-0"></div>
                                <span className="text-sm sm:text-base">{service}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <Button 
                          variant="outline" 
                          className="w-full mt-4 group relative overflow-hidden border border-border/30 hover:border-transparent"
                          asChild
                        >
                          <Link href="/contact" className="flex items-center justify-center">
                            <span className="relative z-10">Contact This Office</span>
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-12 sm:mt-16 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Need Digital Marketing or SEO Services?</h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
              Whether you're in the UK, US, or anywhere else in the world, our team of digital marketing experts is ready to help your business grow online.
            </p>
            <Button size="lg" className="group relative overflow-hidden" asChild>
              <Link href="/#contact" className="flex items-center">
                <span className="relative z-10 flex items-center">
                  Get in Touch
        </div>
      </div>
    </div>
  </main>
  <SiteFooter />
</div>
)