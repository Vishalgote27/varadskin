import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [


    { id: 1, name: "Vivek Patil", feedback: "Varad Skin Hair Laser Clinic is an excellent facility with an easily accessible location. The doctors provide accurate diagnosis and great customer service. The clinic is clean, hygienic, and under good supervision." },

    { id: 2, name: "Bhushan Patil", feedback: "I had an excellent experience with Varad Skin Hair Laser Clinic. The clinic was easily accessible and well-connected. The supervision was good, and the care provided was gentle. Overall, it was a great experience." },

    { id: 3, name: "Shaunak", feedback: "Varad Skin Hair Laser Clinic provides high-standard care with great customer service. The doctors are well-connected and ensure speedy recovery. The clinic is clean & hygienic, making it a top choice for treatment." },

    { id: 4, name: "Sajid Shaikh", feedback: "I recently visited Varad Skin Hair Laser Clinic and had an excellent experience. The professional counseling provided was extremely supportive. The clinic was clean and hygienic, which made me feel comfortable throughout my visit. I highly recommend this clinic for anyone seeking skin or hair treatments." },

    { id: 5, name: "Shubham Kamble", feedback: "I recently visited Varad Skin Hair Laser Clinic and was quite impressed with their decent coverage of services. The quick service and reasonably priced treatments were a pleasant surprise. I didn't have to wait long, which was great. Overall, an excellent experience!" },

    { id: 6, name: "Ganesh Patil", feedback: "Excellent clinic! Accurate diagnosis and reasonably priced treatments. The doctors are very professional and caring. Highly recommend Varad Skin Hair Laser Clinic for all your skin and hair needs." },


];

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024, // Medium screens
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640, // Small screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    return (
        <div className="mx-auto py-14 px-6 lg:px-24">
            {/* Title Section */}
            <div className="container mx-auto mb-10 text-center">
                <p className="text-[#C59847] font-semibold text-md mb-2 leading-relaxed">
                    WHAT OUR CLIENTS SAY.
                </p>
                <h1 className="text-2xl sm:text-4xl font-bold mb-2 leading-tight">
                    Real Results, Real Feedback
                </h1>
                <p className="text-gray-600 max-w-xl mx-auto">
                    Hear from our satisfied clients who experienced remarkable changes.
                </p>
            </div>

            {/* Testimonials Slider */}
            <Slider {...settings} className="w-full max-w-5xl mx-auto">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="p-4">
                        <div className="bg-[#FAF6F0] rounded-lg shadow-md text-center p-6 mx-2 h-40 flex flex-col justify-between">
                            <p className="text-gray-700 italic overflow-hidden text-ellipsis">{testimonial.feedback}</p>
                            <h4 className="font-bold text-gray-900 mt-4">— {testimonial.name}</h4>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Testimonials;
