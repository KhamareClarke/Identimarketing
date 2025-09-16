"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Mail, Linkedin, Twitter, Github } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const team = {
  "khamare-clarke": {
    name: "Khamare Clarke",
    role: "UK Leading AI Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974",
    initials: "KC",
    bio: "Khamare is a pioneering force in AI engineering, combining deep technical expertise with a strategic understanding of digital marketing. His innovative approach has helped numerous businesses implement cutting-edge AI solutions that drive real results.",
    expertise: [
      "Advanced AI Implementation",
      "Machine Learning Systems",
      "Digital Marketing Strategy",
      "SEO Optimization",
      "Paid Advertising",
      "Technical Architecture"
    ],
    achievements: [
      "Led development of proprietary AI marketing algorithms",
      "Implemented AI solutions for Fortune 500 companies",
      "Published research on AI in digital marketing",
      "Speaker at major tech conferences"
    ],
    education: "MSc in Artificial Intelligence from Imperial College London",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  "llewellyn-livingston": {
    name: "Llewellyn Livingston",
    role: "Business Consultant & Project Manager",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974",
    initials: "LL",
    bio: "With over 15 years of experience in business consulting and project management, Llewellyn excels at bridging the gap between technical implementation and business strategy. His expertise in AI implementation has transformed countless organizations.",
    expertise: [
      "Project Management",
      "Business Strategy",
      "AI Implementation",
      "Team Leadership",
      "Process Optimization",
      "Change Management"
    ],
    achievements: [
      "Successfully managed $50M+ worth of projects",
      "Implemented AI solutions across 100+ businesses",
      "Certified PMP and Scrum Master",
      "Award-winning project manager"
    ],
    education: "MBA from London Business School",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  "faiz-saif": {
    name: "Faiz Saif",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974",
    initials: "FS",
    bio: "Faiz is a full-stack developer with a passion for creating scalable, efficient solutions. His expertise in modern web technologies and cloud architecture has been instrumental in delivering robust applications for our clients.",
    expertise: [
      "Full-Stack Development",
      "Cloud Architecture",
      "API Design",
      "Database Management",
      "System Integration",
      "Performance Optimization"
    ],
    achievements: [
      "Developed enterprise-level applications",
      "Created innovative cloud solutions",
      "Open source contributor",
      "Tech community mentor"
    ],
    education: "BSc in Computer Science from University of Manchester",
    social: {
      linkedin: "#",
      github: "#"
    }
  },
  "precious-ike": {
    name: "Precious Ike",
    role: "Brand & SEO Specialist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976",
    initials: "PI",
    bio: "Precious brings creativity and analytical precision to brand development and SEO strategy. Her comprehensive approach to digital marketing has helped businesses achieve outstanding visibility and engagement across all platforms.",
    expertise: [
      "Brand Strategy",
      "SEO Optimization",
      "Social Media Marketing",
      "Content Strategy",
      "Google Analytics",
      "Market Research"
    ],
    achievements: [
      "Increased client organic traffic by 300%",
      "Developed viral social media campaigns",
      "Google certified professional",
      "Featured in marketing publications"
    ],
    education: "MA in Digital Marketing from University of Leeds",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  }
}

export default function TeamMemberPage({ params }: { params: { slug: string } }) {
  const member = team[params.slug as keyof typeof team]
  
  if (!member) {
    return (
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1 container py-16">
          <h1 className="text-3xl font-bold mb-4">Team Member Not Found</h1>
          <p className="mb-6">The team member you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/#team">View All Team Members</Link>
          </Button>
        </main>
        <SiteFooter />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container max-w-4xl py-8 sm:py-12 px-4 sm:px-6">
          <Button variant="ghost" className="mb-6 sm:mb-8 group text-xs sm:text-sm h-8 sm:h-9" asChild>
            <Link href="/#team" className="flex items-center">
              <ArrowLeft className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:-translate-x-1" />
              Back to team
            </Link>
          </Button>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="overflow-hidden border border-border/50">
              <div className="relative h-48 sm:h-64 bg-gradient-to-r from-primary/20 to-blue-500/20">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <div className="relative">
                    <Avatar className="w-32 h-32 sm:w-40 sm:h-40 border-4 border-background">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback className="text-2xl sm:text-3xl bg-primary/10 text-primary">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-blue-500/20 animate-pulse-slow"></div>
                  </div>
                </div>
              </div>
              
              <CardContent className="pt-20 sm:pt-24 p-6 sm:p-8">
                <div className="text-center mb-8 sm:mb-10">
                  <h1 className="text-2xl sm:text-3xl font-bold mb-2">{member.name}</h1>
                  <p className="text-lg text-muted-foreground mb-4">{member.role}</p>
                  <div className="flex justify-center gap-3">
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                        <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                        <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
                      </a>
                    )}
                    {member.social.github && (
                      <a href={member.social.github} className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                        <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h2 className="text-xl font-semibold mb-3">About</h2>
                    <p className="text-muted-foreground">{member.bio}</p>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-3">Expertise</h2>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-3">Key Achievements</h2>
                    <ul className="space-y-2">
                      {member.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center gap-2 text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-3">Education</h2>
                    <p className="text-muted-foreground">{member.education}</p>
                  </div>

                  <div className="pt-4">
                    <Button className="w-full sm:w-auto group relative overflow-hidden" asChild>
                      <Link href="/#contact" className="flex items-center justify-center">
                        <span className="relative z-10 flex items-center">
                          Contact {member.name.split(" ")[0]}
                          <Mail className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 opacity-100 group-hover:opacity-90 transition-opacity"></span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}