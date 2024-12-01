import { useState } from 'react';
import Header from './page/Header';
import Navbar from './page/Navbar';
import Footer from './page/Footer';
import Home from './page/Home';  
import About from './page/About';    
import Services from './page/Services'; 
import DoctorCard from './page/Doctorcard'; 
import Contact from './page/Contact';
import Appointment from './page/Appointment'; 
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/doctorcard" element={<DoctorCard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
