import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import OurApproach from '../Pages/OurApproach';
import Accessibilities from '../Pages/Accessibilities';
import PrivacyPolicy from '../Pages/PrivacyPolicy';
import TalkToElla from '../Pages/TalkToElla';
import ContactForm from '../Pages/ContactForm';
import TandC from '../Pages/T&C';
import Tabloids from '../Pages/tabloids';
import OurModules from '../Pages/Modules';
import ProjectBasis from '../Pages/Module1';
import MonthlyRetainer from '../Pages/Module2';
import Consultation from '../Pages/Module3';
import WhiteLabelling from '../Pages/Module4';
import ODC from '../Pages/Module5';
import Hudbil_ai_chatbot from '../Pages/hudbil-ai-chatbot'
import AboutUs from '../Pages/AboutUs';
import Services1 from '../Pages/Services1';
import Services2 from '../Pages/services2';
import Services3 from '../Pages/Services3';
import Services4 from '../Pages/Services4';
import Services5 from '../Pages/Services5';
import Services6 from '../Pages/Services6';
import Service1FAQ from '../Pages/Service1FAQ';
import Service2FAQ from '../Pages/Service2FAQ';
import Service3FAQ from '../Pages/Service3FAQ';
import Service4FAQ from '../Pages/Service4FAQ';
import Service5FAQ from '../Pages/Service5FAQ';
import Service6FAQ from '../Pages/Service6FAQ';
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
import Partners from '../Pages/Partners';
import ComingSoon from '../Pages/coming-soon';
import ClientSupport from '../Pages/client-support';
import Careersculture from '../Pages/careers&culture';
import CookiePolicy from '../Pages/cookie-policy';
import PaymentPolicy from '../Pages/payment-policy';
import QuickLinks from '../Pages/quick-links';
import Faq from '../Pages/FAQ';
import Locations from '../Pages/location-page';
import WebDesign1 from '../Pages/webdesign1';
import WebDesign2 from '../Pages/webdesign2';
import WebDesign3 from '../Pages/webdesign3';
import WebDesign4 from '../Pages/webdesign4';
import WebDesign5 from '../Pages/webdesign5';
import WebDesign6 from '../Pages/webdesign6';
import WebDesign7 from '../Pages/webdesign7';
import WebDesign8 from '../Pages/webdesign8';
import WebDesign9 from '../Pages/webdesign9';
import WebDesign10 from '../Pages/webdesign10';
import WebDesign11 from '../Pages/webdesign11';
import WebDesign12 from '../Pages/webdesign12';
import WebDesign13 from '../Pages/webdesign13';
import WebDesign14 from '../Pages/webdesign14';
import WebDev1 from '../Pages/webdev1';
import WebDev2 from '../Pages/webdev2';
import WebDev3 from '../Pages/webdev3';
import WebDev4 from '../Pages/webdev4';
import WebDev5 from '../Pages/webdev5';
import WebDev6 from '../Pages/webdev6';
import WebDev7 from '../Pages/webdev7';
import WebDev8 from '../Pages/webdev8';
import WebDev9 from '../Pages/webdev9';
import WebDev10 from '../Pages/webdev10';
import WebDev11 from '../Pages/webdev11';
import WebDev12 from '../Pages/webdev12';
import WebDev13 from '../Pages/webdev13';
import WebDev14 from '../Pages/webdev14';
import Survey from '../Pages/Survey';

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/our-approach" element={<OurApproach />} />
        <Route path="/accessibilities" element={<Accessibilities />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/payment-policy" element={<PaymentPolicy />} />
        <Route path="/our-modules" element={<OurModules />} />
        <Route path="/modules/project-basis" element={<ProjectBasis />} />
        <Route path="/modules/monthly-retainer" element={<MonthlyRetainer />} />
        <Route path="/modules/consultation" element={<Consultation />} />
        <Route path="/modules/white-labelling" element={<WhiteLabelling />} />
        <Route path="/modules/offshore-development-centre" element={<ODC />} />
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
        <Route path='/services/ui-ux-cx-design' element={<Services1 />} />
        <Route path='/services/website-development' element={<Services2 />} />
        <Route path='/services/mobile-app-development' element={<Services3 />} />
        <Route path='/services/cloud-solutions' element={<Services4 />} />
        <Route path='/services/ai-ml' element={<Services5 />} />
        <Route path='/services/blockchain' element={<Services6 />} />
        <Route path='/services/ui-ux-cx-design/faq' element={<Service1FAQ />} />
        <Route path='/services/website-development/faq' element={<Service2FAQ />} />
        <Route path='/services/mobile-app-development/faq' element={<Service3FAQ />} />
        <Route path='/services/cloud-solutions/faq' element={<Service4FAQ />} />
        <Route path='/services/ai-ml/faq' element={<Service5FAQ />} />
        <Route path='/services/blockchain/faq' element={<Service6FAQ />} />
        <Route path='/our-industry' element={<Our_industry />} />
        <Route path='/our-products' element={<Our_products />} />
        <Route path='/our-partners' element={<Partners />} />
        <Route path="/ai-ella" element={<TalkToElla />} />
        <Route path="/contact-us" element={<ContactForm />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/client-support" element={<ClientSupport />} />
        <Route path="/quick-links" element={<QuickLinks />} />
        <Route path="/lo" element={<Locations />} />
        <Route path="/quick-links/website-designing-agency-in-bangalore" element={<WebDesign1 />} />
        <Route path="/quick-links/website-designing-agency-in-pune" element={<WebDesign2 />} />
        <Route path="/quick-links/website-designing-agency-in-hyderabad" element={<WebDesign3 />} />
        <Route path="/quick-links/website-designing-agency-in-kolkata" element={<WebDesign4 />} />
        <Route path="/quick-links/website-designing-agency-in-ahmedabad" element={<WebDesign5 />} />
        <Route path="/quick-links/website-designing-agency-in-chennai" element={<WebDesign6 />} />
        <Route path="/quick-links/website-designing-agency-in-jaipur" element={<WebDesign7 />} />
        <Route path="/quick-links/website-designing-agency-in-surat" element={<WebDesign8 />} />
        <Route path="/quick-links/website-designing-agency-in-bhopal" element={<WebDesign9 />} />
        <Route path="/quick-links/website-designing-agency-in-kochi" element={<WebDesign10 />} />
        <Route path="/quick-links/website-designing-agency-in-coimbatore" element={<WebDesign11 />} />
        <Route path="/quick-links/website-designing-agency-in-mumbai" element={<WebDesign12 />} />
        <Route path="/quick-links/website-designing-agency-in-patna" element={<WebDesign13 />} />
        <Route path="/quick-links/website-designing-agency-in-delhi" element={<WebDesign14 />} />
        <Route path="/quick-links/website-development-agency-in-bangalore" element={<WebDev1 />} />
        <Route path="/quick-links/website-development-agency-in-pune" element={<WebDev2 />} />
        <Route path="/quick-links/website-development-agency-in-hyderabad" element={<WebDev3 />} />
        <Route path="/quick-links/website-development-agency-in-kolkata" element={<WebDev4 />} />
        <Route path="/quick-links/website-development-agency-in-ahmedabad" element={<WebDev5 />} />
        <Route path="/quick-links/website-development-agency-in-chennai" element={<WebDev6 />} />
        <Route path="/quick-links/website-development-agency-in-jaipur" element={<WebDev7 />} />
        <Route path="/quick-links/website-development-agency-in-surat" element={<WebDev8 />} />
        <Route path="/quick-links/website-development-agency-in-bhopal" element={<WebDev9 />} />
        <Route path="/quick-links/website-development-agency-in-kochi" element={<WebDev10 />} />
        <Route path="/quick-links/website-development-agency-in-coimbatore" element={<WebDev11 />} />
        <Route path="/quick-links/website-development-agency-in-mumbai" element={<WebDev12 />} />
        <Route path="/quick-links/website-development-agency-in-patna" element={<WebDev13 />} />
        <Route path="/quick-links/website-development-agency-in-delhi" element={<WebDev14 />} />
      </Routes>
    </>
  )
}

