import React from 'react'
import { Link } from 'react-router-dom';
import hairImage from '/photos/IMG_8336.jpg'

const Services = () => {
    const services = [
        {
            id: 1,
            title: "Laser Treatments",
            description: "Achieve smooth, radiant skin with our advanced laser treatments for lasting beauty.",
            imageUrl: "https://img.freepik.com/free-photo/young-beautiful-girl-lies-beautician-s-table-receives-procedures_343596-4226.jpg?t=st=1729063133~exp=1729066733~hmac=35faf231d00f66ac8084fdccdd85edd3ce29f86f18bd52acf048b8c631c74042&w=900",
        },
        {
            id: 2,
            title: "Skin Treatment",
            description: "Our expert consultants will guide you through personalized skincare routines tailored to your needs.",
            imageUrl: "https://img.freepik.com/free-photo/high-angle-professional-putting-hair-net_23-2149628026.jpg?t=st=1728974505~exp=1728978105~hmac=6dd58d868eac5c8002109ac3ebb58b2e0f57f7d828429a6144320e3a9b9fda8a&w=360",
        },
        {
            id: 3,
            title: "Hair Treatment",
            description: "Restore your hair's natural beauty with our nourishing and revitalizing hair treatments today.",
            imageUrl: hairImage,
        },
    ];

    return <>
        <div className="sm:py-12">
            <div className="container mx-auto px-6 lg:px-24">
                <h2 className="font-semibold text-md text-center mb-5 text-[#C59847]">
                    OUR SIGNATURE SERVICES
                </h2>
                <h1 className="text-2xl sm:text-4xl font-bold text-center  mb-8 leading-tight">
                    Transformative Treatments <br /> Tailored To You
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-[#FAF6F0] rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl">
                            <img
                                src={service.imageUrl}
                                alt={service.title}
                                className="w-full h-72 object-cover rounded-b-3xl"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                                <p className="text-gray-800 mb-4">{service.description}</p>
                                <Link to={`/servicesDetails/${service.id}`}>
                                    <button className="bg-[#C59847] text-white py-2 px-4 rounded-full hover:bg-yellow-600 transition duration-300">
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

export default Services