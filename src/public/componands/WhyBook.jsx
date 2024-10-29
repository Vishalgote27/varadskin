import React from 'react'
import { FaLeaf, FaShoppingBag, FaUserShield } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import ImageAbout from '/photos/aboutowner.jpg'

const WhyBook = () => {
    return <>
        {/* bg-[#FAF6F0] */}
        {/* bg-[#F1E3E2] */}



        <div className="py-14 flex items-center overflow-hidden"> {/* Added overflow-hidden */}
            <div className="container mx-auto px-6 lg:px-24">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0 md:space-x-20"> {/* Adjusted spacing */}
                    {/* Info Section */}
                    <div className="w-full md:w-1/2">
                        <p className="text-[#C59847] font-semibold text-md mb-2 leading-relaxed">
                            BOARD-CERTIFIED SKINCARE PHYSICIAN
                        </p>
                        <h1 className="text-2xl sm:text-4xl font-bold mb-2 leading-tight">
                            Dr. Priyanka Patil
                        </h1>
                        <p className="text-gray-600 mb-4 text-lg">
                            Dr. Priyanka Patil is a highly regarded skincare and aesthetic medical specialist with over 5 years of clinical experience. She has completed her Post Graduate Diploma in Clinical Cosmetology (PGDCC) at the esteemed Illamed Institute in Mumbai. Dr. Patil is dedicated to providing personalized care, utilizing advanced treatments and chemical cosmetics to help her patients achieve their skincare goals. Her expertise in the latest dermatological techniques ensures that every patient receives tailored solutions that promote healthy, radiant skin.
                        </p>
                        <div className="">
                            <Link to={"/contact"}>
                                <button className="bg-[#C59847] text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300">
                                    Book a Consultation
                                </button>
                            </Link>
                        </div>
                    </div>
                    {/* Photo Section */}
                    <div className="w-full md:w-1/2 mb-8 md:mb-0">
                        <div className="relative rounded-md overflow-hidden shadow-lg">
                            <img
                                src={ImageAbout} // Add your image URL
                                alt="Dr. Priyanka Patil"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div className="bg-[#FAF6F0] py-14 flex items-center overflow-hidden"> {/* Added overflow-hidden */}
            <div className="container mx-auto px-6 lg:px-24">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0 md:space-x-20"> {/* Adjusted spacing */}
                    {/* Photo Section */}
                    <div className="w-full md:w-1/2 mb-8 md:mb-0">
                        <div className="relative rounded-lg overflow-hidden shadow-lg">
                            <img
                                src="https://img.freepik.com/free-photo/before-after-portrait-woman-retouched_23-2149121636.jpg?t=st=1728976322~exp=1728979922~hmac=0df2949a9827cb7ff22171e066f58f4facf1f2f1bd7631dfe83a4a2788310a50&w=900" // Add your image URL
                                alt="Why Book With Me"
                                className="w-full h-auto lg:h-96 object-cover"
                            />
                        </div>
                    </div>

                    {/* Info Section */}
                    <div className="w-full md:w-1/2">
                        <p className="text-[#C59847] font-semibold text-md mb-2 leading-relaxed">
                            WHY BOOK WITH ME.
                        </p>
                        <h1 className="text-2xl sm:text-4xl font-bold  mb-2 leading-tight">
                            Exceptional Care <br /> Tailored to You
                        </h1>
                        <p className="text-gray-600 mb-4 text-lg">
                            Book your appointment today and let me help you achieve the beautiful skin you deserve!
                        </p>
                        <div className="space-y-3">
                            {/* Key Benefit 1 */}
                            <div className="flex items-center">
                                <FaLeaf className="text-[#C59847] text-xl mr-4" /> {/* Icon */}
                                <div>
                                    <h4 className="text-lg font-semibold text-[#C59847]">Expert Knowledge</h4>
                                </div>
                            </div>

                            {/* Key Benefit 2 */}
                            <div className="flex items-start">
                                <FaUserShield className="text-[#C59847] text-xl mr-4" /> {/* Icon */}
                                <div>
                                    <h4 className="text-lg font-semibold text-[#C59847]">Personalized Care</h4>
                                </div>
                            </div>

                            {/* Key Benefit 3 */}
                            <div className="flex items-start">
                                <FaShoppingBag className="text-[#C59847] text-xl mr-4" /> {/* Icon */}
                                <div>
                                    <h4 className="text-lg font-semibold mb-4 text-[#C59847]">Trusted Results</h4>
                                </div>
                            </div>
                            <Link to={"/contact"}>
                                <button className="bg-[#C59847] text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300">
                                    Book An Appointment
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </>
}

export default WhyBook