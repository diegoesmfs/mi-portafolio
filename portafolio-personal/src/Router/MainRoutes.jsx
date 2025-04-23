import React from 'react'
import {Routes, Route, BrowserRouter, NavLink} from "react-router-dom"
import { Home } from '../components/Home';
import { Portfolio } from '../components/Portfolio'
import { Services } from '../components/Services'
import { Curriculum } from '../components/Curriculum'
import { Contact } from '../components/Contact'
import { Error } from '../components/Error'
import { HeaderNav } from '../components/layout/HeaderNav';
import {Footer} from '../components/layout/Footer'

export const MainRoutes = () => {
  return (
    <BrowserRouter>
    
        {/* Header and Nav */}
          <HeaderNav />
        {/* Main Content */}

            <Routes>

                <Route path='/' element={<Home/>} />
                <Route path='/home' element={<Home/>} />
                <Route path='/portfolio' element={<Portfolio/>} />
                <Route path='/services' element={<Services/>} />
                <Route path='/curriculum' element={<Curriculum/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='*' element={<Error/>} />

            </Routes>

        {/*Footer */}
        <hr />
        <Footer />
    </BrowserRouter>
  )
}
