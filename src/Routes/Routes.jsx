import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import ScrollToTop from '../Components/ScrollToTop';
import Footer from '../Components/Footer'
import Animation from '../Animation/Animation'
import Test from '../Pages/Test'
import CarousalImgBlogs from '../Components/CarousalImgBlogs'
import CarousalImgBrands from '../Components/CarousalImgBrands';
import TalkToElla from '../Pages/TalkToElla';
import ContactForm from '../Pages/ContactForm';

const Routers = () => {
  return (
    <>
        <Router>
          <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Footer" element={<Footer/>} />
              <Route path="/Animation" element={<Animation/>} />
              <Route path="/Test" element={<Test/>} />
              <Route path="/CarousalImgBlogs" element={<CarousalImgBlogs/>} />
              <Route path="/CarousalImgBrands" element={<CarousalImgBrands/>} />
              <Route path="/TalkToElla" element={<TalkToElla/>} />
              <Route path="/ContactForm" element={<ContactForm/>} />
            </Routes> 
        </Router>
    </>
  )
}

export default Routers