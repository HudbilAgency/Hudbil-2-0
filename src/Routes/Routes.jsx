import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import ScrollToTop from '../Components/ScrollToTop';
import Animation from '../Animation/Animation'
import Test from '../Pages/Test'
import CarousalImgBlogs from '../Components/CarousalImgBlogs'
import CarousalImgBrands from '../Components/CarousalImgBrands';
import Accessibilities from '../Pages/Accessibilities';
import PrivacyPolicy from '../Pages/PrivacyPolicy';

const Routers = () => {
  return (
    <>
        <Router>
          <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/accessibilities" element={<Accessibilities />} />
              <Route path="/accessibilities" element={<Accessibilities />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/Animation" element={<Animation/>} />
              <Route path="/Test" element={<Test/>} />
            </Routes> 
        </Router>
    </>
  )
}

export default Routers