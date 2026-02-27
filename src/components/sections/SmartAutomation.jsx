import React from 'react'
import { Dot } from 'lucide-react'
import Toolkit from '@/assets/images/Toolkit.png'
import microphone from '@/assets/icons/microphone.svg'
import card from '@/assets/icons/card.svg'
import radio from '@/assets/icons/radio.svg'
import analytics from '@/assets/icons/analytics.svg'
import code from '@/assets/icons/code.svg'

const models = [
    {
        id:'1',
        title: 'AI Dubbing in 40+ Languages',
        text: 'Consistent, high-quality voiceovers.',
        icon:microphone,
    },
    {
        id:'2',
        title: 'Automated Subtitling',
        text: 'Accurate, compliant, on-brand.',
        icon:card,
    },
    {
        id:'3',
        title: 'Ad Optimization',
        text: 'AI-driven placement & timing for higher yields.',
        icon:radio,
    },
    {
        id:'4',
        title: 'Advanced Analytics',
        text: 'Track content usage and ROI.',
        icon:analytics,
    },
    {
        id:'5',
        title: 'API & Integrations',
        text: 'Seamlessly connect to existing systems.',
        icon:code,
    },
]

const SmartAutomation = () => {
  return (
    <section className='container-custom section-spacing'>
        <div className='grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 lg:gap-8'>
            <div className=''>
                <span className='w-fit inline-flex items-center gap-2 font-bold text-start eyeBrow'>
                    <span className='w-5'><Dot /></span>
                    AI-Powered Workflows
                </span>
                <h2 className='text-h1 text-foreground py-4'>
                    Replace Manual Bottlenecks with
                    <span className='gradient-text'> Smart Automation</span>
                </h2>
            </div>
            <div className='flex flex-col justify-center'>
                <p className='sub-text font-medium text-muted max-w-2xl'>
                    Zapverse unifies your entire content production workflow into one intelligent layer, 
                    streamlining everything from ideation and collaboration to creation, distribution, 
                    and optimization.
                </p>
            </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
                <img src={Toolkit} alt="Ai Automation workflow" />
            </div>
            <div className='flex flex-col gap-4'>
                {models.map((items)=>(
                    <div key={items.id} className='inline-flex gap-5'>
                        <div className='flex justify-center'>
                            <img src={items.icon} alt={items.title} />
                        </div>
                        <div >
                            <h3 className='text-h3 text-foreground'>{items.title}</h3>
                            <p className='sub-text text-muted text-[12px]'>{items.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default SmartAutomation
