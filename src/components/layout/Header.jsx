import React, { useState } from 'react'
import logo from '@/assets/images/logo.svg'
import { ChevronRight, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Industries', href: '#' },
  { label: 'Whitepapers', href: '#' },
  { label: 'Pricing', href: '#' },
]

const Header = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => setMobileDrawerOpen(prev => !prev);

  return (
      <header>
        <div className=' py-6 flex items-center justify-between'>
            <a href="#"><img className='w-52' src={logo} alt='Zapverse Logo'/></a>

            {/* Desktop Nav */}
            <nav className='hidden lg:flex text-white gap-6 uppercase text-ui font-semibold'>
              {navLinks.map((link) => (
                <a key={link.label} href={link.href}>{link.label}</a>
              ))}
            </nav>

            {/* Mobile Toggle */}
            <div className='lg:hidden md:flex flex-col justify-end'>
              <button className='text-white' onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>

            {/* Mobile Drawer */}
            {mobileDrawerOpen && (
              <div className='fixed top-20 right-0 z-20 bg-surface w-full flex flex-col pl-6 pr-6 lg:hidden'>
                <nav className='flex flex-col py-7 text-white gap-6 uppercase text-ui font-semibold'>
                  {navLinks.map((link) => (
                    <a 
                      key={link.label} 
                      href={link.href}
                      onClick={() => setMobileDrawerOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                  <Button className='text-black' variant='secondary'>
                    Contact Us <ChevronRight size={18} />
                  </Button>
                </nav>
              </div>
            )}

            <Button className='hidden lg:flex' variant='secondary'>
              Contact Us <ChevronRight size={18} />
            </Button>
        </div>
      </header>
  )
}

export default Header
