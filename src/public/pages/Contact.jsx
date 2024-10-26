import React from 'react'
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'; // Import icons
import { MdMessage } from 'react-icons/md'; //
import coverImageContact from '/photos/contactcover_page-0001.jpg'

const Contact = () => {
    return <>

        <div className="w-full h-36 sm:h-60 md:h-60  lg:h-64 mt-14">
            <img
                src={coverImageContact}
                alt="About Us Cover"
                className="w-full h-full object-cover"
            />
        </div>


        <div className="min-h-screen flex items-center justify-center py-14 px-6 sm:px-24 ">
            {/* Main container with two columns */}
            <div className="flex flex-col lg:flex-row  w-full rounded-lg shadow-xl overflow-hidden bg-white">

                {/* Form Section */}
                <div className="w-full lg:w-1/2 p-8">
                    <h2 className="text-3xl font-extrabold text-[#C59847] text-center">Get In Touch</h2>
                    <p className="mt-2 text-center text-lg text-gray-600">
                        Have any questions? Feel free to reach out.
                    </p>
                    <form className="mt-8 space-y-6">
                        {/* Full Name */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#C59847] focus:border-[#C59847] sm:text-sm transition duration-300"
                                placeholder="Your Full Name"
                            />
                        </div>

                        {/* Email Address */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#C59847] focus:border-[#C59847] sm:text-sm transition duration-300"
                                placeholder="you@example.com"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                rows="4"
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#C59847] focus:border-[#C59847] sm:text-sm transition duration-300"
                                placeholder="Type your message here..."
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="w-full inline-flex justify-center py-3 px-6 border border-transparent rounded-full shadow-lg text-white bg-[#C59847] hover:bg-[#B58A3D] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C59847] transition duration-300 transform hover:scale-105"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

                {/* Contact Information Section */}
                <div className="w-full lg:w-1/2 bg-[#C59847] p-8 flex items-center justify-center relative">
                    <div className="text-center text-white space-y-6">
                        <h3 className="text-2xl font-bold">Our Contact Information</h3>
                        <p className="text-lg">
                            <FaPhone className="inline-block text-yellow-400 mr-2" />
                            +1 (234) 567-8901
                        </p>
                        <p className="text-lg">
                            <FaEnvelope className="inline-block text-yellow-400 mr-2" />
                            support@skincare.com
                        </p>
                        <p className="text-lg">
                            <FaMapMarkerAlt className="inline-block text-yellow-400 mr-2" />
                            123 Skincare Avenue, City, Country
                        </p>
                        {/* Optional Background Decoration */}
                        <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: `url('/path-to-your-image.jpg')` }}></div>
                    </div>
                </div>
            </div>
        </div>

        <div className=" h-full px-6 sm:px-24">
            <iframe
                className="py-5 top-0 left-0 w-full h-80"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10995.344988685614!2d75.34982809052254!3d19.866561772923095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba2861b55e297%3A0x367af1209d96eadf!2sPundlik%20Nagar%2C%20Garkheda%2C%20Chhatrapati%20Sambhajinagar%20(Aurangabad)%2C%20Maharashtra%20431009!5e0!3m2!1sen!2sin!4v1729599195082!5m2!1sen!2sin"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>


        </div>

    </>
}

export default Contact