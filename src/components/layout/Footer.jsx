import React from 'react'
import logo from '@/assets/images/logo.svg'
import facebook from '@/assets/icons/facebook.svg'
import instagram from '@/assets/icons/instagram.svg'
import youtube from '@/assets/icons/youtube.svg'
import Footerclip from '@/assets/images/Footerclip.webp'
import mblfooter from '@/assets/images/mblfooter.webp'
import { Link } from 'react-router-dom'

const exploreLinks = [
  { label: 'Platform', href: '/ai-dubbing' },
  { label: 'Industries', href: '/industries' },
  { label: 'About Us', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
]

const contactLinks = [
  { label: 'White Papers', ref: '/white-papers' },
  { label: 'Case Studies', ref: '/' },
]

const legalLinks = [
  { label: 'Terms of use', href: '/' },
  { label: 'Privacy policy', href: '/' },
  { label: 'Cookie policy', href: '/' },
]

const socialLinks = [
  { icon: facebook, alt: 'Facebook', href: 'https://facebook.com' },
  { icon: instagram, alt: 'Instagram', href: 'https://instagram.com' },
  { icon: youtube, alt: 'YouTube', href: 'https://youtube.com' },
]

const Footer = () => {
  return (
    <footer>
      <div className='container-custom'>

        {/* Footer Grid */}
        <div className='grid grid-cols-2 lg:grid-cols-[2fr_0.5fr_1fr] gap-4 mb-2 pb-3'>

          {/* Brand Column */}
          <div className='col-span-2 lg:col-span-1'>
            <Link href="/"><img src={logo} alt="Zapverse logo" /></Link>
            <p className='text-body-lg font-semibold text-muted ml-2 mt-4 lg:w-150'>
              Enabling content-first organizations to thrive in the AI era.
            </p>
            <div className='inline-flex items-center gap-3 ml-2 mt-6 mb-2'>
              <h3 className='uppercase text-subtle font-semibold'>Follow Us On</h3>
              <span className='inline-flex gap-2'>
                {socialLinks.map(({ icon, alt, href }) => (
                  <Link key={alt} href={href} target="_blank" rel="noopener noreferrer" aria-label={alt}>
                    <img src={icon} alt={alt} />
                  </Link>
                ))}
              </span>
            </div>
          </div>

          {/* Explore Column */}
          <div className='lg:p-4'>
            <h3 className='text-white uppercase font-bold'>Explore</h3>
            <ul className='mt-4 font-semibold text-body-lg space-y-2'>
              {exploreLinks.map((link) => (
                <li key={link.label}><Link to={link.href}>{link.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contacts Column */}
          <div className='lg:p-4'>
            <h3 className='text-white uppercase font-bold'>Contacts</h3>
            <ul className='mt-4 font-semibold text-body-lg space-y-2'>
              {contactLinks.map((link) => (
                <li key={link.label}><Link to={link.ref}>{link.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <hr className='border-t-2 border-[#424242]' />

        {/* Bottom Bar */}
        <div className='lg:flex items-center justify-between mt-4 space-y-2'>
          <p className='text-body-lg font-semibold copyRight lg:ml-2'>
            © 2025 Zapverse, inc. All rights reserved
          </p>
          <ul className='lg:flex items-center list-none font-semibold text-body-lg space-y-2 lg:space-y-0 lg:space-x-18'>
            {legalLinks.map((link) => (
              <li key={link.label}><Link to={link.href}>{link.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>

      {/* Decorative Images */}
      <div className='block sm:hidden -mt-30 w-full'>
        <img width="100%" src={mblfooter} alt="" role="presentation" />
      </div>
      <div className='hidden sm:block w-full'>
        <img width='100%' src={Footerclip} alt="" role="presentation" />
      </div>
    </footer>
  )
}

export default Footer