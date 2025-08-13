'use client'

import { useEffect, useState } from 'react'
import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import BenefitsSection from '@/components/BenefitsSection'  // 導入メリットセクション追加
import WhyChooseUs from '@/components/WhyChooseUs'  // 差別化ポイントセクション追加
import UseCases from '@/components/UseCases'  // 活用事例セクション追加
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
      {/* セクションの順序を入れ替えました */}
      {/* 元の順序: AboutSection → BenefitsSection */}
      {/* 現在の順序: BenefitsSection → AboutSection */}
      {/* 簡単に元に戻せるよう、以下の2行を入れ替えてください */}
      <AboutSection />
      <BenefitsSection />
      {/* WhyChooseUsセクション - マーケティングコンサル込みの強みを訴求する時に有効化 */}
      {/* <WhyChooseUs /> */}
      <UseCases />  {/* 活用事例セクション */}
      {/* 製品ラインナップセクション - 製品が増えたら有効化 */}
      {/* <ProductShowcase /> */}
      <PricingPlans />
      <WorkflowSection />
      <CoverageMap />
      <ContactSection />
    </main>
  )
}