import React from 'react';

const testimonials = [
    {
        id: 1,
        name: "Jane Doe",
        feedback: "I had an amazing experience! My skin has never felt better.",
        image: "https://img.freepik.com/free-photo/beautiful-girl-with-beautiful-makeup-youth-skin-care-concept_155003-8119.jpg?t=st=1728988218~exp=1728991818~hmac=55a071bf97cbb07ef44e673fa50dd9a7d27df58fef1ca746b6f1885c24550b99&w=360", // Replace with client image
    },
    {
        id: 2,
        name: "John Smith",
        feedback: "The services provided were top-notch. Highly recommend!",
        image: "https://img.freepik.com/free-photo/business-concept-portrait-confident-young-businesswoman-keeping-arms-crossed-looking-camera-w_1258-104422.jpg?t=st=1728988332~exp=1728991932~hmac=94b51c21ac710fa4d5482d5d8b7f91d2df51b91e769b421833318ce85d9728c1&w=900", // Replace with client image
    },
    {
        id: 2,
        name: "John Smith",
        feedback: "The services provided were top-notch. Highly recommend!",
        image: "https://img.freepik.com/free-photo/business-concept-portrait-confident-young-businesswoman-keeping-arms-crossed-looking-camera-w_1258-104422.jpg?t=st=1728988332~exp=1728991932~hmac=94b51c21ac710fa4d5482d5d8b7f91d2df51b91e769b421833318ce85d9728c1&w=900", // Replace with client image
    },
];
const Testimonials = () => {

    return <>


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

            {/* Testimonials Section with Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8">
                {/* Testimonial Card */}
                <div className="text-center p-6  bg-[#FAF6F0] rounded-lg shadow-lg">
                    <p className="text-gray-700 italic">
                        "I've never been happier with my skin! [Brand Name] has changed my life for the better."
                    </p>
                    <h4 className="mt-4 font-bold text-gray-900">— Sarah M.</h4>
                </div>

                {/* Testimonial Card */}
                <div className="text-center p-6 bg-[#FAF6F0] rounded-lg shadow-lg">
                    <p className="text-gray-700 italic">
                        "The natural ingredients and quality make a noticeable difference. Highly recommend!"
                    </p>
                    <h4 className="mt-4 font-bold text-gray-900">— Emma W.</h4>
                </div>

                {/* Testimonial Card */}
                <div className="text-center p-6 bg-[#FAF6F0] rounded-lg shadow-lg">
                    <p className="text-gray-700 italic">
                        "Fantastic results, exceptional customer service, and a brand I trust!"
                    </p>
                    <h4 className="mt-4 font-bold text-gray-900">— Laura T.</h4>
                </div>
            </div>
        </div>





        <div className="h-auto md:h-80 bg-[#C59847] flex flex-col md:flex-row justify-between items-center md:py-10">
            {/* Container for Images and Text */}
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">

                {/* Image 1 */}
                <div className="w-full md:w-1/3 overflow-hidden">
                    <img
                        src="/photos/freepik-export-20241015101126398h.png" // Replace with your image URL
                        alt="Skin Care Service 1"
                        className="w-full h-80 object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                </div>

                {/* Text in the Middle */}
                <div className="text-center md:text-center md:w-1/3">
                    <p className="text-white font-semibold text-md mb-2 leading-relaxed">
                        READY TO TRANSFORM?
                    </p>
                    <h1 className="text-2xl font-bold text-white mb-2">Book Your Appointment Today</h1>
                    <button className="bg-white text-[#C59847] font-semibold py-2 px-4 rounded-full mt-2 hover:bg-gray-200 transition-all duration-300">
                        Book Now
                    </button>
                </div>

                {/* Image 2 */}
                <div className="w-full md:w-1/3 overflow-hidden  ">
                    <img
                        src="/photos/freepik-export-20241015095109GNSi.png" // Replace with your image URL
                        alt="Skin Care Service 2"
                        className="w-full h-80 object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                </div>
            </div>
        </div>









    </>
}

export default Testimonials;
