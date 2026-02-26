import React from 'react'
import { Button } from '@/components/ui/button'
import { useRef, useEffect } from 'react'
import { ChevronRight } from 'lucide-react'
import { Dot } from 'lucide-react'
import Lottie from 'lottie-react'
import industryAnimation from '@/assets/animations/Attachment.json'
import telecomimg from '@/assets/images/telecomimg.png'
import mediaimg from '@/assets/images/mediaimg.png'
import gamingimg from '@/assets/images/gamingimg.png'
import { Link } from 'react-router-dom'

const IndustrySolutions = () => {
  const lottieRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            lottieRef.current?.play()
            observer.disconnect() // stop observing after first play
          }
        })
      },
      { threshold: 0.3 } // triggers when 30% of section is visible
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className='container-custom pt-16 lg:pt-0 pb-8'>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='flex flex-col justify-center'>
          <span className='w-fit inline-flex items-center gap-2 font-bold text-start eyeBrow'>
            <span className='w-5'><Dot /></span>
            Industry-Specific Impact
          </span>
          <h2 className='text-h1 text-foreground py-6 max-w-2xl'>
            We Don’t Just Add AI, We Align It With
            <span className='gradient-text'>Your Growth Model</span>
          </h2>
          <div>
            <Link to='/industries'>
              <Button variant='secondary'>See How It Works <ChevronRight size={18}/></Button>
            </Link>
          </div>
        </div>
        <div>
          <Lottie lottieRef={lottieRef} animationData={industryAnimation} loop={false} autoplay={false} />
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 -mt-20 lg:mt-0 z-30'>
        <div className='industryCard'>
          <img src={telecomimg} alt="telecom-industry" />
          <div className='content-card pl-4 pr-4 pb-8 text-center'>
            <h3 className='text-h3 text-foreground'>Telecom Providers</h3>
            <p className='sub-text text-subtle'>Use AI to power VAS services, regional content delivery, and smart ad insertion</p>
          </div>
        </div>
        <div className='industryCard'>
          <img src={mediaimg} alt="media-industry" />
          <div className='content-card pl-4 pr-4 pb-8 text-center'>
            <h3 className='text-h3 text-foreground'>Media Platforms</h3>
            <p className='sub-text text-subtle'>Automate localization, streamline OTT pipelines, enhance monetization</p>
          </div>
        </div>
        <div className='industryCard'>
          <img src={gamingimg} alt="gaming-industry" />
          <div className='content-card pl-4 pr-4 pb-8 text-center'>
            <h3 className='text-h3 text-foreground'>Gaming Studios</h3>
            <p className='sub-text text-subtle'>Accelerate global launches with AI voice & dialogue generation</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IndustrySolutions
