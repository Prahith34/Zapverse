import React from 'react'
import { Dot } from 'lucide-react'
import operations from '@/assets/images/operations.png'
import workflowops from '@/assets/images/workflowops.png'

const MordernAI = () => {
  return (
    <section className='container-custom section-spacing'>
        <div className='flex flex-col items-center justify-center'>
            <span className='w-fit inline-flex items-center gap-2 font-bold text-start eyeBrow'>
                <span className='w-5'><Dot /></span>
                The Telecom Challenge Today
            </span>
            <h2 className='text-h1 text-center text-foreground py-4'>
                Modernize VAS for the
                <span className='gradient-text'> AI Era</span>
            </h2>
            <p className='sub-text text-muted text-center max-w-3xl'>Your subscribers expect on-demand, high-quality, localized experiences. 
                Zapverse helps telecom leaders transform Value-Added Services (VAS) into real growth drivers.
            </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 py-12'>
            <div className='lg:border-r sm:border-r border-[#2C2C2C] sm:p-4 lg:pl-12 lg:pr-12'>
                <h3 className='text-h3 text-foreground'>Optimize Operations with AI Intelligence</h3>
                <p className='sub-text text-neutral-850'>Deliver multilingual content in hours, optimize ad placement for better ARPU, and create personalized local 
                    experiences that drive stronger customer loyalty.
                </p>
                <img src={operations} alt="Optimized Operations with AI" />
            </div>
            <div className='sm:p-4 lg:pl-12 lg:pr-12'>
                <h3 className='text-h3 text-foreground'>Enable Seamless, Compliant Workflows</h3>
                <p className='sub-text text-neutral-850'>Effortlessly meet local compliance requirements, 
                    streamline fragmented workflows into one intelligent platform, and accelerate time-to-market for regional rollouts.
                </p>
                <img src={workflowops} alt="Enabling Seamless Workflows" />
            </div>
        </div>
    </section>
  )
}

export default MordernAI
