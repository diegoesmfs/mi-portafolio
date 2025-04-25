import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import { Home } from '../components/Home';
import { Portfolio } from '../components/Portfolio'
import { Services } from '../components/Services'
import { Curriculum } from '../components/Curriculum'
import { Contact } from '../components/Contact'
import { Error } from '../components/Error'
import { HeaderNav } from '../components/layout/HeaderNav';
import { Footer } from '../components/layout/Footer'

export const MainRoutes = () => {
  return (
    <BrowserRouter>

      {/* Header and Nav */}
      <HeaderNav />
      {/* Main Content */}
      <section className='content'>

        <Routes>

          <Route path='/' element={<Navigate to ="/home"/>} />
          <Route path='/home' element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/services' element={<Services />} />
          <Route path='/curriculum' element={<Curriculum />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Error />} />

        </Routes>

      </section>

      {/*Footer */}
      <Footer />
    </BrowserRouter>
  )
}
