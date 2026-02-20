import React from 'react'
import { Dot } from 'lucide-react'
import Lottie from 'lottie-react'
import Analytics from '@/assets/animations/Analytics.json'
import search from '@/assets/icons/search.svg'
import ticker from '@/assets/icons/ticker.svg'
import safetycheck from '@/assets/icons/safetycheck.svg'

const AnalyticsTools = () => {
  return (
    <section className='container-custom section-spacing'>
        <div className='flex flex-col items-center justify-center'>
            <span className='w-fit inline-flex items-center gap-2 font-bold text-start eyeBrow'>
                <span className='w-5'><Dot /></span>
                Intelligence + Automation
            </span>
            <h2 className='text-h1 text-center text-foreground py-6 max-w-3xl'>
                <span className='gradient-text'>AI-Driven Analytics and Tools </span>
                Built for Content Scale
            </h2>
            <div className='lottie-analytics'>
                <Lottie animationData={Analytics} loop={true} autoplay={true}></Lottie>
            </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8'>
            <div className='pl-4 border-l-2 border-l-[#505050]'>
                <div className='inline-flex items-center gap-3.5'>
                    <img src={search} alt="Search Icon" />
                    <h3 className='text-h3 text-white'>Deep Content Consumption Insights</h3>
                </div>
                <p className='text-subtle'>Understand how audiences engage with content across regions, formats, and devices—down to the asset level.</p>
            </div>
            <div className='pl-4 border-l-2 border-l-[#505050]'>
                <div className='inline-flex items-center gap-3.5'>
                    <img src={ticker} alt="ticekr Icon" />
                    <h3 className='text-h3 text-white'>Predictive Decision Pathways</h3>
                </div>
                <p className='text-subtle'>Know when to launch, where to prioritize localization, 
                    and how to target high-return opportunities using AI-generated execution insights.</p>
            </div>
            <div className='pl-4 border-l-2 border-l-[#505050]'>
                <div className='inline-flex items-center gap-3.5'>
                    <img src={safetycheck} alt="ticekr Icon" />
                    <h3 className='text-h3 text-white'>Workflow Health & Risk Detection</h3>
                </div>
                <p className='text-subtle'>Zapverse maps out bottlenecks, flags delays, and visualizes workflow 
                    inefficiencies before they cost you.</p>
            </div>
        </div>
    </section>
  )
}

export default AnalyticsTools