export default Routers

// import React, { useEffect } from 'react'
// import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
// import axios from "axios";
// import Home from '../Pages/Home';
// import OurApproach from '../Pages/OurApproach';
// import Accessibilities from '../Pages/Accessibilities';
// import PrivacyPolicy from '../Pages/PrivacyPolicy';
// import TalkToElla from '../Pages/TalkToElla';
// import ContactForm from '../Pages/ContactForm';
// import TandC from '../Pages/T&C';
// import Tabloids from '../Pages/tabloids';
// import OurModules from '../Pages/Modules';
// import ProjectBasis from '../Pages/Module1';
// import MonthlyRetainer from '../Pages/Module2';
// import Consultation from '../Pages/Module3';
// import WhiteLabelling from '../Pages/Module4';
// import ODC from '../Pages/Module5';
// import Hudbil_ai_chatbot from '../Pages/hudbil-ai-chatbot'
// import AboutUs from '../Pages/AboutUs';
// import Services1 from '../Pages/Services1';
// import Services2 from '../Pages/services2';
// import Services3 from '../Pages/Services3';
// import Services4 from '../Pages/Services4';
// import Services5 from '../Pages/Services5';
// import Services6 from '../Pages/Services6';
// import Service1FAQ from '../Pages/Service1FAQ';
// import Service2FAQ from '../Pages/Service2FAQ';
// import Service3FAQ from '../Pages/Service3FAQ';
// import Service4FAQ from '../Pages/Service4FAQ';
// import Service5FAQ from '../Pages/Service5FAQ';
// import Service6FAQ from '../Pages/Service6FAQ';
// import Insights from '../Pages/Insights';
// import Services from '../Pages/Services';
// import Work from '../Pages/Work';
// import BlogPage1 from '../Pages/blogpage-1';
// import BlogPage2 from '../Pages/blogpage-2';
// import BlogPage3 from '../Pages/blogpage-3';
// import BlogPage4 from '../Pages/blogpage-4';
// import BlogPage5 from '../Pages/blogpage-5';
// import BlogPage6 from '../Pages/blogpage-6';
// import BlogPage7 from '../Pages/blogpage-7';
// import BlogPage8 from '../Pages/blogpage-8';
// import BlogPage9 from '../Pages/blogpage-9';
// import BlogPage10 from '../Pages/blogpage-10';
// import Kalacode_investment from '../Pages/kalacode_investment';
// import Coltfox_digital_marketing_agency from '../Pages/coltfox_digital_marketing_agency';
// import Hudbil_startup_india_awards from '../Pages/hudbil_start-up_india_awards';
// import Website_design_agency from '../Pages/website-design-agency';
// import Evolution_of_web_development from '../Pages/evolution-of-web-development';
// import Our_industry from '../Pages/our-industry';
// import Our_products from '../Pages/our-products';
// import Partners from '../Pages/Partners';
// import ComingSoon from '../Pages/coming-soon';
// import ClientSupport from '../Pages/client-support';
// import Careersculture from '../Pages/careers&culture';
// import CookiePolicy from '../Pages/cookie-policy';
// import PaymentPolicy from '../Pages/payment-policy';
// import QuickLinks from '../Pages/quick-links';
// import Faq from '../Pages/FAQ';
// import Locations from '../Pages/location-page';
// import WebDesign1 from '../Pages/webdesign1';
// import WebDesign2 from '../Pages/webdesign2';
// import WebDesign3 from '../Pages/webdesign3';
// import WebDesign4 from '../Pages/webdesign4';
// import WebDesign5 from '../Pages/webdesign5';
// import WebDesign6 from '../Pages/webdesign6';
// import WebDesign7 from '../Pages/webdesign7';
// import WebDesign8 from '../Pages/webdesign8';
// import WebDesign9 from '../Pages/webdesign9';
// import WebDesign10 from '../Pages/webdesign10';
// import WebDesign11 from '../Pages/webdesign11';
// import WebDesign12 from '../Pages/webdesign12';
// import WebDesign13 from '../Pages/webdesign13';
// import WebDesign14 from '../Pages/webdesign14';
// import WebDev1 from '../Pages/webdev1';
// import WebDev2 from '../Pages/webdev2';
// import WebDev3 from '../Pages/webdev3';
// import WebDev4 from '../Pages/webdev4';
// import WebDev5 from '../Pages/webdev5';
// import WebDev6 from '../Pages/webdev6';
// import WebDev7 from '../Pages/webdev7';
// import WebDev8 from '../Pages/webdev8';
// import WebDev9 from '../Pages/webdev9';
// import WebDev10 from '../Pages/webdev10';
// import WebDev11 from '../Pages/webdev11';
// import WebDev12 from '../Pages/webdev12';
// import WebDev13 from '../Pages/webdev13';
// import WebDev14 from '../Pages/webdev14';
// import Survey from '../Pages/Survey';

