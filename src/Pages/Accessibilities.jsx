import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Accessibilities = () => {
  return (
    <>
      <Navbar />
      <main className='pt-[40px]'>
        <div className='font-normal text-4xl py-20 px-6 md:px-16'>
          Accessibilities
        </div>
        <div>
          <img src="./accessibilities.png" />
        </div>
        <div className='flex flex-col gap-10 pt-16 pb-20 px-6 md:px-16'>
          <div className='flex flex-col gap-10'>
            <div className='font-normal text-xl'>WEBSITE DISCLAIMER</div>
            <div className='leading-8 font-normal text-base'>The information provided by Hudbil Private Limited (“we,” “us”, or “our”) on <span>
              <a href="https://www.hudbil.com" className="underline text-blue-700">
                https://www.hudbil.com
              </a>
            </span>
              {' '}(the “Site”) is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the Site. UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITEOR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITEAND YOUR RELIANCE ON ANY INFORMATION ON THE SITEIS SOLELY AT YOUR OWN RISK.</div>
          </div>
          <div className='flex flex-col gap-10'>
            <div className='font-normal text-xl'>EXTERNAL LINKS DISCLAIMER</div>
            <div className='leading-8 font-normal text-base'>The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY THIRD-PARTY WEBSITES LINKED THROUGH THE SITE OR ANY WEBSITE OR FEATURE LINKED IN ANY BANNER OR OTHER ADVERTISING. WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.</div>
          </div>
          <div className='flex flex-col gap-10'>
            <div className='font-normal text-xl'>TESTIMONIALS DISCLAIMER</div>
            <div className='leading-8 font-normal text-base flex flex-col gap-6'>
              <div>The Site may contain testimonials by users of our products and/or services. These testimonials reflect the real-life experiences and opinions of such users. However, the experiences are personal to those particular users, and may not necessarily be representative of all users of our products and/or services. We do not claim, and you should not assume, that all users will have the same experiences. YOUR INDIVIDUAL RESULTS MAY VARY.</div>
              <div>The testimonials on the Site are submitted in various forms such as text, audio and/or video, and are reviewed by us before being posted. They appear on the Site verbatim as given by the users, except for the correction of grammar or typing errors. Some testimonials may have been shortened for the sake of brevity where the full testimonial contained extraneous information not relevant to the general public.</div>
              <div>The views and opinions contained in the testimonials belong solely to the individual user and do not reflect our views and opinions. We are not affiliated with users who provide testimonials, and users are not paid or otherwise compensated for their testimonials.</div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Accessibilities