import { Dot } from 'lucide-react'
import React from 'react'
import accuracy from '@/assets/icons/accuracy.svg'
import charge from '@/assets/icons/charge.svg'
import device from '@/assets/icons/device.svg'
import evolve from '@/assets/icons/evolve.svg'
import { motion } from 'framer-motion'

const features=[
    {
        id:'1',
        src: charge,
        title: 'Speed',
        subtext: 'Deliver faster without rework'
    },
    {
        id:'2',
        src: accuracy,
        title: 'Accuracy',
        subtext: 'Built-in context, trained on real content logic'
    },
    {
        id:'3',
        src: device,
        title: 'Integration',
        subtext: 'Works with your current pipeline'
    },
    {
        id:'4',
        src:evolve,
        title:'Evolution',
        subtext: 'Learns from usage, adapts over time'
    }
]

const Values = () => {
  return (
    <section className='container-custom lg:pb-10'>
        <div className='flex flex-col lg:items-center'>
            <span className='w-fit inline-flex items-center gap-2 font-bold text-start eyeBrow'>
                <span className='w-5'><Dot /></span>
                Innovation Values
            </span>
            <h2 className='text-4xl lg:text-5xl lg:text-center font-bold text-foreground py-4'>
                What Powers Every
                <span className='gradient-text'> Zapverse Release</span>
            </h2>
            <p className='text-body text-neutral-850'>Built-in context, trained on real content logic</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8'>
            {features.map((value)=>(
                <div key={value.id} className='p-4 lg:border-r lg:last:border-r-0 lg:border-neutral-950'>
                    <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.3}} transition={{duration:0.6, ease:"easeOut"}} className='flex flex-col gap-2'>
                        <img src={value.src} alt={value.title} width={80}/>
                        <h3 className='text-h3 text-foreground uppercase'>{value.title}</h3>
                        <p className='sub-text text-neutral-850'>{value.subtext}</p>
                    </motion.div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Values
