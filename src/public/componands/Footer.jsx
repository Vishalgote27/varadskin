import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa'; // Importing React Icons
import { Link } from 'react-router-dom';


const Footer = () => {
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

        <footer className="bg-[#FAF6F0] text-black py-8 px-6 lg:px-20">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                {/* About Us Section */}
                <div>
                    <img src="/photos/Beige Red Gift Box Giveaway Instagram Post (1).png" alt="Varad Skin Care Clinic" className="mb-4  h-36" />
                    {/* <h4 className="font-bold text-lg ">Dr.Priyank's Varad Skin Care</h4> */}
                    {/* <p className="text-gray-600">
                        At Varad Skin Care Clinic
                    </p>  */}
                </div>

                {/* Pages Section */}
                <div>
                    <h4 className="font-bold text-lg mb-4">Pages</h4>
                    <ul className="text-gray-600">
                        <li className="hover:text-[#C59847] mb-2"><a href="#">Home</a></li>
                        <li className="hover:text-[#C59847] mb-2"><a href="#">About</a></li>
                        <li className="hover:text-[#C59847] mb-2"><a href="#">Services</a></li>
                        <li className="hover:text-[#C59847] mb-2"><a href="#">Contact Us</a></li>
                    </ul>
                </div>

                {/* Services Section */}
                <div>
                    <h4 className="font-bold text-lg mb-4">Services</h4>
                    <ul className="text-gray-600">
                        <Link to={`/services`}>

                            <li className="hover:text-[#C59847] mb-2"><a href="#">Skin Treatment</a></li>
                        </Link>
                        <Link to={`/services`}>
                            <li className="hover:text-[#C59847] mb-2"><a href="#">Hair Treatment</a></li>
                        </Link>
                        <Link to={`/services`}>
                            <li className="hover:text-[#C59847] mb-2"><a href="#">Laser Treatment</a></li>
                        </Link>
                    </ul>
                </div>

                {/* Contact Section */}
                <div>
                    <h4 className="font-bold text-lg mb-4">Contact</h4>
                    <p className="text-gray-600 mb-1 lg:text-sm">Address: Girja Housing Society, Ramkrushan Complex, Pundlik Nagar, Garkheda, Chh. Sambhajinagar</p>
                    <p className="text-gray-600 lg:text-sm">Email:<a href="mailto:support@skincare.com" className="text-[#C59847] hover:underline">varadskin2020@skincare.com</a></p>
                    <p className="text-gray-600 lg:text-sm">Phone: <a href="tel:+8767455374" className="text-[#C59847] hover:underline">8767455374</a></p>
                </div>
                {/* Follow Us Section */}
                <div>
                    <h4 className="font-bold  text-lg mb-4">Follow Us</h4>
                    <div className="flex  space-x-4 text-gray-600">
                        <a href="#" className="hover:text-[#C59847]" aria-label="Facebook">
                            <FaFacebookF className="text-2xl" />
                        </a>
                        <a href="https://www.instagram.com/varad_skin_care/profilecard/?igsh=NTNtcGxmY3BiaGk3" className="hover:text-[#C59847]" aria-label="Instagram">
                            <FaInstagram className="text-2xl" />
                        </a>
                        <a href="#" className="hover:text-[#C59847]" aria-label="Twitter">
                            <FaTwitter className="text-2xl" />
                        </a>
                        <a
                            href="https://wa.me/918767455374" // Replace with your WhatsApp number
                            className="hover:text-[#C59847]"
                            aria-label="WhatsApp"
                            target="_blank" // Open in a new tab
                            rel="noopener noreferrer" // Security best practice
                        >
                            <FaWhatsapp className="text-2xl" />
                        </a>
                    </div>

                    <iframe width="100%" height="100" className="mt-4" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10995.344988685614!2d75.34982809052254!3d19.866561772923095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba2861b55e297%3A0x367af1209d96eadf!2sPundlik%20Nagar%2C%20Garkheda%2C%20Chhatrapati%20Sambhajinagar%20(Aurangabad)%2C%20Maharashtra%20431009!5e0!3m2!1sen!2sin!4v1729599195082!5m2!1sen!2sin"></iframe>
                </div>
            </div>




            <div className="container mx-auto flex items-center justify-center">
                <div className="flex items-center sm:gap-5">
                    <p>© 2024 - Varad Skin Care Clinic | Designed & Developed by</p>
                    <img src="/photos/techsuryalogo.jpg" alt="Van Utsav Agro Tourism Logo" className="h-11 mr-2" />
                </div>
            </div>
        </footer>




        <div
            className="
   mt-14
   sm:mt-10
   lg:mt-10
   xl:mt-10
     h-52     /* Mobile height */
    sm:h-96   /* Small screens */
    md:h-[28rem]   /* Medium screens */
    lg:h-[38rem]  /* Large screens */
    xl:h-[38rem]  /* Extra-large screens */
    w-full
            mx-auto
    relative"
            style={{
                // backgroundImage: `url('/photos/Green and Blue Simple Blocks Beauty Landing Page Wireframe Website UI Prototype_page-0001.jpg')`,
                // backgroundImage: `url('/photos/Green and Blue Simple Blocks Beauty Landing Page Wireframe Website UI Prototype_page-0001 (1).jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',

            }}
        >








        </div>


    </>
}

export default Footer;
