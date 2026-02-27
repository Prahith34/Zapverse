import React from 'react'
import eyebrowimg from '@/assets/icons/eyebrowimg.svg'
import { Button } from '../ui/button'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const HeroIndustry = () => {
  return (
    <section className='container-custom section-spacing bg-hero-section flex flex-col items-center justify-center'>
        {/* Eyebrow */}
            <span className='w-fit inline-flex items-center text-start gap-2 eyeBrow'>
            <span className='w-10'>
                <img width='24px' src={eyebrowimg} alt="" role="presentation" />
            </span>
            Industries We Serve
            </span>
            {/* Heading */}
            <h1 className='text-h1 lg:text-center pt-4 text-foreground max-w-3xl'>
                <span className='gradient-text'>Telecom Providers</span>
            </h1>
            <p className='text-body-lg text-center text-muted pt-2 pb-8 max-w-2xl mx-auto'>
               Helping Telecom Leaders Deliver Modern, Localized, Monetized Content at Scale
            </p>
            <Link to='/contact-us'>
                <Button variant='primary' className='text-white'>Book A Demo <ChevronRight size={18}/></Button>
            </Link>
    </section>
  )
}

export default HeroIndustry
