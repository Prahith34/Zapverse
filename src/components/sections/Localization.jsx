import React from 'react'
const percents = [
    {
        id: 1,
        title: 'Launch on time in every region.',
        num: '80%',
        text:'Faster Localization Cycles'
    },
    {
        id:'2',
        title:'Cut production expenses.',
        num:'60%',
        text:'Lower Production Costs',
    },
    {
        id:'3',
        title:'Beat competitors to market.',
        num:'3×',
        text:'Faster Go-to-Market',
    }
]

const Localization = () => {
  return (
    <section className='container-custom section-spacing'>
        <div className='grid grid-cols-1 lg:grid-cols-[1fr_0.5fr] gap-3'>
            <div>
                <h3 className='lg:text-4xl sm:text-4xl text-3xl text-muted max-w-3xl'>
                    “ We reduced localization times 
                    dramatically without losing quality. 
                    Zapverse streamlined our entire pipeline “
                </h3>
            </div>
            <div>
                <h3 className='uppercase text-[#585858]'>Grace Feeney</h3>
                <p className='text-[#474747]'>Content Operations Lead, Carthage Telecom</p>
            </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:pt-18 pt-10'>
            {percents.map((data)=>(
                <div key={data.id} className='card-data min-h-57.5 flex flex-col justify-between'>
                    <p className='sub-text font-medium text-[#888888]'>{data.title}</p>
                    <div>
                        <h2 className='lg:text-5xl sm:text-4xl text-3xl gradient-text font-bold'>{data.num}</h2>
                        <p className='gradient-text uppercase font-bold'>{data.text}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Localization
