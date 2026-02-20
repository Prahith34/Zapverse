import { Dot } from 'lucide-react'
import React from 'react'

const stats = [
  { value: '80% Faster', label: 'Content Turnaround' },
  { value: '60% Drop', label: 'In Localization Costs' },
  { value: '100+ Dialects', label: 'Language Output' },
  { value: '20+ Enterprise', label: 'Partnerships' },
]

const StatsSection = () => {
  return (
    <section className='container-custom'>
      {/* Section Header */}
      <div className='graph-section lg:p-8'>
        <span className='w-fit inline-flex items-center gap-2 font-bold text-start eyeBrow'>
          <span className='w-5'><Dot /></span>
          Proven, Scalable, Trusted
        </span>
        <h2 className='text-h1 text-foreground py-6 max-w-2xl'>
          <span className='gradient-text'>Real Outcomes, Not Just Promises</span>
          Every result is backed by data, tailored strategy, and continuous optimization.
        </h2>
      </div>

      {/* Stat Cards */}
      <div className='grid grid-cols-1 lg:grid-cols-4 pt-12 px-4 gap-6'>
        {stats.map((stat) => (
          <div key={stat.label} className='pl-4 border-l-2 border-[#505050]'>
            <h3 className='text-foreground uppercase py-2 text-h2'>{stat.value}</h3>
            <p className='uppercase text-subtle'>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatsSection