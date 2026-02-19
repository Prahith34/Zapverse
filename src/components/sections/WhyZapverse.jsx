import React from 'react'
import { Dot } from 'lucide-react'
import elevenlabs from '@/assets/images/elevenlabs.png'
import sonix from '@/assets/images/sonix.png'
import replica from '@/assets/images/replica.png'
import waymark from '@/assets/images/waymark.png'

const ValueCard = ({ title, description, children }) => (
  <div className='rounded-2xl border valuecard border-zinc-800 bg-zinc-900/50 p-6 flex flex-col justify-between gap-4 h-full'>
    <div>
      <h3 className='text-foreground font-bold uppercase text-h3'>{title}</h3>
      <p className='text-subtle text-sm mt-2 uppercase'>{description}</p>
    </div>
    {children && <div className='mt-4'>{children}</div>}
  </div>
)

const WhyZapverse = () => {
  return (
    <section className='container-custom section-spacing lg:flex lg:items-center lg:justify-center'>
      <div>

        {/* Section Header */}
        <div className='lg:text-center'>
          <span className='w-fit inline-flex items-center gap-2 font-bold text-start eyeBrow'>
            <span className='w-5'><Dot /></span>
            Proven, Scalable, Trusted
          </span>
          <h2 className='text-h1 text-foreground py-4 '>
            <span className='gradient-text'>We're Not Just Integrating AI. </span> <br />
            We're Redefining How Enterprises Use It.
          </h2>
          <p className='text-body-lg text-muted pb-8 max-w-5xl mx-auto'>
            Zapverse turns generative AI into an efficient, ethical, and adaptable
            core for forward-thinking businesses—treating AI as a measurable driver
            of growth, not a buzzword.
          </p>
        </div>

        {/* Row 1 */}
        <div className='grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-4'>
          <div className='rounded-2xl border valuecard border-zinc-800 bg-zinc-900/50 p-6 flex flex-col justify-between gap-4 h-full'>
            <div>
              <h3 className='text-foreground font-bold uppercase text-h3'>Partnership Over Handoff</h3>
              <p className='text-subtle text-sm mt-2 uppercase'>We don't just drop tools, we stay to fine-tune, optimize, and scale with you.</p>
            </div>
            <div className='flex items-center gap-4 flex-wrap mt-4'>
              <img src={elevenlabs} alt='ElevenLabs' />
              <img src={sonix}      alt='Sonix' />
              <img src={replica}    alt='Replica' />
              <img src={waymark}    alt='Waymark' />
            </div>
          </div>
          <div className='rounded-2xl border valuecard border-zinc-800 bg-zinc-900/50 p-6 flex flex-col justify-between gap-4 h-full'>
            <div>
              <h3 className='text-foreground font-bold uppercase text-h3'>Purpose Before Product</h3>
              <p className='text-subtle text-sm mt-2 uppercase'>We start with business outcomes—like a 10% retention lift—not just algorithms. Zapverse aligns AI around real goals, defines clear KPIs, and accelerates adoption by proving value where it counts: the bottom line.</p>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className='grid grid-cols-1 lg:grid-cols-[0.5fr_1fr] gap-4 py-4'>
          <div className='rounded-2xl border valuecard border-zinc-800 bg-zinc-900/50 p-6 flex flex-col justify-between gap-4 h-full'>
            <div>
              <h3 className='text-foreground font-bold uppercase text-h3'>Clarity Over Complexity</h3>
              <p className='text-subtle text-sm mt-2 uppercase'>Zapverse AI simplifies operations by removing bottlenecks and delivering insights your team can act on instantly.</p>
            </div>
          </div>
          <div className='rounded-2xl border lastValue valuecard border-zinc-800 bg-zinc-900/50 p-6 flex flex-col justify-end lg:justify-between gap-4 h-full'>
            <div>
              <h3 className='text-foreground font-bold uppercase text-h3'>Scalability With Accountability</h3>
              <p className='text-subtle text-sm mt-2 max-w-xl uppercase'>Our tools are built for performance, but always with governance in mind.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default WhyZapverse