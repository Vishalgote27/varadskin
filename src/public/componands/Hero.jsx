import React from 'react'
import { Link } from 'react-router-dom'
import Services from './Services'
import AboutUs from './AboutUs'
import Testimonials from './Testimonials'
import WhyChoose from './WhyChoose'
import NewsLetter from './NewsLetter'
import WhyBook from './WhyBook'
import Faq from './Faq'
// import "./Hero.css"




const Hero = () => {
    return <>
        {/* <div
            className="h-screen bg-cover bg-center bg-no-repeat mt-12"
            style={{
                backgroundImage: `url('/photos/Maroon Clean Beauty Clinic Presentation_page-0001.jpg')`,
            }}
        >

        </div> */}



        <div className="relative w-full overflow-hidden mt-14">
            <img
                src="/photos/newvaradskincare.jpg"
                alt="Banner Image"
                className="
                    block 
                    w-full 
                    h-[40rem] 
                    sm:h-[50rem] 
                    md:h-[40rem] 
                    lg:h-[48rem] 
                    xl:h-[50rem] 
                    object-cover 
                "
            />
        </div>


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