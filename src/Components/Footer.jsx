// import React from 'react';

// const Footer = () => {
//   const navigationLinks = [
//     { title: 'Home', items: ['About Us', 'Services', 'Products', 'Insights', 'Talk to Ella'] },
//     { title: 'Careers & Culture', items: ['Contact Us', 'Hudbil Tabloids', 'Privacy Policy', 'Terms & Conditions', 'Accessibilities'] },
//     { title: 'Social Media', items: ['Linkedin', 'Twitter', 'Facebook', 'Instagram', 'Youtube'] }
//   ];

//   const officeLocations = [
//     {
//       city: 'Bangalore',
//       address: 'No 235, 2nd & 3rd Floor, 13th Cross Road 2nd Stage, Indiranagar Hoysala Nagar, Bangalore - 560038,',
//       phone: '+91 88-84-40-9369'
//     },
//     {
//       city: 'Mumbai',
//       address: '74/II, "C" Cross Road, Opp Gate No 2, MIDC - 400093, Seepz, Andheri East, Mumbai, Maharashtra.',
//       phone: '+91 88-84-40-9369'
//     },
//     {
//       city: 'Delhi',
//       address: '90B, Delhi - Jaipur Expy, Udyog Vihar, Sector 18, Gurugram, Sarhol, Haryana - 122008.',
//       phone: '+91 88-84-40-9369'
//     }
//   ];

//   return (
//     <footer className="flex overflow-hidden flex-col items-center lg:px-[100px] px-20 pb-5 pt-20 bg-neutral-950 max-md:px-5">
//       <div className="flex flex-col w-full">
//         <div className="w-full max-md:max-w-full">
//           <div className="flex gap-5 max-md:flex-col">
//             <nav className="flex flex-col w-[35%] max-md:ml-0 max-md:w-full">
//               <div className="grow mt-1 max-md:mt-10 max-md:max-w-full">
//                 <div className="flex gap-5 max-md:flex-col">
//                   {navigationLinks.map((section, index) => (
//                     <div key={index} className="w-full">
//                       <div className="flex flex-col items-start justify-between text-sm tracking-wider leading-none text-white max-md:mt-10">
//                         <h3 className="font-semibold ">{section.title}</h3>
//                         {section.items.map((item, itemIndex) => (
//                           <a href="#" key={itemIndex} className="mt-6 ">{item}</a>
//                         ))}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </nav>
//              <div className="flex flex-col ml-5 w-[65%] max-md:ml-0 max-md:w-full">
//               <div className="max-md:mt-10 max-md:max-w-full">
//                 <div className="flex gap-5 max-md:flex-col">
//                   {officeLocations.map((office, index) => (
//                     <address key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
//                       <div className="flex flex-col grow text-base text-white max-md:mt-10">
//                         <h3 className=" font-semibold tracking-wider leading-none uppercase">
//                           Drop by at {office.city} office
//                         </h3>
//                         <p className=" mt-6 text-sm leading-5">{office.address}</p>
//                         <a  className=" self-start mt-7 tracking-wider leading-loose">
//                           {office.phone}
//                         </a>
//                         <a  className=" self-start mt-5 text-sm tracking-wider">
//                           Email us here
//                         </a>
//                       </div>
//                     </address>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-wrap md:flex-nowrap gap-5 lg:justify-between justify-center items-start mt-40 w-full text-sm tracking-wider leading-5 text-zinc-500 max-md:mt-10 max-md:max-w-full">
//           <div className='flex lg:w-1/2'>
//           <img loading="lazy" src="./FooterImg/HudbilFooterLogo.png" className="object-contain shrink-0 max-w-full aspect-[1.21] w-[195px]" alt="HudbilFooterlogo" />
//           </div> 
//           <div className="mt-3 w-3/4">
//             <p className="text-sm  max-md:max-w-full text-white">
//               Hudbil Private Limited is a reliable company, with multiple brands under one umbrella. We are here to enable you with top-notch digital solutions & products through a proven cost-saving model. This allows you to scale, optimise, expand, and enhance your business with an individual approach. This is our game style. From turning spreadsheets into custom solutions, integrating multiple platforms or automating manual processes, we can tackle any challenge.
//             </p>
//             <p className="text-sm  mt-7 max-md:mr-1 text-white max-md:max-w-full">
//               We have vast experience in developing both large projects and small start-ups. Thanks to a large team of experienced professionals, we are ready to solve the most complex tasks, especially in design and web development. Let's work together to watch your business benefit.
//             </p>
//           </div>
//         </div>
//         <div className="flex flex-wrap gap-6 self-center mt-16 max-w-full text-base font-medium tracking-wider leading-none text-zinc-500 w-[483px] max-md:mt-10">
//           <div className="grow">© hudbil 2024</div>
//           <div className="grow shrink">© Quick Links</div>
//           <div className="grow shrink">© Copyrights Reserved</div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




















