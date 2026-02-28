import React from 'react'
import { Button } from '../ui/button'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import CircleCheck from '@/assets/icons/CircleCheck.svg'

const points = 
["Up to 500 minutes/month", 
"Choose your tools: dubbing", 
"Self-serve platform access", "Standard support"];

const enterprise = [
"5000+ minutes/month", "Full AI toolkit access", "Custom integrations & API access", 
"Dedicated account manager", "Priority support & onboarding"
]

const custom=[
"Unlimited volume","Bespoke integrations","Advanced SLA options","Custom billing and reporting"
]

const Plan = () => {
  return (
    <section className='container-custom section-spacing'>
        <h1 className='text-h1 text-center text-foreground py-4 '>
            <span className='gradient-text'>Choose a Plan </span>
             That Fits Your Scale
        </h1>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 pt-12'>
            <div className='pricing-card'>
                <div className='border-b border-[#333333]'>
                    <h4 className='uppercase text-[18px] text-[#cccccc] font-bold'>Growth Plan</h4>
                    <h2 className='text-4xl font-bold text-foreground py-2'>$119<span className='text-[#555555]'>.99</span></h2>
                    <p className='sub-text text-[18px] text-[#999999] font-medium'>For scaling content teams.</p>
                    <Link to='/contact-us'>
                        <Button className="my-4" variant='secondary'>Contact Sales <ChevronRight/> </Button>
                    </Link>
                </div>
                <div className='py-4'>
                    <ul className='no-hover'>
                        {points.map((point)=>(
                            <li key={point}><div className='inline-flex py-3 items-center gap-2 sub-text font-semibold'><img src={CircleCheck} alt="" /> {point}</div></li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='pricing-card'>
                <div className='border-b border-[#333333]'>
                    <h4 className='uppercase text-[18px] text-[#cccccc] font-bold'>Enterprise Plan</h4>
                    <h2 className='text-4xl font-bold text-foreground py-2'>$129<span className='text-[#555555]'>.99</span></h2>
                    <p className='sub-text text-[18px] text-[#999999] font-medium'>For large-scale media & telecom operations.</p>
                    <Link to='/contact-us'>
                        <Button className="my-4" variant='secondary'>Contact Sales <ChevronRight/> </Button>
                    </Link>
                </div>
                <div className='py-4'>
                    <ul className='no-hover'>
                        {enterprise.map((enter)=>(
                            <li key={enter}><div className='inline-flex py-3 items-center gap-2 sub-text font-semibold'><img src={CircleCheck} alt="" /> {enter}</div></li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='pricing-card'>
                <div className='border-b border-[#333333]'>
                    <h4 className='uppercase text-[18px] text-[#cccccc] font-bold'>Custom Plan</h4>
                    <h2 className='text-4xl font-bold text-foreground py-2'>$139<span className='text-[#555555]'>.99</span></h2>
                    <p className='sub-text text-[18px] text-[#999999] font-medium'>For unique workflows and large deployments.</p>
                    <Link to='/contact-us'>
                        <Button className="my-4" variant='secondary'>Contact Sales <ChevronRight/> </Button>
                    </Link>
                </div>
                <div className='py-4'>
                    <ul className='no-hover'>
                        {custom.map((custom)=>(
                            <li key={custom}><div className='inline-flex py-3 items-center gap-2 sub-text font-semibold'><img src={CircleCheck} alt="" /> {custom}</div></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Plan