// const Routers = () => {

//   const COUNTRY_MAPPING = {
//     IN: "in",
//     US: "us",
//     UK: "uk",
//     CA: "ca",
//     AU: "au",
//     // Add more country codes as needed
//   };

//   const navigate = useNavigate();
//   const location = useLocation();

//   // Extract country path from URL
//   const pathParts = location.pathname.split("/").filter(Boolean); // Remove empty parts
//   const currentCountry = pathParts[0] in Object.values(COUNTRY_MAPPING) ? pathParts[0] : "";

//   useEffect(() => {
//     const detectCountry = async () => {
//       try {
//         const response = await axios.get("https://ipapi.co/json/");
//         const countryCode = response.data.country_code;
//         const countryPath = COUNTRY_MAPPING[countryCode];

//         if (countryPath && countryPath !== currentCountry) {
//           navigate(`/${countryPath}${location.pathname}`, { replace: true });
//         }
//       } catch (error) {
//         console.error("Error detecting country:", error);
//       }
//     };

//     detectCountry();
//   }, [navigate, location, currentCountry]);

//   return (
//     <>
//       <Routes>
//         <Route path={`/${currentCountry}/`} element={<Home />} />
//         <Route path={`/faq`} element={<Faq />} />
//         <Route path={`/survey`} element={<Survey />} />
//         <Route path={`/our-approach`} element={<OurApproach />} />
//         <Route path={`/accessibilities`} element={<Accessibilities />} />
//         <Route path={`/privacy-policy`} element={<PrivacyPolicy />} />
//         <Route path={`/cookie-policy`} element={<CookiePolicy />} />
//         <Route path={`/payment-policy`} element={<PaymentPolicy />} />
//         <Route path={`/our-modules`} element={<OurModules />} />
//         <Route path={`/modules/project-basis`} element={<ProjectBasis />} />
//         <Route path={`/modules/monthly-retainer`} element={<MonthlyRetainer />} />
//         <Route path={`/modules/consultation`} element={<Consultation />} />
//         <Route path={`/modules/white-labelling`} element={<WhiteLabelling />} />
//         <Route path={`/modules/offshore-development-centre`} element={<ODC />} />
//         <Route path={`/blogs/the-ultimate-guide-for-ux-research`} element={<BlogPage1 />} />
//         <Route path={`/blogs/the-evolution-of-the-graphic-design`} element={<BlogPage2 />} />
//         <Route path={`/blogs/brands-identity-design-aspects-in-brief`} element={<BlogPage3 />} />
//         <Route path={`/blogs/business-firms-suffer-to-find-right-design-agency`} element={<BlogPage4 />} />
//         <Route path={`/blogs/user-experience-design-and-its-importance`} element={<BlogPage5 />} />
//         <Route path={`/blogs/increase-conversion-rate`} element={<BlogPage6 />} />
//         <Route path={`/blogs/what-are-chatbots`} element={<BlogPage7 />} />
//         <Route path={`/blogs/how-to-create-a-service-website`} element={<BlogPage8 />} />
//         <Route path={`/blogs/how-to-optimize-your-website`} element={<BlogPage9 />} />
//         <Route path={`/blogs/the-importance-of-accessible-design`} element={<BlogPage10 />} />
//         <Route path={`/terms-and-conditions`} element={<TandC />} />
//         <Route path={`/tabloids`} element={<Tabloids />} />
//         <Route path={`/tabloids/hudbil-ai-chatbot`} element={< Hudbil_ai_chatbot />} />
//         <Route path={`/tabloids/kalacode-investment`} element={< Kalacode_investment />} />
//         <Route path={`/tabloids/coltfox-digital-marketing-agency`} element={< Coltfox_digital_marketing_agency />} />
//         <Route path={`/tabloids/hudbil-start-up-india-awards`} element={< Hudbil_startup_india_awards />} />
//         <Route path={`/tabloids/the-early-web-design-days`} element={< Website_design_agency />} />
//         <Route path={`/tabloids/evolution-of-web-development`} element={< Evolution_of_web_development />} />
//         <Route path={`/about-us`} element={<AboutUs />} />
//         <Route path={`/our-work`} element={<Work />} />
//         <Route path={`/our-blogs`} element={<Insights />} />
//         <Route path={`/our-services`} element={<Services />} />
//         <Route path={`/about-us/career`} element={<Careersculture />} />
//         <Route path={`/services/ui-ux-cx-design`} element={<Services1 />} />
//         <Route path={`/services/website-development`} element={<Services2 />} />
//         <Route path={`/services/mobile-app-development`} element={<Services3 />} />
//         <Route path={`/services/cloud-solutions`} element={<Services4 />} />
//         <Route path={`/services/ai-ml`} element={<Services5 />} />
//         <Route path={`/services/blockchain`} element={<Services6 />} />
//         <Route path={`/services/ui-ux-cx-design/faq`} element={<Service1FAQ />} />
//         <Route path={`/services/website-development/faq`} element={<Service2FAQ />} />
//         <Route path={`/services/mobile-app-development/faq`} element={<Service3FAQ />} />
//         <Route path={`/services/cloud-solutions/faq`} element={<Service4FAQ />} />
//         <Route path={`/services/ai-ml/faq`} element={<Service5FAQ />} />
//         <Route path={`/services/blockchain/faq`} element={<Service6FAQ />} />
//         <Route path={`/our-industry`} element={<Our_industry />} />
//         <Route path={`/our-products`} element={<Our_products />} />
//         <Route path={`/our-partners`} element={<Partners />} />
//         <Route path={`/ai-ella`} element={<TalkToElla />} />
//         <Route path={`/contact-us`} element={<ContactForm />} />
//         <Route path={`/coming-soon`} element={<ComingSoon />} />
//         <Route path={`/client-support`} element={<ClientSupport />} />
//         <Route path={`/quick-links`} element={<QuickLinks />} />
//         <Route path={`/lo`} element={<Locations />} />
//         <Route path={`/quick-links/website-designing-agency-in-bangalore`} element={<WebDesign1 />} />
//         <Route path={`/quick-links/website-designing-agency-in-pune`} element={<WebDesign2 />} />
//         <Route path={`/quick-links/website-designing-agency-in-hyderabad`} element={<WebDesign3 />} />
//         <Route path={`/quick-links/website-designing-agency-in-kolkata`} element={<WebDesign4 />} />
//         <Route path={`/quick-links/website-designing-agency-in-ahmedabad`} element={<WebDesign5 />} />
//         <Route path={`/quick-links/website-designing-agency-in-chennai`} element={<WebDesign6 />} />
//         <Route path={`/quick-links/website-designing-agency-in-jaipur`} element={<WebDesign7 />} />
//         <Route path={`/quick-links/website-designing-agency-in-surat`} element={<WebDesign8 />} />
//         <Route path={`/quick-links/website-designing-agency-in-bhopal`} element={<WebDesign9 />} />
//         <Route path={`/quick-links/website-designing-agency-in-kochi`} element={<WebDesign10 />} />
//         <Route path={`/quick-links/website-designing-agency-in-coimbatore`} element={<WebDesign11 />} />
//         <Route path={`/quick-links/website-designing-agency-in-mumbai`} element={<WebDesign12 />} />
//         <Route path={`/quick-links/website-designing-agency-in-patna`} element={<WebDesign13 />} />
//         <Route path={`/quick-links/website-designing-agency-in-delhi`} element={<WebDesign14 />} />
//         <Route path={`/quick-links/website-development-agency-in-bangalore`} element={<WebDev1 />} />
//         <Route path={`/quick-links/website-development-agency-in-pune`} element={<WebDev2 />} />
//         <Route path={`/quick-links/website-development-agency-in-hyderabad`} element={<WebDev3 />} />
//         <Route path={`/quick-links/website-development-agency-in-kolkata`} element={<WebDev4 />} />
//         <Route path={`/quick-links/website-development-agency-in-ahmedabad`} element={<WebDev5 />} />
//         <Route path={`/quick-links/website-development-agency-in-chennai`} element={<WebDev6 />} />
//         <Route path={`/quick-links/website-development-agency-in-jaipur`} element={<WebDev7 />} />
//         <Route path={`/quick-links/website-development-agency-in-surat`} element={<WebDev8 />} />
//         <Route path={`/quick-links/website-development-agency-in-bhopal`} element={<WebDev9 />} />
//         <Route path={`/quick-links/website-development-agency-in-kochi`} element={<WebDev10 />} />
//         <Route path={`/quick-links/website-development-agency-in-coimbatore`} element={<WebDev11 />} />
//         <Route path={`/quick-links/website-development-agency-in-mumbai`} element={<WebDev12 />} />
//         <Route path={`/quick-links/website-development-agency-in-patna`} element={<WebDev13 />} />
//         <Route path={`/quick-links/website-development-agency-in-delhi`} element={<WebDev14 />} />
//       </Routes>
//     </>
//   )
// }

// export default Routers