import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import React from 'react'
import Contact from '@/components/sections/Contact'

const ContactUs = () => {
  return (
    <main>
      <section className='container-custom'><Header /></section>
      <Contact />
      <Footer />
    </main>
  )
}

export default ContactUs
