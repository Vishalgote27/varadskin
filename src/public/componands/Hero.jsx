import React from 'react'
import { Link } from 'react-router-dom'
import Services from './Services'
import AboutUs from './AboutUs'
import Testimonials from './Testimonials'
import WhyChoose from './WhyChoose'
import NewsLetter from './NewsLetter'
import WhyBook from './WhyBook'
import Faq from './Faq'




const Hero = () => {
    return <>
        {/* <div
            className="h-screen bg-cover bg-center bg-no-repeat mt-12"
            style={{
                backgroundImage: `url('/photos/Maroon Clean Beauty Clinic Presentation_page-0001.jpg')`,
            }}
        >

        </div> */}


        <div
            className="
   mt-14
   sm:mt-10
   lg:mt-10
   xl:mt-0
     h-52     /* Mobile height */
    sm:h-96   /* Small screens */
    md:h-[28rem]   /* Medium screens */
    lg:h-[30rem]  /* Large screens */
    xl:h-[38rem]  /* Extra-large screens */
    w-full
            mx-auto
    relative"
            style={{
                backgroundImage: `url('/photos/Green and Blue Simple Blocks Beauty Landing Page Wireframe Website UI Prototype_page-0001.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',

            }}
        ></div>
        <AboutUs />
        {/* <WhyChoose /> */}
        <Services />
        <WhyBook />
        <Testimonials />
        <Faq />
        {/* <NewsLetter /> */}
    </>
}

export default Hero