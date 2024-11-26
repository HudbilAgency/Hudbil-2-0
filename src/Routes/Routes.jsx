import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Accessibilities from '../Pages/Accessibilities';
import PrivacyPolicy from '../Pages/PrivacyPolicy';
import TalkToElla from '../Pages/TalkToElla';
import ContactForm from '../Pages/ContactForm';
import TandC from '../Pages/T&C';
import Tabloids from '../Pages/tabloids';
import Hudbil_ai_chatbot from '../Pages/hudbil-ai-chatbot'
import AboutUs from '../Pages/AboutUs';
import Services1 from '../Pages/Services1';
import Services2 from '../Pages/services2';
import Services3 from '../Pages/Services3';
import Services4 from '../Pages/Services4';
import Insights from '../Pages/Insights';
import Services from '../Pages/Services';
import Work from '../Pages/Work';
import BlogPage1 from '../Pages/blogpage-1';
import BlogPage2 from '../Pages/blogpage-2';
import BlogPage3 from '../Pages/blogpage-3';
import BlogPage4 from '../Pages/blogpage-4';
import BlogPage5 from '../Pages/blogpage-5';
import BlogPage6 from '../Pages/blogpage-6';
import BlogPage7 from '../Pages/blogpage-7';
import BlogPage8 from '../Pages/blogpage-8';
import BlogPage9 from '../Pages/blogpage-9';
import BlogPage10 from '../Pages/blogpage-10';
import Kalacode_investment from '../Pages/kalacode_investment';
import Coltfox_digital_marketing_agency from '../Pages/coltfox_digital_marketing_agency';
import Hudbil_startup_india_awards from '../Pages/hudbil_start-up_india_awards';
import Website_design_agency from '../Pages/website-design-agency';
import Evolution_of_web_development from '../Pages/evolution-of-web-development';
import Our_industry from '../Pages/our-industry';
import Our_products from '../Pages/our-products';
import ComingSoon from '../Pages/coming-soon';
import ClientSupport from '../Pages/client-support';
import Careersculture from '../Pages/careers&culture';
import CookiePolicy from '../Pages/cookie-policy';
import QuickLinks from '../Pages/quick-links';
import Faq from '../Pages/FAQ';
import Locations from '../Pages/location-page';
import WebDesign1 from '../Pages/webdesign1';
import WebDev1 from '../Pages/webdev1';

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/accessibilities" element={<Accessibilities />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/blogs/the-ultimate-guide-for-ux-research" element={<BlogPage1 />} />
        <Route path="/blogs/the-evolution-of-the-graphic-design" element={<BlogPage2 />} />
        <Route path="/blogs/brands-identity-design-aspects-in-brief" element={<BlogPage3 />} />
        <Route path="/blogs/business-firms-suffer-to-find-right-design-agency" element={<BlogPage4 />} />
        <Route path="/blogs/user-experience-design-and-its-importance" element={<BlogPage5 />} />
        <Route path="/blogs/increase-conversion-rate" element={<BlogPage6 />} />
        <Route path="/blogs/what-are-chatbots" element={<BlogPage7 />} />
        <Route path="/blogs/how-to-create-a-service-website" element={<BlogPage8 />} />
        <Route path="/blogs/how-to-optimize-your-website" element={<BlogPage9 />} />
        <Route path="/blogs/the-importance-of-accessible-design" element={<BlogPage10 />} />
        <Route path="/terms-and-conditions" element={<TandC />} />
        <Route path="/tabloids" element={<Tabloids />} />
        <Route path="/tabloids/hudbil-ai-chatbot" element={< Hudbil_ai_chatbot />} />
        <Route path="/tabloids/kalacode-investment" element={< Kalacode_investment />} />
        <Route path="/tabloids/coltfox-digital-marketing-agency" element={< Coltfox_digital_marketing_agency />} />
        <Route path="/tabloids/hudbil-start-up-india-awards" element={< Hudbil_startup_india_awards />} />
        <Route path="/tabloids/the-early-web-design-days" element={< Website_design_agency />} />
        <Route path="/tabloids/evolution-of-web-development" element={< Evolution_of_web_development />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path='/our-work' element={<Work />} />
        <Route path='/our-blogs' element={<Insights />} />
        <Route path='/our-services' element={<Services />} />
        <Route path='/about-us/career' element={<Careersculture />} />
        <Route path='/services/creative-designing-agency' element={<Services1 />} />
        <Route path='/services/development-agency' element={<Services2 />} />
        <Route path='/services/research-agency' element={<Services3 />} />
        <Route path='/services/strategy-agency' element={<Services4 />} />
        <Route path='/our-industry' element={<Our_industry />} />
        <Route path='/our-products' element={<Our_products />} />
        <Route path="/ai-ella" element={<TalkToElla />} />
        <Route path="/contact-us" element={<ContactForm />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/client-support" element={<ClientSupport />} />
        <Route path="/quick-links" element={<QuickLinks />} />
        <Route path="/lo" element={<Locations />} />
        <Route path="/quick-links/website-designing-agency-in-bangalore" element={<WebDesign1 />} />
        <Route path="/quick-links/website-development-agency-in-bangalore" element={<WebDev1 />} />
      </Routes>
    </>
  )
}

export default Routers