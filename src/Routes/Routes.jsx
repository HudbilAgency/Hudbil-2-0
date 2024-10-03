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

const Routers = () => {
  return (
    <>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/accessibilities" element={<Accessibilities />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/blogpage-2" element={<BlogPage2 />} />
              <Route path="/Animation" element={<Animation/>} />
              <Route path="/Test" element={<Test/>} />
              <Route path="/TalkToElla" element={<TalkToElla/>} />
              <Route path="/ContactForm" element={<ContactForm/>} />
            </Routes> 
    </>
  )
}

export default Routers