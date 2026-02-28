import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

const outcomes = [
    {
        id:1,
        title:'40+ Languages',
        text: 'AI-generated voiceovers to localize content at scale.'
    },
    {
        id:2,
        title:'3× ROI',
        text:'Smarter ad placement and timing for better revenue.',
    },
    {
        id:3,
        title:'Real-Time',
        text:'Performance dashboards with actionable insights.',
    },
    {
        id:4,
        title:'API',
        text:'REST API for seamless integration into your workflows.',
    },
    {
        id:5,
        title:'Enterprise',
        text:'Robust, compliant infrastructure built for scale.',
    },
    {
        id:6,
        title:'Fast Onboarding',
        text:'Dedicated guidance to get you live quickly.'
    }
]

const Features = () => {
  return (
   <section className='container-custom section-spacing'>
        <div className='lg:flex justify-between'>
            <h2 className='text-3xl lg:text-4xl font-bold text-foreground pb-4 lg:pb-0'>What You Get with Every Plan</h2>
            <Link to='/contact-us'>
                <Button variant='secondary'>Talk To Our Sales Team <ChevronRight size={18}/></Button>
            </Link>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 pt-14'>
            {outcomes.map((items)=>(
                <div key={items.id}>
                    <h3 className='text-h3 text-foreground'>{items.title}</h3>
                    <p className='sub-text text-[#888888]'>{items.text}</p>
                </div>
            ))}
        </div>
   </section>
  )
}

export default Features
