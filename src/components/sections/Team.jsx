import React from 'react'
import { Dot } from 'lucide-react'
import sam from '@/assets/images/sam.png'
import sia from '@/assets/images/sia.png'
import daniel from '@/assets/images/daniel.png'
import fileicon from '@/assets/icons/fileicon.svg'
import meter from '@/assets/icons/meter.svg'
import rise from '@/assets/icons/rise.svg'
import mobile from '@/assets/icons/mobile.svg'
import { motion } from 'framer-motion'

const Team = () => {
  return (
    <section>
        <div className='container-custom pt-16'>
            <div className='flex items-center justify-center'>
                <div className='pb-5 lg:text-center'>
                    {/* Eyebrow */}
                    <span className='w-fit inline-flex items-center gap-2 font-bold text-start eyeBrow'>
                        <span className='w-5'><Dot /></span>
                        Built by Builders. Backed by Operators.
                    </span>
                    {/* Heading */}
                    <h2 className='text-h1 lg:text-center pt-4 text-foreground'>
                        Founders & Leadership
                    </h2>
                    {/* Sub-text */}
                    <p className='sub-text text-muted pt-2 lg:pb-5 max-w-4xl mx-auto'>
                        Our leadership blends deep experience in AI, telecom infrastructure, and digital media operations. 
                        They’ve scaled enterprise platforms, 
                        launched global content systems, and understand the real-world friction that Zapverse is built to solve.
                    </p>
                </div> 
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4'>
                <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.3}} transition={{duration:0.6, ease:"easeOut"}} className='flex flex-col items-center justify-center p-3'>
                    <img src={sam} alt="Portrait of Sam, CEO" />
                    <h4 className='text-[20px] text-foreground uppercase pt-4'>Sam Ackerman</h4>
                    <p className='uppercase text-subtle'>CEO</p>
                </motion.div>
                <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.3}} transition={{duration:0.6, ease:"easeOut"}} className='flex flex-col items-center justify-center p-3'>
                    <img src={daniel} alt="Portrait of Daniel Ricardo, CTO" />
                    <h4 className='text-[20px] text-foreground uppercase pt-4'>Daniel Ricardo</h4>
                    <p className='uppercase text-subtle'>CTO</p>
                </motion.div>
                <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.3}} transition={{duration:0.6, ease:"easeOut"}} className='flex flex-col items-center justify-center p-3'>
                    <img src={sia} alt="Portrait of Maya Saran, CFO" />
                    <h4 className='text-[20px] text-foreground uppercase pt-4'>Maya Saran</h4>
                    <p className='uppercase text-subtle'>CFO</p>
                </motion.div>
            </div>
        </div>
        <div className='min-h-150 back-logo'>
            <div className='flex flex-col container-custom pt-8'>
                <span className='w-fit inline-flex items-center gap-2 font-bold text-start eyeBrow'>
                    <span className='w-5'><Dot /></span>
                    Our Philosophy
                </span>
                <h2 className='text-h1 text-foreground py-6 max-w-2xl'>
                    <span className='gradient-text'>Intelligence </span>
                    is the New Infrastructure
                </h2>
                <div className='py-2.5 inline-flex gap-2'>
                    <img src={fileicon} alt="file-icon" />
                    <h4 className='text-[24px] text-foreground'>Context-Aware AI</h4>
                </div>
                <div className='py-2.5 inline-flex gap-2'>
                    <img src={meter} alt="meter" />
                    <h4 className='text-[24px] text-foreground'>Performance-Centric Thinking</h4>
                </div>
                <div className='py-2.5 inline-flex gap-2'>
                    <img src={mobile} alt="mobile-icon" />
                    <h4 className='text-[24px] text-foreground'>Radically Usable Interfaces</h4>
                </div>
                <div className='py-2.5 inline-flex gap-2'>
                    <img src={rise} alt="mobile-icon" />
                    <h4 className='text-[24px] text-foreground'>Built for Scale, Not Complexity</h4>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Team
