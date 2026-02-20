import React from 'react'
import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import Footer from '@/components/layout/Footer'
import CtaSection from '@/components/sections/CtaSection'
import InfiniteCarousel from '@/components/ui/InfiniteCarousel'
import StatsSection from '@/components/sections/StatsSection'
import WhyZapverse from '@/components/sections/WhyZapverse'
import IndustrySolutions from '@/components/sections/IndustrySolutions'
import ProblemStatement from '@/components/sections/ProblemStatement'
import AnalyticsTools from '@/components/sections/AnalyticsTools'

const Home = () => {
  return (
    <main className='w-full'>
      <section className='bg-hero container-custom'>
        <Header/>
        <Hero/>
      </section>
      <ProblemStatement/>
      <section className='bg-card'>
        <AnalyticsTools />
      </section>
      <IndustrySolutions/>
      <WhyZapverse/>
      <StatsSection/>
      <InfiniteCarousel />
      <CtaSection
        heading="Run Custom Workflow Assessment in"
        highlight="Under 3 Minutes"
        description="Get an instant score and roadmap based on your team's workflow maturity, content volume, and growth goals."
        buttonText="Book a Demo"
      />
      <Footer/>
    </main>
  )
}

export default Home
