import React from 'react'
import { Dot } from 'lucide-react'
import LocalTabs from '@/components/sections/LocalTabs'

const ProblemStatement = () => {
  return (
    <section className='container-custom pb-16 pt-12'>
        <div className='flex flex-col items-center justify-center'>
            <span className='w-fit inline-flex items-center gap-2 font-bold text-start eyeBrow'>
            <span className='w-5'><Dot /></span>
            the problem
          </span>
          <h2 className='text-h1 text-center text-foreground pt-5 pb-8 lg:py-6 '>
            Your Workflow Isn't Broken <br className='hidden lg:block' />
            <span className='gradient-text'> It's Just Behind</span>
          </h2>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <LocalTabs/>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <p className='text-ui text-muted max-w-2xl text-center'>Unlock up to <span className='gradient-text text-h3 font-semibold'>10× faster</span> content execution and 
                <span className='gradient-text text-h3 font-semibold'> 3× higher </span> ROI with Zapverse’s AI-powered analytics and 
                automation—compared to traditional workflows.
            </p>
        </div>
    </section>
  )
}

export default ProblemStatement
