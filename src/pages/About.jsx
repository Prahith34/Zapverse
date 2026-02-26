import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import AboutHero from '@/components/sections/AboutHero'
import CtaSection from '@/components/sections/CtaSection'
import OperateStats from '@/components/sections/OperateStats'
import Team from '@/components/sections/Team'
import Values from '@/components/sections/Values'
import WorkflowMap from '@/components/sections/WorkflowMap'
import React from 'react'

const About = () => {
  return (
    <main>
      <section className='container-custom'><Header/></section>
      <AboutHero/>
      <section className='bg-neutral-800'><Team/></section>
      <OperateStats/>
      <WorkflowMap/>
      <Values/>
      <CtaSection heading="Join the Shift Toward"
        highlight="Intelligent Ops"
        description="Whether you're scaling across geographies or just starting your AI journey, Zapverse helps you move faster, with less guesswork."
        buttonText="Talk to Our Team"/>
      <Footer/>
    </main>
  )
}

export default About
