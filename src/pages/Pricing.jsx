import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CtaSection from '@/components/sections/CtaSection'
import Plan from '@/components/sections/Plan'
import Features from '@/components/sections/Features'

const Pricing = () => {
  return (
    <main>
      <section className='container-custom'><Header/></section>
      <Plan/>
      <Features/>
      <CtaSection heading="Join the Shift Toward"
        highlight="Intelligent Ops"
        description="Whether you're scaling across geographies or just starting your AI journey, Zapverse helps you move faster, with less guesswork."
        buttonText="Talk to Our Team"/>
      <Footer/>
    </main>
  )
}

export default Pricing
