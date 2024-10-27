import React, { useState, useRef, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import ReachUs from '../Components/ReachUs'
import Footer from '../Components/Footer'
import { Helmet } from 'react-helmet';

const Faq = () => {

    return (
        <>
            <Helmet>
                <title>Common Questions | Design and Development FAQs</title>
                <meta name="description" content="Have questions about our design and development process? Check our FAQs to learn more about our services, pricing, and project timelines."></meta>
                <meta property="og:url" content="www.hudbil.com/faq"></meta>
                <meta name="keywords" content="Website design FAQs, Development agency questions, Common design questions, Web development FAQs, Client support inquiries, Service-related questions, Design process explained, Development project timelines, Pricing FAQs, Design and development insights"></meta>
                <meta name="og:description" content="highlighting key inquiries about the design and development agency's services and processes."></meta>
                <meta name="og:site_name" content="UI/UX Designing Company in Bangalore India | Website Development Agency in Bangalore | Top 10 Website Developement Agencies in Bangalore Review | Branding and designing Agency | Software development Agency"></meta>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-3795MKLFX0"></script>
                <script>
                    {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-3795MKLFX0');
                    `}
                </script>
            </Helmet>
            <Navbar />

            <ReachUs />
            <Footer />
        </>
    )
}

export default Faq