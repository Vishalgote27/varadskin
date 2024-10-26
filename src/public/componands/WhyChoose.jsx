import React from 'react'
import { FaLeaf, FaMicroscope, FaEye, FaPaw, FaRecycle, FaUserCheck } from 'react-icons/fa';

const WhyChoose = () => {

    return <>
        <section className="py-16 ">
            <div className="container mx-auto px-6 lg:px-24">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">Why Choose Our Skincare Solutions</h2>
                    <p className="mt-4 text-gray-600">
                        Our commitment to excellence and natural ingredients sets us apart. Here's why our customers trust us with their skincare needs.
                    </p>
                </div>

                {/* Cards Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

                    {/* Card 1 */}
                    <div className="p-8 bg-white shadow-lg rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                                <FaLeaf className="text-2xl" />
                            </div>
                            <h3 className="ml-4 text-xl font-semibold text-gray-800">Natural Ingredients</h3>
                        </div>
                        <p className="text-gray-600">
                            We use only the finest natural ingredients sourced from sustainable farms to ensure your skin gets the best care possible.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="p-8 bg-white shadow-lg rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                                <FaMicroscope className="text-2xl" />
                            </div>
                            <h3 className="ml-4 text-xl font-semibold text-gray-800">Dermatologist Approved</h3>
                        </div>
                        <p className="text-gray-600">
                            All our products are rigorously tested and approved by leading dermatologists for safety and effectiveness.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="p-8 bg-white shadow-lg rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center">
                                <FaEye className="text-2xl" />
                            </div>
                            <h3 className="ml-4 text-xl font-semibold text-gray-800">Visible Results</h3>
                        </div>
                        <p className="text-gray-600">
                            Our carefully formulated products are designed to deliver visible results in just a few weeks of consistent use.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="p-8 bg-white shadow-lg rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">
                                <FaPaw className="text-2xl" />
                            </div>
                            <h3 className="ml-4 text-xl font-semibold text-gray-800">Cruelty-Free</h3>
                        </div>
                        <p className="text-gray-600">
                            We never test on animals, and we ensure that our products are ethically sourced and cruelty-free.
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div className="p-8 bg-white shadow-lg rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center">
                                <FaRecycle className="text-2xl" />
                            </div>
                            <h3 className="ml-4 text-xl font-semibold text-gray-800">Sustainable Packaging</h3>
                        </div>
                        <p className="text-gray-600">
                            We care for the environment and use sustainable, eco-friendly packaging that reduces waste and environmental impact.
                        </p>
                    </div>

                    {/* Card 6 */}
                    <div className="p-8 bg-white shadow-lg rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center">
                                <FaUserCheck className="text-2xl" />
                            </div>
                            <h3 className="ml-4 text-xl font-semibold text-gray-800">Custom Solutions</h3>
                        </div>
                        <p className="text-gray-600">
                            We offer personalized skincare regimens tailored to your specific needs, ensuring you achieve the best results.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    </>
}

export default WhyChoose