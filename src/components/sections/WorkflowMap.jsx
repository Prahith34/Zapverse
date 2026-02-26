import React from 'react'
import { Dot } from 'lucide-react'
import workflow from '@/assets/images/workflow.png'
import mblworkflow from '@/assets/images/mblworkflow.png'
import aisectors from '@/assets/images/aisectors.png'

const WorkflowMap = () => {
  return (
    <section>
        <div className='container-custom'>
            <div className='lg:flex lg:flex-col lg:items-center'>
                <span className='w-fit inline-flex items-center gap-2 font-bold text-start eyeBrow'>
                    <span className='w-5'><Dot /></span>
                    Transform Your Workflow.
                </span>
                <h2 className='text-4xl lg:text-5xl lg:text-center font-bold text-foreground py-4 max-w-xl'>
                    The Shit from Legacy to
                    <span className='gradient-text'> Intelligence</span>
                </h2>
                <p className='sub-text text-muted font-medium lg:text-center max-w-3xl'>Say goodbye to siloed tools, manual edits, and spreadsheet chaos. 
                    Zapverse unifies your entire workflow into one intelligent system—from planning to execution.
                </p>
            </div>
        </div>
        <div className='p-4 lg:pb-8 lg:p-0'>
            <img className='hidden lg:block pt-16' src={workflow} alt="workflow-image" />
            <img className='lg:hidden' src={mblworkflow} alt="mobile-workflow image" />
        </div>
        <div className='container-custom lg:pt-16 lg:pb-16'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='flex flex-col justify-center'>
                    <span className='w-fit inline-flex items-center gap-2 font-bold text-start eyeBrow'>
                        <span className='w-5'><Dot /></span>
                        Long-Term Roadmap
                    </span>
                    <h2 className='text-4xl lg:text-5xl font-bold text-foreground py-4 max-w-xl'>
                        Proven in Media
                        <span className='gradient-text'> Expanding Everywhere</span>
                    </h2>
                    <p className='sub-text text-muted text-medium'>We started with media and telecom. But content overload, 
                        localization, and monetization challenges span all industries. Zapverse is now evolving to meet them everywhere.
                    </p>
                </div>
                <div>
                    <img src={aisectors} alt="ai-features" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default WorkflowMap
