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
import Hudbil_ai_chatbot from '../Pages/hudbil-ai-chatbot'
import AboutUs from '../Pages/AboutUs';
import Services1 from '../Pages/Services1';
import Services2 from '../Pages/services2';
import BlogPage1 from '../Pages/blogpage-1';
import Services from '../Pages/Services';
import Work from '../Pages/Work';
import BlogPage3 from '../Pages/blogpage-3';
import BlogPage5 from '../Pages/blogpage-5';
import BlogPage4 from '../Pages/blogpage-4';
import Kalacode_investment from '../Pages/kalacode_investment';
import Coltfox_digital_marketing_agency from '../Pages/coltfox_digital_marketing_agency';
import Hudbil_startup_india_awards from '../Pages/hudbil_start-up_india_awards';
import Website_design_agency from '../Pages/website-design-agency';
import Evolution_of_web_development from '../Pages/evolution-of-web-development';
import Our_industry from '../Pages/our-industry';
import Our_products from '../Pages/our-products';
import ComingSoon from '../Pages/coming-soon';
import ClientSupport from '../Pages/client-support';

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
              <Route path="/hudbil-tabloids/hudbil-ai-chatbot" element={< Hudbil_ai_chatbot />} />
              <Route path="/hudbil-tabloids/kalacode-investment" element={< Kalacode_investment />} />
              <Route path="/hudbil-tabloids/coltfox-digital-marketing-agency" element={< Coltfox_digital_marketing_agency />} />
              <Route path="/hudbil-tabloids/hudbil-start-up-india-awards" element={< Hudbil_startup_india_awards />} />
              <Route path="/hudbil-tabloids/website-design-agency" element={< Website_design_agency />} />
              <Route path="/hudbil-tabloids/evolution-of-web-development" element={< Evolution_of_web_development />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path='/our-work' element={<Work />} />
              <Route path='/our-services' element={<Services />} />
              <Route path='/services1' element={<Services1 />} />
              <Route path='/services2' element={<Services2 />} />
              <Route path='/our-industry' element={<Our_industry />} />
              <Route path='/our-products' element={<Our_products />} />
              <Route path="/Animation" element={<Animation/>} />
              <Route path="/Test" element={<Test/>} />
              <Route path="/talk-to-ella" element={<TalkToElla/>} />
              <Route path="/contact-us" element={<ContactForm/>} /> 
              <Route path="/coming-soon" element={<ComingSoon/>} />
              <Route path="/client-support" element={<ClientSupport/>} />
            </Routes> 
    </>
  )
}

export default Routers