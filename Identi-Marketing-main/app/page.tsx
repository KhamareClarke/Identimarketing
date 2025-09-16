import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { PricingSection } from "@/components/pricing-section"
import { LocationsSection } from "@/components/locations-section"
import { TeamSection } from "@/components/team-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { TrustBadges } from "@/components/trust-badges"
import BlogPreviewSection from "@/components/blog-preview-section"
import { AnimatedSection } from "@/components/animated-section"
import { CTASection } from "@/components/cta-section"
import { ContactSection } from "@/components/contact-section"
import ScarcityPopup from "@/components/scarcity-popup"
import LiveChatWidget from "@/components/live-chat-widget"
import ShortContactForm from "@/components/short-contact-form"
import CookieConsent from "@/components/cookie-consent"
import Head from "next/head"

export default function Home() {
  // CookieConsent is mounted globally for compliance

  return (
    <>
      <CookieConsent />
      <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Head>
          <title>iDENTI-Marketing | AI-Powered SEO & Digital Marketing Agency UK & US</title>
          <meta name="description" content="AI-powered SEO, digital marketing, and web development for ambitious businesses in London, Manchester, Stoke-on-Trent, and across the UK & US. Book your free strategy call or get a free SEO audit today!" />
          <meta name="keywords" content="SEO, AI marketing, web development, digital marketing, Stoke-on-Trent, London, Manchester, UK, US, free audit, strategy call, lead generation, conversion" />
          <meta name="robots" content="index,follow" />
        </Head>
        <AnimatedSection direction="up"><HeroSection /></AnimatedSection>
        <AnimatedSection direction="left"><ServicesSection /></AnimatedSection>
        <AnimatedSection direction="right"><PricingSection /></AnimatedSection>
        <AnimatedSection direction="up"><LocationsSection /></AnimatedSection>
        <AnimatedSection direction="left"><TeamSection /></AnimatedSection>
        <AnimatedSection direction="right"><TrustBadges /></AnimatedSection>
        <AnimatedSection direction="up"><TestimonialsSection /></AnimatedSection>
        <AnimatedSection direction="left"><BlogPreviewSection /></AnimatedSection>
        <AnimatedSection direction="right"><CTASection /></AnimatedSection>
        <AnimatedSection direction="up"><ContactSection /></AnimatedSection>
              </main>
      <SiteFooter />
      <ScarcityPopup />
      <LiveChatWidget />
      </div>
    </>
  );
}