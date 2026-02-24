import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '@/pages/Home'
import About from '@/pages/About'
import AiDubbing from '@/pages/AiDubbing'
import Industries from '@/pages/Industries'
import WhitePapers from '@/pages/WhitePapers'
import Pricing from '@/pages/Pricing'
import ContactUs from '@/pages/ContactUs'
import { Toaster } from 'sonner'

const App = () => {
  return (
    <div>
      <Toaster richColors position="top-center" duration={4000} closeButton/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/ai-dubbing' element={<AiDubbing/>}/>
        <Route path='/industries' element={<Industries/>}/>
        <Route path='/white-papers' element={<WhitePapers/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>
      </Routes>
    </div>
  )
}

export default App
