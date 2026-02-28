import React from 'react'
const papers = [
    {
        id:1,
        date:'Mar 17,2025',
        title:'AI-Driven Localization: Speed Without Sacrificing Quality',
        excerpt: 'Learn how top media teams cut localization time by 80% while maintaining voice consistency and brand integrity',
    },
    {
        id:2,
        date:'Mar 22,2025',
        title:'Monetization in the AI Era: Smarter Ad Placement & Yield',
        excerpt:'Discover strategies for dynamic ad insertion and revenue optimization using AI analytics and automation',
    },
    {
        id:3,
        date:'Mar 28, 2025',
        title:'Automating Voice & Subtitling Workflows for Scale',
        excerpt:'A practical guide to replacing manual dubbing and subtitling with fast, cost-effective AI solutions',
    },
    {
        id:4,
        date:'Apr 5, 2025',
        title:'Building Predictive Content Strategies with AI Insights',
        excerpt:'See how AI-powered analytics enable data-driven planning, smarter launches, and better audience engagement'
    },
    {
        id:5,
        date:'Apr 10,2025',
        title:'Integrating AI Tools into Existing Content Pipelines',
        excerpt:'Technical best practices for adding AI dubbing, subtitling, and monetization modules to current systems',
    },
    {
        id:6,
        date:'April 17,2025',
        title:'The Future of Content Operations in Telecom & Media',
        excerpt:'Explore industry trends, adoption forecasts, and the evolving role of AI in modern content delivery',
    }
]

const Insights = () => {
  return (
    <section className='container-custom section-spacing'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <div className='lg:sticky lg:top-24 lg:self-start lg:h-fit lg:pt-12 pb-12'>
            <h1 className='text-h1 py-2 text-foreground'>White Papers & Insights</h1>
            <p className='sub-text font-medium text-[20px] text-muted'>AI-Powered Transformation for Media & Telecom</p>
        </div>
        <div className='pt-12'>
            {papers.map((posts)=>(
            <div key={posts.id} className='flex flex-col py-4'>
                        <h4 className='uppercase text-[#4B4B4B]'>{posts.date}</h4>
                        <h2 className='text-[20px] font-bold text-muted uppercase'>{posts.title}</h2>
                        <p className='sub-text text-[#888888]'>{posts.excerpt}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Insights
