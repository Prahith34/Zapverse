import React from 'react'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'

const CtaSection = ({
  heading,
  highlight,
  description,
  buttonText = 'Book a Demo',
  onButtonClick,
}) => {
  return (
    <section className='container-custom section-spacing'>
      <div className='cta-section flex items-center justify-center p-2'>
        <div className='text-center'>
          <h2 className='text-h1 text-foreground text-center max-w-2xl mx-auto'>
            {heading}
            <span className='gradient-text'> {highlight}</span>
          </h2>
          <p className='text-body-lg text-muted pt-2 pb-8 max-w-xl mx-auto'>
            {description}
          </p>
          <Button variant='primary' className='text-white' onClick={onButtonClick}>
            {buttonText} <ChevronRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CtaSection