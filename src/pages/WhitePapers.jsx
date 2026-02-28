import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CtaSection from '@/components/sections/CtaSection'
import Insights from '@/components/sections/Insights'

const WhitePapers = () => {
  return (
    <main>
      <section className='container-custom'><Header/></section>
      <Insights/>
      <CtaSection heading="Join the Shift Toward"
        highlight="Intelligent Ops"
        description="Whether you're scaling across geographies or just starting your AI journey, Zapverse helps you move faster, with less guesswork."
        buttonText="Talk to Our Team"/>
      <Footer/>
    </main>
  )
}

export default WhitePapers
