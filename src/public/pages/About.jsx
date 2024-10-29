import React from 'react';
import { FaLeaf, FaUsers, FaRegSmile, FaCheckCircle, FaMagic, FaStar, FaClock, FaUserMd, FaShieldAlt } from 'react-icons/fa';
import { MdOutlineHealthAndSafety } from 'react-icons/md';
import { FaRegSmileBeam, FaSpa, FaCompressArrowsAlt, FaMedal } from "react-icons/fa";
import coverImageAbout from '/photos/aboutuscover_page-0001.jpg'
import ImageAbout from '/photos/aboutowner.jpg'

const About = () => {
    return <>
        <div className="min-h-screen ">

            {/* Hero Section */}
            <div className="w-full h-36 sm:h-60 md:h-60  lg:h-64 mt-14">
                <img
                    src={coverImageAbout}
                    alt="About Us Cover"
                    className="w-full h-full object-cover"
                />
            </div>


            {/* Our Story Section */}
            <section className="bg-white container mx-auto py-16 px-6 lg:px-24">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Story Text */}
                    <div className="w-full lg:w-1/2 order-1">
                        <p className="text-[#C59847] font-semibold text-md mb-2 leading-relaxed">
                            ABOUT US
                        </p>
                        <h1 className="sm:text-4xl text-2xl font-bold mb-2 leading-tight">
                            Our Story
                        </h1>
                        <p className="text-lg text-gray-700 mb-4">
                            Founded in 2020, <strong>Dr. Priyanka Patil's Skincare Clinic</strong> was established with a mission to provide advanced skincare solutions. With over 5 years of clinical and practical experience, Dr. Patil specializes in aesthetic medicine and chemical cosmetics, ensuring the highest standards of care for her patients.
                        </p>
                        <p className="text-lg text-gray-700 mb-4">
                            Our clinic is dedicated to helping you achieve healthy, radiant skin through personalized treatment plans that harness the power of both medical expertise and aesthetic artistry. We believe that every individual deserves to feel confident and beautiful in their skin.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="w-full lg:w-1/2 mb-8 lg:mb-0 order-2">
                        <img
                            src="/photos/WhatsApp Image 2024-10-18 at 12.39.30_a85c726a.jpg"
                            alt="Our Story"
                            className="rounded-sm shadow-lg transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                </div>
            </section>



            {/* Our Mission Section */}
            <div className='bg-[#FAF6F0] '>


                <section className="py-16 container mx-auto px-6 lg:px-24 ">
                    <div className="text-center mb-12">
                        <p className="text-[#C59847] font-semibold text-md mb-2 leading-relaxed">
                            OUR MISSION
                        </p>
                        <h1 className="sm:text-4xl text-2xl font-bold mb-2 leading-tight ">
                            Nurturing Your Skin with <br /> Science & Care
                        </h1>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300">
                            <FaLeaf className="text-[#C59847] text-4xl mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-[#4B3D2E]">Natural Ingredients</h3>
                            <p className="mt-2 text-[#7C6A4D]">We use only the finest organic ingredients in all our products.</p>
                        </div>
                        <div className="text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300">
                            <MdOutlineHealthAndSafety className="text-[#4A9ED1] text-4xl mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-[#4B3D2E]">Safe & Tested</h3>
                            <p className="mt-2 text-[#7C6A4D]">All products undergo strict testing to ensure safety and efficacy.</p>
                        </div>
                        <div className="text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300">
                            <FaUsers className="text-[#FFCC00] text-4xl mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-[#4B3D2E]">Customer Focused</h3>
                            <p className="mt-2 text-[#7C6A4D]">Your satisfaction is our top priority in everything we do.</p>
                        </div>
                        <div className="text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300">
                            <FaRegSmile className="text-[#FF6F91] text-4xl mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-[#4B3D2E]">Beautiful Results</h3>
                            <p className="mt-2 text-[#7C6A4D]">Experience the results of glowing, healthy skin with every use.</p>
                        </div>
                    </div>
                </section>
            </div>






        </div>

        <div className='container mx-auto'>



            <div className=" px-6 lg:px-24 py-14   ">
                <div className="text-center mb-12">
                    <p className="text-[#C59847] font-semibold text-md mb-2 leading-relaxed">
                        WHY CHOOSE US
                    </p>
                    <h1 className="sm:text-4xl text-2xl font-bold mb-2 leading-tight ">
                        Trusted Experts In Skin Health <br />And  Wellness

                    </h1>
                </div>

                {/* Main Layout Container */}
                <div className="flex flex-col md:flex-row items-cente justify-between gap-12">

                    {/* Left Column (Image) */}
                    <div className="lg:w-1/2">
                        <img
                            src="https://img.freepik.com/free-photo/young-woman-doing-special-procedure-improvements-skin_7502-7571.jpg?t=st=1729319945~exp=1729323545~hmac=53f7f4958994a6a3fb48f2ccf829fccf50652a4cfcad923b38fbb33c322f6feb&w=900" // Replace with your image
                            alt="Why Choose Us"
                            className="rounded-md shadow-lg w-full h-auto lg:h-96 object-cover"
                        />
                    </div>

                    {/* Right Column (Key Points) */}
                    <div className="lg:w-1/2 space-y-5">
                        {/* Key Point 1 */}
                        <div className="flex items-start space-x-4">
                            <FaShieldAlt className="text-4xl text-[#C59847]" />
                            <div>
                                <h4 className="text-xl font-semibold text-[#C59847] mb-1">Safe & Effective</h4>
                                <p className="text-lg text-gray-600">
                                    Our advanced laser technology ensures the highest level of safety and effectiveness for all skin types.
                                </p>
                            </div>
                        </div>

                        {/* Key Point 2 */}
                        <div className="flex items-start space-x-4">
                            <FaUserMd className="text-4xl text-[#C59847]" />
                            <div>
                                <h4 className="text-xl font-semibold text-[#C59847] mb-1">Expert Practitioners</h4>
                                <p className="text-lg text-gray-600">
                                    Our highly trained dermatologists tailor treatments to meet your skin’s unique needs.
                                </p>
                            </div>
                        </div>

                        {/* Key Point 3 */}


                        {/* Key Point 4 */}
                        <div className="flex items-start space-x-4">
                            <FaStar className="text-4xl text-[#C59847]" />
                            <div>
                                <h4 className="text-xl font-semibold text-[#C59847] mb-1">Outstanding Results</h4>
                                <p className="text-lg text-gray-600">
                                    Experience smoother, more radiant skin with noticeable improvements after each session.
                                </p>
                            </div>
                        </div>

                        {/* Key Point 5 */}


                        {/* Key Point 6 */}
                        <div className="flex items-start space-x-4">
                            <FaCheckCircle className="text-4xl text-[#C59847]" />
                            <div>
                                <h4 className="text-xl font-semibold text-[#C59847] mb-1">Proven Expertise</h4>
                                <p className="text-lg text-gray-600">
                                    Trusted by thousands of clients for delivering superior, lasting results.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>





    </>
};

export default About;
