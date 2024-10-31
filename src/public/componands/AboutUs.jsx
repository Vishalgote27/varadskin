import React from 'react'
import { FaEye, FaLeaf, FaSeedling } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const AboutUs = () => {
    return <>


        <div className="bg-[#C59847]  text-white h-36 sm:h-40 flex items-center justify-center text-center">
            <h1 className="text-2xl sm:text-4xl font-bold">
                Discover the perfect skincare
                <br />
                routine for radiant, healthy, and glowing skin.
            </h1>
        </div>






        <div className="flex items-center overflow-hidden ">
            <div className="px-6 mx-auto lg:px-24 py-14">
                <div className="container mx-auto">
                    {/* Flexbox for side-by-side layout */}
                    <div className="flex flex-col md:flex-row items-center md:items-start justify-between space-y-9 md:space-y-0 md:space-x-10"> {/* Adjust space-x-20 to space-x-10 */}
                        {/* Image Section with Custom Borders on Two Corners */}
                        <div className="relative w-full md:w-1/2 md:mr-10 "> {/* Added md:mr-10 for margin to the right */}
                            <div className="relative ">
                                <img
                                    src="https://img.freepik.com/premium-photo/woman-beauty-face-healthy-skin-natural-makeup-beautiful-young-model-studio-shot_431835-5247.jpg?w=826"
                                    alt="About Us"
                                    className="w-full h-72 sm:h-96 xl:h-full object-cover rounded-lg shadow-lg"
                                />
                                {/* Top-left and bottom-right border styling with 50% width */}
                                <div className="absolute top-0 left-0  border-t-4 border-l-4 border-[#C59847] w-1/4 h-1/3 rounded-tl-lg"></div>
                                <div className="absolute bottom-0 right-0   border-b-4 border-r-4 border-[#C59847] w-1/4 h-1/3 rounded-br-lg"></div>
                            </div>
                        </div>
                        {/* Information Section */}
                        <div className="w-full md:w-1/2 md:ml-10"> {/* Adjusted md:ml-8 to md:ml-10 for more margin */}
                            <p className="text-[#C59847] font-semibold text-md mb-2 leading-relaxed">
                                MEET YOUR AESTHETIC EXPERT.
                            </p>
                            <h1 className="text-2xl sm:text-4xl font-bold mb-4 leading-tight">
                                Dedicated to Enhancing Your Skin's Health and Beauty
                            </h1>
                            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                                We are dedicated to providing the best skincare services in the industry. Our team of professionals combines advanced science with personalized care to bring out the natural beauty and health of your skin. From rejuvenating treatments to expert consultations, we focus on your individual needs, ensuring that every step of your journey towards healthier skin is guided by our passion and expertise.
                            </p>
                            <Link to={"/about"}>
                                <button className="bg-[#C59847] text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300">
                                    Learn About My Journey
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>













    </>
}

export default AboutUs