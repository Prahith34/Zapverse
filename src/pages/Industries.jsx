import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CtaSection from '@/components/sections/CtaSection'
import HeroIndustry from '@/components/sections/HeroIndustry'
import InfiniteCarousel from '@/components/ui/InfiniteCarousel'
import Content from '@/components/sections/Content'
import MordernAI from '@/components/sections/MordernAI'
import SmartAutomation from '@/components/sections/SmartAutomation'
import Localization from '@/components/sections/Localization'

const Industries = () => {
  return (
    <main>
      <section className='container-custom'><Header/></section>
      <HeroIndustry/>
      <InfiniteCarousel/>
      <Content/>
      <section className='bg-[#191919]'><MordernAI/></section>
      <SmartAutomation/>
      <Localization/>
      <CtaSection heading="Join the Shift Toward"
        highlight="Intelligent Ops"
        description="Whether you're scaling across geographies or just starting your AI journey, Zapverse helps you move faster, with less guesswork."
        buttonText="Talk to Our Team"/>
      <Footer/>
    </main>
  )
}

export default Industries
