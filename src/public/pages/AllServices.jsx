import React from 'react'
import { Link } from 'react-router-dom';
import coverImageAllService from '/photos/servicescover_page-0001.jpg'
const AllServices = () => {
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
            imageUrl: "https://img.freepik.com/free-photo/woman-getting-treatment-hairdresser-shop_23-2149229766.jpg?t=st=1729062868~exp=1729066468~hmac=e72ae59bbf565ba17680d67487f65ec0fa14435f3374186130e472b619295de1&w=900",
        },
    ];
    return <>
        <div className="w-full h-36 sm:h-60 md:h-60  lg:h-64 mt-14">
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