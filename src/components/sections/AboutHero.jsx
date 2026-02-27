import React from 'react'
import eyebrowimg from '@/assets/icons/eyebrowimg.svg'

const statements = [
    {text: 'The Problem. As demand for multilingual, multi-format content exploded, traditional workflows broke. Delays, duplicated efforts, and guesswork became the norm.'},
    {text: 'The Opportunity. These inefficiencies revealed a need for intelligent automation—something that could adapt to the speed and complexity of modern content delivery.'},
    {text: 'The Solution. Zapverse was created by AI engineers and media veterans to eliminate that friction—empowering teams to scale content smarter, faster, and with full clarity.'}
];

const AboutHero = () => {
  return (
    <section className='container-custom section-spacing'>
        <div className='flex items-center justify-center'>
            <div className='pb-5 lg:text-center'>
                {/* Eyebrow */}
                <span className='w-fit inline-flex items-center text-start gap-2 eyeBrow'>
                <span className='w-10'>
                    <img width='24px' src={eyebrowimg} alt="" role="presentation" />
                </span>
                The Future of Media & Telecom Starts Now
                </span>
                {/* Heading */}
                <h1 className='text-h1 lg:text-center pt-4 text-foreground max-w-3xl'>
                    From Friction to Flow
                    <span className='gradient-text'> Why We Built Zapverse</span>
                </h1>
                {/* Sub-text */}
                <p className='text-body-lg text-muted pt-2 pb-8 max-w-2xl mx-auto'>
                    Traditional content systems weren’t built for today’s global scale.
                     We built Zapverse to fix that.
                </p>
            </div> 
        </div>
        <div className=''>   
            <h3 className='text-h2 lg:text-center text-foreground pb-8'>Built to Scale Intelligence, Not Just Content</h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {statements.map((para)=>(
                    <div key={para.text} className='pl-4 border-l-2 border-[#505050]'>
                        <p className='text-neutral-850'>{para.text}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default AboutHero
