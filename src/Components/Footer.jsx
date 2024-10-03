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
//                         <h3 className="font-semibold font-arial">{section.title}</h3>
//                         {section.items.map((item, itemIndex) => (
//                           <a href="#" key={itemIndex} className="mt-6 font-arial">{item}</a>
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
//                         <h3 className="font-arial font-semibold tracking-wider leading-none uppercase">
//                           Drop by at {office.city} office
//                         </h3>
//                         <p className="font-arial mt-6 text-sm leading-5">{office.address}</p>
//                         <a  className="font-arial self-start mt-7 tracking-wider leading-loose">
//                           {office.phone}
//                         </a>
//                         <a  className="font-arial self-start mt-5 text-sm tracking-wider">
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
//             <p className="text-sm font-arial max-md:max-w-full text-white">
//               Hudbil Private Limited is a reliable company, with multiple brands under one umbrella. We are here to enable you with top-notch digital solutions & products through a proven cost-saving model. This allows you to scale, optimise, expand, and enhance your business with an individual approach. This is our game style. From turning spreadsheets into custom solutions, integrating multiple platforms or automating manual processes, we can tackle any challenge.
//             </p>
//             <p className="text-sm font-arial mt-7 max-md:mr-1 text-white max-md:max-w-full">
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
    { title: 'Home', url: '#' },
    { title: 'About Us', url: '#' },
    { title: 'Services', url: '#' },
    { title: 'Products', url: '#' },
    { title: 'Insights', url: '#' },
    { title: 'Talk to Ella', url: '/talk-to-ella' },
    { title: 'Careers & Culture', url: '#' },
    { title: 'Contact Us', url: '/contact-us' },
    { title: 'Hudbil Tabloids', url: '#' },
    { title: 'Privacy Policy', url: '/privacy-policy' },
    { title: 'Terms & Conditions', url: '/terms&conditions' },
    { title: 'Accessibilities', url: '/accessibilities' }
  ];

  const socialMediaLinks = [
    { title: 'Linkedin', url: '#' },
    { title: 'Twitter', url: '#' },
    { title: 'Facebook', url: '#' },
    { title: 'Instagram', url: '#' },
    { title: 'Youtube', url: '#' }
  ];

  const officeLocations = [
    {
      city: 'Bangalore',
      address: 'No 235, 2nd & 3rd Floor, 13th Cross Road 2nd Stage, Indiranagar Hoysala Nagar, Bangalore - 560038',
      phone: '+91 88-84-40-9369'
    },
    {
      city: 'Mumbai',
      address: '74/II, "C" Cross Road, Opp Gate No 2, MIDC - 400093, Seepz, Andheri East, Mumbai, Maharashtra.',
      phone: '+91 88-84-40-9369'
    },
    {
      city: 'Delhi',
      address: '90B, Delhi - Jaipur Expy, Udyog Vihar, Sector 18, Gurugram, Sarhol, Haryana - 122008.',
      phone: '+91 88-84-40-9369'
    }
  ];

  return (
    <footer className="flex overflow-hidden flex-col px-6 md:px-16 pt-20 pb-6 bg-neutral-950">
      <nav className="flex flex-col md:flex-row items-start justify-between gap-16 lg:gap-20">
          <div className="flex w-full h-full flex-col xl:flex-row gap-16 md:gap-[84px] lg:gap-[70px] xl:gap-0 md:w-1/3 items-start justify-between">
            <div className="flex flex-col">
              <ul className="flex font-arial flex-col text-sm items-start tracking-wider leading-none text-white">
                {navigationLinks.slice(0, 6).map((link, index) => (
                  <li key={index} className={index !== 0 ? "mt-6" : ""}>
                    <a href={link.url}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col">
              <ul className="flex font-arial flex-col items-start text-sm tracking-wider leading-none text-white">
                {navigationLinks.slice(6).map((link, index) => (
                  <li key={index} className={index !== 0 ? "mt-6" : ""}>
                    <a href={link.url}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col items-start text-sm tracking-wider leading-none text-white">
                <h3 className="self-stretch font-arial">Social Media</h3>
                <ul>
                  {socialMediaLinks.map((link, index) => (
                    <li key={index} className="font-arial mt-6">
                      <a href={link.url}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row items-center justify-between gap-16 lg:gap-20 xl:gap-10 w-full md:w-1/2">
            {officeLocations.map((office, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex flex-col grow font-arial text-lg text-white">
                  <h3 className=" tracking-wider leading-none uppercase text-base">
                    {office.city} office
                  </h3>
                  <p className="mt-6 font-arial md:h-20 lg:h-auto xl:h-20 leading-6 text-sm">{office.address}</p>
                  <p className="self-start mt-7 font-arial tracking-wider leading-loose text-sm">{office.phone}</p>
                  <a href="mailto:contact@hudbil.com" className="self-start text-purple-700 font-arial mt-5 text-lg">
                    Email us here
                  </a>
                </div>
              </div>
            ))}
          </div>
      </nav>
      <div className="flex flex-row items-start justify-between mt-28 xl:mt-40 text-sm tracking-wider leading-5 text-zinc-500 w-full">
       <div className='w-1/3 md:w-1/3'>
       <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4951f80ca1e5237f96f1e87cfd278a72a3d04d15a73cc33588885369364b3ee?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244" className="flex object-contain shrink-0 max-w-full aspect-[1.21] w-[250px]" alt="Hudbil logo" />
       <h1 className='tracking-tighter w-full text-start self-start text-white mx-auto font-arial text-[10px] sm:text-sm md:text-2xl'>Innovation at your fingertips</h1>
       </div>
        <div className="flex flex-col w-1/2">
          <p className="max-md:max-w-full text-base text-gray-300 font-arial">
            Hudbil Private Limited is a reliable company, with multiple brands under the one umbrella. We are here to enable you with top-notch digital solutions & products through a proven cost-saving model. This allows you to scale, optimise, expand, and enhance your business with an individual approach. This is our game style. From turning spreadsheets into custom solutions, integrating multiple platforms or automating manual processes, we can tackle any challenge.
          </p>
          <p className="mt-8 max-md:mr-1  text-base text-gray-300 font-arial max-md:max-w-full">
            We have vast experience in developing both large projects and small start-ups. Thanks to a large team of experienced professionals, we are ready to solve the most complex tasks, especially in design and web development. Let's work together to watch your business benefit.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between flex-wrap gap-6 self-center mt-40 md:mt-20 max-w-full text-sm tracking-wider leading-none text-zinc-400 max-md:mt-10">
        <div className="grow font-arial">© hudbil 2024</div>
        <div className="grow shrink font-arial">Quick Links</div>
        <div className="grow shrink font-arial"><a href="/cookies-policy">Cookies Policy</a></div>
        <div className="grow shrink font-arial">© Copyrights Reserved</div>
      </div>
    </footer>
  );
};

export default Footer;