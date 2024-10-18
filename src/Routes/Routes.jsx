import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Animation from '../Animation/Animation'
import Test from '../Pages/Test'
import Accessibilities from '../Pages/Accessibilities';
import PrivacyPolicy from '../Pages/PrivacyPolicy';
import TalkToElla from '../Pages/TalkToElla';
import ContactForm from '../Pages/ContactForm';
import BlogPage2 from '../Pages/blogpage-2';
import TandC from '../Pages/T&C';
import Tabloids from '../Pages/tabloids';
import AboutUs from '../Pages/AboutUs';
import Services1 from '../Pages/Services1';
import Services2 from '../Pages/services2';
import BlogPage1 from '../Pages/blogpage-1';
import BlogPage3 from '../Pages/blogpage-3';
import BlogPage5 from '../Pages/blogpage-5';
import BlogPage4 from '../Pages/blogpage-4';

const Routers = () => {
  return (
    <>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/accessibilities" element={<Accessibilities />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/blogpage-1" element={<BlogPage1 />} />
              <Route path="/blogpage-2" element={<BlogPage2 />} />
              <Route path="/blogpage-3" element={<BlogPage3 />} />
              <Route path="/blogpage-4" element={<BlogPage4 />} />
              <Route path="/blogpage-5" element={<BlogPage5 />} />
              <Route path="/terms&conditions" element={<TandC />} />
              <Route path="/hudbil-tabloids" element={<Tabloids />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path='/services1' element={<Services1 />} />
              <Route path='/services2' element={<Services2 />} />
              <Route path="/Animation" element={<Animation/>} />
              <Route path="/Test" element={<Test/>} />
              <Route path="/talk-to-ella" element={<TalkToElla/>} />
              <Route path="/contact-us" element={<ContactForm/>} />
            </Routes> 
    </>
  )
}

export default Routers