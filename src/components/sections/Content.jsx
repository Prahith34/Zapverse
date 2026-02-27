import React from 'react'
import { Dot } from 'lucide-react'
import global from '@/assets/icons/global.svg'
import costs from '@/assets/icons/costs.svg'
import Quality from '@/assets/icons/Quality.svg'
import compliance from '@/assets/icons/compliance.svg'
import workflows from '@/assets/icons/workflows.svg'

const features = [
  {
    title: "Slow Localization",
    description: "Weeks-long dubbing cycles delay launches.",
    icon: global,
  },
  {
    title: "High Costs",
    description: "Manual production strain budgets.",
    icon: costs,
  },
  {
    title: "Inconsistent Quality",
    description: "Hard to maintain tone across regions.",
    icon: Quality,
  },
  {
    title: "Compliance Complexity",
    description: "Local language & accessibility rules.",
    icon: compliance,
  },
  {
    title: "Fragmented Workflows",
    description: "Multiple tools, manual handoffs.",
    icon: workflows,
  },
];

const Content = () => {
  return (
    <section className='container-custom section-spacing'>
        <span className='w-fit inline-flex items-center gap-2 font-bold text-start eyeBrow'>
            <span className='w-5'><Dot /></span>
            The Telecom Challenge Today
        </span>
        <h2 className='text-h1 text-foreground py-4 max-w-xl'>
            What Slows Telecom
            <span className='gradient-text'> Content Teams Down</span>
        </h2>
        <p className='sub-text font-medium text-muted max-w-2xl'>
            Telecom providers like Airtel and Jio must deliver personalized, 
            multilingual, monetized content fast. But legacy workflows can’t keep up.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-12 gap-12'>
            {features.map((feature,index)=>(
                <div key={index}>
                    <img src={feature.icon} alt={feature.title} />
                    <h3 className='text-h3 py-2 text-2xl text-foreground'>{feature.title}</h3>
                    <p className='sub-text text-neutral-850'>{feature.description}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Content
