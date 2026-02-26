import React from 'react'
import { Dot } from 'lucide-react'
import linechart from '@/assets/images/linechart.png'

const stats = [
    {
        data: '80%',
        datapoint: 'reduction in delivery time',
        statData: 'Zapverse speeds up dubbing, subtitling, and localization, faster than traditional or top AI tools.',
    },
    {
        data: '60%',
        datapoint: 'Reduced overhead',
        statData: 'No manual syncing or voice sourcing-freeing your team for creative work.',
    },
    {
        data:'3x',
        datapoint: 'faster time to market',
        statData: 'Instant localization ensures on-time launches and boosts early engagement.',
    }
]

const OperateStats = () => {
  return (
    <section className='container-custom section-spacing'>
        <div className='grid grid-cols-1 lg:grid-cols-[0.8fr_1fr] lg:gap-4 pb-6'>
            <div>
                {/* Eyebrow */}
                <span className='w-fit inline-flex items-center gap-2 font-bold text-start eyeBrow'>
                    <span className='w-5'><Dot /></span>
                    Operate at the Speed of AI, Without the Chaos
                </span>
                <h2 className='text-4xl lg:text-5xl font-bold text-foreground py-4 max-w-85'>
                    Our Role in the 
                    <span className='gradient-text'> AI Generation</span>
                </h2>
            </div>
            <div className='flex items-center'>
                <p className='sub-text text-muted text-medium'>Most organizations want AI—but don’t know how to start. 
                Zapverse bridges the gap between ambition and execution with targeted tools, 
                seamless integration, and clear ROI.</p>
            </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-[0.8fr_1fr] gap-2.5'>
            <div>
                <h3 className='text-5xl font-bold gradient-text'>225%</h3>
                <p className='sub-text text-neutral-350 font-bold max-w-50'>more efficient than alternatives.</p>
                <img src={linechart} alt="efficiency chart" />
            </div>
            <div className='flex flex-col justify-center'>
                {stats.map((textData)=>(
                    <div key={textData.datapoint} className='grid grid-cols-1 lg:grid-cols-[0.4fr_1fr] gap-2 lg:gap-6 py-4 border-b border-neutral-900'>
                        <div className='inline-flex gap-4 items-center lg:flex lg:flex-col lg:items-start lg:gap-1'>
                            <h2 className='text-5xl text-muted'>{textData.data}</h2>
                            <p className='sub-text text-muted max-w-50 font-medium'>{textData.datapoint}</p>
                        </div>
                        <div className='flex flex-col justify-center'>
                            <p className='sub-text font-medium text-muted'>{textData.statData}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default OperateStats
