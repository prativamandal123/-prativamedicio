import React from 'react'
import About from './About'
import Services from './Services'
import DoctorCard from './Doctorcard'
import Contact from './Contact'
import CarouselSelider from './CarouselSlider'
import BannerCard from './BannerCard'
import Banner from '../Component.jsx/Banner'
import  Appointment from './Appointment'




const Home = () => {
  return (
    <>
    <CarouselSelider/>
    <BannerCard/>
    <Banner/>
    <About/>
    <Services/>
    <Appointment/>
    <DoctorCard/>
    <Contact/>

      
    </>
  )
}

export default Home
