import React, { useState } from 'react'
import logo from '@/assets/images/logo.svg'
import { ChevronRight, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link, NavLink } from 'react-router-dom'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Industries', href: '/industries' },
  { label: 'Whitepapers', href: '/white-papers' },
  { label: 'Pricing', href: '/pricing' },
]

const Header = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => setMobileDrawerOpen(prev => !prev);

  return (
      <header>
        <div className=' py-6 flex items-center justify-between'>
            <Link to="/"><img className='w-52' src={logo} alt='Zapverse Logo'/></Link>

            {/* Desktop Nav */}
            <nav className='hidden lg:flex text-white gap-6 uppercase text-ui font-semibold'>
              {navLinks.map((link) => (
                <NavLink key={link.label} to={link.href} end
          className={({ isActive }) =>
            `relative after:content-[''] after:absolute after:left-0 after:-bottom-1
             after:h-0.5 after:bg-white after:transition-all after:duration-300
             ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`
          }>{link.label}</NavLink>
              ))}
            </nav>

            <Link to="/contact-us">
              <Button className='hidden lg:flex' variant='secondary'>
                Contact Us <ChevronRight size={18} />
              </Button>
            </Link>

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
                    <Link 
                      key={link.label} 
                      to={link.href}
                      onClick={() => setMobileDrawerOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link to='/contact-us' >
                    <Button className='text-black' variant='secondary'>
                      Contact Us <ChevronRight size={18} />
                    </Button>       
                  </Link>
                </nav>
              </div>
            )}
        </div>
      </header>
  )
}

export default Header
