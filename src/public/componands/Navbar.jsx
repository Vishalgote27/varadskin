import React, { useState } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState('/'); // Default active to 'Home'

    const toggleMenu = () => setIsOpen(!isOpen);


    return (
        <>
            {/* bg-[#FAF6F0] */}
            <nav className="bg-[#FAF6F0] text-black shadow-xs fixed top-0 left-0 w-full z-50 ">
                <div className="max-w-7xl mx-auto ">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center">
                            <img className="h-20" src="/photos/Beige Red Gift Box Giveaway Instagram Post (1).png" alt="sitelogo" />
                            <span className="ml-1 uppercase font-bold text-sx tracking-wide text-[#C59847]">
                                <Link to="/" onClick={() => setActive('/')}>Dr.Priyanka's
                                    <br /><span className='text-xl'> Varad Skin Care</span> </Link>
                            </span>
                        </div>
                        <div className="hidden md:flex justify-center items-center lg:space-x-5 md:space-x-5">
                            <p className={`relative group text-lg font-semibold transition duration-300 ease-in-out ${active === '/' ? 'bg-[#C59847] text-white' : 'text-black'} px-3 py-1 rounded-sm`}>
                                <Link to="/" onClick={() => setActive('/')}>
                                    Home
                                </Link>
                            </p>
                            <p className={`relative group text-lg font-semibold transition duration-300 ease-in-out ${active === '/about' ? 'bg-[#C59847] text-white' : 'text-black'} px-3 py-1 rounded-sm`}>
                                <Link to="/about" onClick={() => setActive('/about')}>
                                    About
                                </Link>
                            </p>
                            <p className={`relative group text-lg font-semibold transition duration-300 ease-in-out ${active === '/services' ? 'bg-[#C59847] text-white' : 'text-black'} px-3 py-1 rounded-sm`}>
                                <Link to="/services" onClick={() => setActive('/services')}>
                                    Services
                                </Link>
                            </p>
                            <p className={`relative group text-lg font-semibold transition duration-300 ease-in-out ${active === '/contact' ? 'bg-[#C59847] text-white' : 'text-black'} px-3 py-1 rounded-sm`}>
                                <Link to="/contact" onClick={() => setActive('/contact')}>
                                    Contact
                                </Link>
                            </p>
                        </div>

                        {/* Mobile menu toggle */}
                        <div className="md:hidden flex items-center">
                            <button onClick={toggleMenu}>
                                {isOpen ? (
                                    <MdClose className="h-6 w-6 text-black" />
                                ) : (
                                    <MdMenu className="h-6 w-6 text-black" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-[#FAF6F0] rounded-b-3xl">
                        <Link to="/" onClick={() => { setActive('/'); toggleMenu(); }}>
                            <p className={`block ${active === '/' ? 'bg-[#C59847] text-white' : 'text-black'} hover:bg-[#C59847] hover:text-white px-4 py-2`}>
                                Home
                            </p>
                        </Link>
                        <Link to="/about" onClick={() => { setActive('/about'); toggleMenu(); }}>
                            <p className={`block ${active === '/about' ? 'bg-[#C59847] text-white' : 'text-black'} hover:bg-[#C59847] hover:text-white px-4 py-2`}>
                                About
                            </p>
                        </Link>
                        <Link to="/services" onClick={() => { setActive('/services'); toggleMenu(); }}>
                            <p className={`block ${active === '/services' ? 'bg-[#C59847] text-white' : 'text-black'} hover:bg-[#C59847] hover:text-white px-4 py-2`}>
                                Services
                            </p>
                        </Link>
                        <Link to="/contact" onClick={() => { setActive('/contact'); toggleMenu(); }}>
                            <p className={`block ${active === '/contact' ? 'bg-[#C59847] text-white' : 'text-black'} hover:bg-[#C59847] hover:text-white px-4 py-2`}>
                                Contact
                            </p>
                        </Link>

                    </div>
                )}
            </nav>



        </>
    );
};

export default Navbar;
