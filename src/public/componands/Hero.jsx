import React from 'react'
import { Link } from 'react-router-dom'
import Services from './Services'
import AboutUs from './AboutUs'
import Testimonials from './Testimonials'
import WhyChoose from './WhyChoose'
import NewsLetter from './NewsLetter'
import WhyBook from './WhyBook'
import Faq from './Faq'
import "./Hero.css"




const Hero = () => {
    return <>
        {/* <div
            className="h-screen bg-cover bg-center bg-no-repeat mt-12"
            style={{
                backgroundImage: `url('/photos/Maroon Clean Beauty Clinic Presentation_page-0001.jpg')`,
            }}
        >

        </div> */}

        <div className="banner">
            {/* Responsive Image */}
            <img
                src="/photos/Green and Blue Simple Blocks Beauty Landing Page Wireframe Website UI Prototype_page-0001 (1).jpg"
                alt="Banner Image"
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