import React from 'react'
import { Link } from 'react-router-dom';
import coverImageAllService from '/photos/ourservices_page-0001.jpg'
import hairImage1 from '/photos/IMG_8336.jpg'

import laserteatments from "/photos/laser1.avif"

import skintreatments from "/photos/skintreat.jpg"

const AllServices = () => {
    const services = [
        {
            id: 1,
            title: "Laser Treatments",
            description: "Achieve smooth, radiant skin with our advanced laser treatments for lasting beauty.",
            imageUrl: laserteatments,
        },
        {
            id: 2,
            title: "Skin Treatment",
            description: "Our expert consultants will guide you through personalized skincare routines tailored to your needs.",
            imageUrl: skintreatments,
        },
        {
            id: 3,
            title: "Hair Treatment",
            description: "Restore your hair's natural beauty with our nourishing and revitalizing hair treatments today.",
            imageUrl: hairImage1,
        },
    ];
    return <>


        <div className="w-full h-auto sm:h-60 md:h-72 lg:h-80 xl:h-72 mt-14">
            <img
                src={coverImageAllService}
                alt="About Us Cover"
                className="w-full h-full object-cover"
            />
        </div>


        <div className="min-h-screen py-14 ">
            <div className="container mx-auto px-6 lg:px-24">
                <h2 className="text-lg font-medium text-center text-[#C59847] mb-5 uppercase tracking-widest">
                    Our Signature Services
                </h2>
                <h1 className="sm:text-4xl text-2xl font-bold text-center mb-12 leading-tight">
                    Transformative Treatments <br /> Tailored To You
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service) => (
                        <div key={service.id} className="bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                            <img
                                src={service.imageUrl}
                                alt={service.title}
                                className="w-full h-72 object-cover rounded-t-lg"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-3 text-gray-800">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                                <Link to={`/servicesDetails/${service.id}`}>
                                    <button className="bg-[#C59847] text-white py-2 px-6 rounded-full hover:bg-[#af853b] transition-colors duration-300">
                                        Learn More
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
}

export default AllServices