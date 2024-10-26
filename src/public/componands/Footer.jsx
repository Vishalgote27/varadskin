import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Importing React Icons


const Footer = () => {

    return <>

        <footer className="bg-[#FAF6F0] text-black py-8 px-6 lg:px-24">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                {/* About Us Section */}
                <div>
                    <img src="/path-to-your-logo.png" alt="Varad Skin Care Clinic" className="mb-4 w-32" />
                    <h4 className="font-bold text-lg mb-2">About Us</h4>
                    <p className="text-gray-600">
                        At Varad Skin Care Clinic, we are dedicated to helping you achieve radiant skin with our expert treatments and personalized care.
                    </p>
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
                        <li className="hover:text-[#C59847] mb-2"><a href="#">Skin Treatment</a></li>
                        <li className="hover:text-[#C59847] mb-2"><a href="#">Hair Treatment</a></li>
                        <li className="hover:text-[#C59847] mb-2"><a href="#">Laser Treatment</a></li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div>
                    <h4 className="font-bold text-lg mb-4">Contact</h4>
                    <p className="text-gray-600 mb-2">For support or inquiries, please reach out to us:</p>
                    <p className="text-gray-600">Email: <a href="mailto:support@skincare.com" className="text-[#C59847] hover:underline">support@skincare.com</a></p>
                    <p className="text-gray-600">Phone: <a href="tel:+11234567890" className="text-[#C59847] hover:underline">(123) 456-7890</a></p>
                </div>
                {/* Follow Us Section */}
                <div>
                    <h4 className="font-bold  text-lg mb-4">Follow Us</h4>
                    <div className="flex  space-x-4 text-gray-600">
                        <a href="#" className="hover:text-[#C59847]" aria-label="Facebook">
                            <FaFacebookF className="text-2xl" />
                        </a>
                        <a href="#" className="hover:text-[#C59847]" aria-label="Instagram">
                            <FaInstagram className="text-2xl" />
                        </a>
                        <a href="#" className="hover:text-[#C59847]" aria-label="Twitter">
                            <FaTwitter className="text-2xl" />
                        </a>
                        <a href="#" className="hover:text-[#C59847]" aria-label="LinkedIn">
                            <FaLinkedin className="text-2xl" />
                        </a>
                    </div>

                    <iframe width="100%" height="200" className="mt-4" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10995.344988685614!2d75.34982809052254!3d19.866561772923095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba2861b55e297%3A0x367af1209d96eadf!2sPundlik%20Nagar%2C%20Garkheda%2C%20Chhatrapati%20Sambhajinagar%20(Aurangabad)%2C%20Maharashtra%20431009!5e0!3m2!1sen!2sin!4v1729599195082!5m2!1sen!2sin"></iframe>
                </div>
            </div>




            <div className="text-center text-gray-400 mt-8">
                <p>&copy; 2024 Varad Skin Care Clinic. All Rights Reserved.</p>
            </div>
        </footer>







    </>
}

export default Footer;