import React from 'react';

const Footer = () => {
  const navigationLinks = [
    { title: 'Home', url: '/' },
    { title: 'About Us', url: '/about-us' },
    { title: 'Services', url: '/our-services' },
    { title: 'Products', url: '/our-products' },
    { title: 'Insights', url: '/our-blogs' },
    { title: 'Talk to Ella', url: '/ai-ella' },
    { title: 'Careers & Culture', url: '/about-us/career' },
    { title: 'Contact Us', url: '/contact-us' },
    { title: 'Hudbil Tabloids', url: '/tabloids' },
    { title: 'Privacy Policy', url: '/privacy-policy' },
    { title: 'Terms & Conditions', url: '/terms-and-conditions' },
    { title: 'Accessibilities', url: '/accessibilities' }
  ];

  const socialMediaLinks = [
    { title: 'Linkedin', url: 'https://www.linkedin.com/company/hudbil-private-limited/posts/?feedView=all' },
    { title: 'Twitter', url: '#' },
    { title: 'Facebook', url: 'https://www.facebook.com/people/Hudbil/61550971184539/?mibextid=LQQJ4d' },
    { title: 'Instagram', url: "https://www.instagram.com/hudbil_com?igsh=aTV3bnMxY3piOHlm" },
    { title: 'Youtube', url: 'https://www.youtube.com/@hudbilagency' }
  ];

  const officeLocations = [
    {
      city: 'London office',
      address: 'Level 30, The Leaden hall Building Z2 Lacunal Street City of London, EC3V 4AB, UK.',
      phone: '+91 88-84-40-9369',
      type: '(HQ)'
    },
    {
      city: 'Bangalore office',
      address: 'No 235, 2nd & 3rd Floor, 13th Cross Road 2nd Stage, Indiranagar Hoysala Nagar, Bangalore - 560038',
      phone: '+91 88-84-40-9369',
      type: '(BO)'
    },
    {
      city: 'Mumbai office',
      address: '74/II, "C" Cross Road, Opp Gate No 2, MIDC - 400093, Seepz, Andheri East, Mumbai, Maharashtra.',
      phone: '+91 88-84-40-9369',
      type: '(BO)'
    }
  ];

  return (
    <footer className="flex overflow-hidden flex-col px-6 lg:px-16 pt-20 pb-6 bg-[#0B0B0B] relative z-20">
      <nav className="flex flex-col md:flex-row items-start justify-between gap-16 lg:gap-20">
        <div className="flex w-full h-full flex-col xl:flex-row gap-16 md:gap-[84px] lg:gap-[70px] xl:gap-0 md:w-1/3 items-start justify-between">
          <div className="flex flex-col">
            <ul className="flex  flex-col text-sm items-start tracking-wider leading-none text-white">
              {navigationLinks.slice(0, 6).map((link, index) => (
                <li key={index} className={index !== 0 ? "mt-6 hover:text-gray-500 transition-all duration-300" : "hover:text-gray-500 transition-all duration-300"}>
                  <a href={link.url}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col">
            <ul className="flex  flex-col items-start text-sm tracking-wider leading-none text-white">
              {navigationLinks.slice(6).map((link, index) => (
                <li key={index} className={index !== 0 ? "mt-6 hover:text-gray-500 transition-all duration-300" : "hover:text-gray-500 transition-all duration-300"}>
                  <a href={link.url}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col items-start text-sm tracking-wider leading-none text-white">
              <h3 className="self-stretch ">Social Media</h3>
              <ul>
                {socialMediaLinks.map((link, index) => (
                  <li key={index} className=" mt-6 hover:text-gray-500 transition-all duration-300">
                    <a target='blank' href={link.url}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-between gap-16 lg:gap-20 xl:gap-10 w-full md:w-1/2">
          {officeLocations.map((office, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex flex-col grow  text-lg text-white">
                <h3 className=" tracking-wider leading-none uppercase text-base flex xl:flex-col 2xl:flex-row gap-1">
                  <div>{office.city}</div>
                  <div>{office.type}</div>
                </h3>
                <p className="mt-6  md:h-20 lg:h-auto xl:h-20 leading-6 text-sm">{office.address}</p>
                <p className="self-start mt-7  tracking-wider hover:text-gray-500 transition-all duration-300 leading-loose text-sm">{office.phone}</p>
                <a href="mailto:info@hudbil.com" className="self-start text-[#7811A5] hover:text-gray-500 transition-all duration-300  mt-5 text-lg">
                  Email us here
                </a>
              </div>
            </div>
          ))}
        </div>
      </nav>
      <div className="flex flex-col md:flex-row gap-12 md:gap-0 items-stretch h-full justify-between mt-12 sm:mt-20 xl:mt-40 text-sm tracking-wider leading-5 text-zinc-500 w-full">
        <div className='w-full md:w-1/3 flex flex-col items-center md:items-start justify-center xl:justify-end min-h-full'>
          <img loading="lazy" src="/hudbil-logo-footer.png" className="flex object-contain shrink-0 max-w-full w-[250px] xl:w-[262px]" alt="Hudbil-logo" />
        </div>
        <div className="flex flex-col w-full md:w-1/2">
          <p className="max-md:max-w-full text-base text-gray-300 ">
            Hudbil Private Limited is a reliable company, with multiple brands under the one umbrella. We are here to enable you with top-notch digital solutions & products through a proven cost-saving model. This allows you to scale, optimise, expand, and enhance your business with an individual approach. This is our game style. From turning spreadsheets into custom solutions, integrating multiple platforms or automating manual processes, we can tackle any challenge.
          </p>
          <p className="mt-8 max-md:mr-1  text-base text-gray-300  max-md:max-w-full">
            We have vast experience in developing both large projects and small start-ups. Thanks to a large team of experienced professionals, we are ready to solve the most complex tasks, especially in design and web development. Let's work together to watch your business benefit.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between flex-wrap gap-6 lg:gap-8 self-center md:mt-20 max-w-full text-sm tracking-wider leading-none text-zinc-400 max-md:mt-16">
        <div className="grow ">© hudbil 2024</div>
        <div className="grow shrink  hover:text-gray-500 transition-all duration-300"><a href="/quick-links">Quick Links</a></div>
        <div className="grow shrink  hover:text-gray-500 transition-all duration-300"><a href="/survey">Survey</a></div>
        <div className="grow shrink  hover:text-gray-500 transition-all duration-300"><a href="/cookie-policy">Cookies Policy</a></div>
        <div className="grow shrink  hover:text-gray-500 transition-all duration-300"><a href="/payment-policy">Payment Policy</a></div>
        <div className="grow shrink  hover:text-gray-500 transition-all duration-300"><a href="/lo">Locations</a></div>
        <div className="grow shrink ">© Copyrights Reserved</div>
      </div>
    </footer>
  );
};

export default Footer;