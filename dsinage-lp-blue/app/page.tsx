'use client'

import { useEffect, useState } from 'react'
import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import BenefitsSection from '@/components/BenefitsSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import UseCases from '@/components/UseCases'
import ProductShowcase from '@/components/ProductShowcase'
import PricingPlans from '@/components/PricingPlans'
import WorkflowSection from '@/components/WorkflowSection'
import CoverageMap from '@/components/CoverageMap'
import ContactSection from '@/components/ContactSection'
import Navigation from '@/components/Navigation'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black overflow-x-hidden">
      <Navigation scrolled={scrolled} />
      <Hero />
      <AboutSection />
      <BenefitsSection />
      <UseCases />
      {/* <WhyChooseUs /> */}
      {/* <ProductShowcase /> */}
      <PricingPlans />
      <WorkflowSection />
      <CoverageMap />
      <ContactSection />
    </main>
  )
}