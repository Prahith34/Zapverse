import React from 'react'
import sectionhero from '@/assets/images/sectionhero.png'
import heroimg from '@/assets/images/heroimg.png'
import eyebrowimg from '@/assets/icons/eyebrowimg.svg'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className='min-h-screen flex items-center justify-center'>
      <div className='hero-section text-center'>

        {/* Hero Image — Mobile */}
        <div className='block sm:hidden'>
          <img 
            width='100%' 
            src={sectionhero} 
            alt="Zapverse platform overview" 
          />
        </div>

        {/* Hero Image — Desktop */}
        <div className='hidden sm:flex items-center justify-center'>
          <img
            className='w-[clamp(750px,65vw,800px)] h-auto'
            src={heroimg}
            alt="Zapverse AI media platform dashboard"
          />
        </div>

        {/* Eyebrow */}
        <div className='pt-16 pb-5'>
          <span className='w-fit inline-flex items-center text-start gap-2 eyeBrow'>
            <span className='w-10'>
              <img width='24px' src={eyebrowimg} alt="" role="presentation" />
            </span>
            The Future of Media & Telecom Starts Now
          </span>
        </div>

        {/* Hero Content */}
        <div className='hero-content'>
          <h1 className='text-h1 text-center text-foreground max-w-3xl'>
            Modern Media & Telecom with
            <span className='gradient-text'> Generative AI</span>
          </h1>
          <p className='text-body-lg text-muted pt-2 pb-8 max-w-2xl mx-auto'>
            From voice automation to monetization intelligence—Zapverse empowers 
            enterprises to scale content creation and maximize revenue with speed, 
            accuracy, and intelligence.
          </p>
          <div>
            <Button className='text-white' variant='primary'>
              Request A Demo <ChevronRight size={18} />
            </Button>
            <p className='py-4 uppercase text-[#646464] text-sm'>
              100,000+ tasks automated
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero