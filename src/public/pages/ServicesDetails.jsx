import React from 'react'
import { useParams } from 'react-router-dom';
import backgroundImage from '/photos/lasercover_page-0001.jpg'
import skinImage from '/photos/skincover_page-0001.jpg'
import hairImage from '/photos/haircover_page-0001.jpg'
import { FaRegSmileBeam, FaSpa, FaCompressArrowsAlt, FaCut, FaRegSadTear, FaRegHeart, FaPills, FaHandHoldingMedical, FaShieldAlt, FaPaintBrush, FaTint, FaRegClock, FaMedkit, FaLeaf, FaShower, FaRegHandPeace, FaRegTrashAlt, FaRegStar, FaMicrochip, FaLightbulb, FaRegSmile, FaThermometerHalf, FaAllergies, FaPalette, FaWaveSquare } from "react-icons/fa"


const ServicesDetails = () => {
    const { id } = useParams();

    const services = [
        {
            id: 1,
            title: "Laser Treatments",
            backgroundImage: backgroundImage,
            description: "Revitalize skin, reduce scars, and enhance youthful appearance effectively.",
            images: [
                {
                    url: "https://img.freepik.com/free-photo/young-beautiful-girl-lies-beautician-s-table-receives-procedures_343596-4226.jpg?t=st=1729063133~exp=1729066733~hmac=35faf231d00f66ac8084fdccdd85edd3ce29f86f18bd52acf048b8c631c74042&w=900",
                    imgTitle: "Co2 Fractional Laser",
                    // details: "Treats scars, wrinkles, and skin texture issues.",
                    points: [
                        {
                            icon: FaRegHeart,
                            title: "Acne Scars",
                            description: "Fades acne scars, boosts skin collagen.",
                        },
                        {
                            icon: FaRegSmileBeam,
                            title: "Anti-Aging",
                            description: "Reduces wrinkles, revitalizes skin for a youthful glow.",
                        },
                        {
                            icon: FaRegHandPeace,
                            title: "Skin Tightening",
                            description: "Stimulates collagen to firm and tighten skin effectively.",
                        },
                        {
                            icon: FaRegHeart,
                            title: "Scar Reduction",
                            description: "Enhances skin regeneration to improve scar texture effectively.",
                        },
                    ],
                },
                {
                    url: "https://img.freepik.com/free-photo/young-woman-having-skincare-treatment_23-2148906446.jpg?t=st=1729149952~exp=1729153552~hmac=783832e768a05327e8405ffa242bc253543a592fd4fb51b5da53ed56cc0f4646&w=900",
                    imgTitle: "Q-Switch Laser",
                    // details: "Minimally invasive treatment for all skin types, ensuring comfort and precision.",
                    points: [
                        {
                            icon: FaRegTrashAlt,
                            title: "Tattoo Removal",
                            description: "Safely fades and removes unwanted tattoos using lasers.",
                        },
                        {
                            icon: FaRegStar,
                            title: "Mole Removal",
                            description: "Targets moles without damaging surrounding skin tissues.",
                        },
                        {
                            icon: FaRegSmileBeam,
                            title: "Skin Rejuvenation",
                            description: "Enhances skin texture and tone, reducing fine lines.",
                        },
                        {
                            icon: FaMicrochip,
                            title: "Carbon Facial",
                            description: "Cleanses pores and brightens skin with laser treatment.",
                        },
                    ],
                },
                {
                    url: "https://img.freepik.com/free-photo/female-patient-receiving-cosmetic-treatment_107420-65218.jpg?t=st=1729149907~exp=1729153507~hmac=060c919a78d81b337ce8edc7f556dd5224ca050f970544947fee751eaea474e4&w=900",
                    imgTitle: "Diode Laser",
                    // details: "After the procedure, you'll notice immediate improvements, with the full results visible over the coming weeks.",
                    points: [
                        {
                            icon: FaLightbulb, // Consider an icon related to hair reduction
                            title: "Permanent Hair Reduction",
                            description: "Effectively reduces hair growth using laser technology.",
                        },
                        {
                            icon: FaRegSmile,
                            title: "Laser Facial & More",
                            description: "Improves skin texture and promotes collagen production.",
                        },

                    ],
                },
            ],
        },

        {
            id: 2,
            title: "Skin Treatments",
            backgroundImage: skinImage,
            description: "Revitalize skin, reduce scars, and enhance youthful appearance effectively.",
            images: [
                {
                    url: "https://crystalskinindia.com/wp-content/uploads/2024/09/facial-1024x683-1.jpeg",
                    imgTitle: "Skin Tretment",
                    // details: "Revitalize skin, reduce scars, and enhance youthful appearance effectively.",
                    points: [
                        {
                            icon: FaPills, // Icon representing skin issues or acne
                            title: "Acne & Blackheads",
                            description: "Topical creams, peels, and lasers for clearer skin.",
                        },

                        {
                            icon: FaRegHeart, // Icon representing healing or rejuvenation
                            title: "Face PRP Therapy",
                            description: "PRP therapy uses your blood to rejuvenate and heal skin.",
                        }
                        ,
                        {
                            icon: FaShieldAlt, // Icon representing medication and treatment
                            title: "Fungal Infection",
                            description: "Managed with antifungal treatments for effective elimination.",
                        },

                        {
                            icon: FaThermometerHalf, // Icon representing care and treatment
                            title: "Eczema and Pimples",
                            description: "Eczema managed with moisturizers; pimples with treatments.",
                        },

                    ],
                },
                {
                    url: "https://img.freepik.com/free-photo/skin-allergy-reaction-person-s-arm_23-2149140472.jpg?t=st=1729249231~exp=1729252831~hmac=9cd184865cebb142f6ff685e87dca07ce046c5d3e9ea7024a95f517fc5a6c86e&w=900",
                    imgTitle: "Q-Switch Laser",
                    // details: "Minimally invasive treatment for all skin types, ensuring comfort and precision.",
                    points: [
                        {
                            icon: FaAllergies, // Icon representing protection and treatment
                            title: "Skin Allergy",
                            description: "Treated with antihistamines, creams, and avoiding allergens.",
                        },
                        {
                            icon: FaRegHeart, // Icon representing care for skin health
                            title: "Skin Problems",
                            description: "Managed with routines and medications for healthier skin.",
                        }
                        ,
                        {
                            icon: FaPalette, // Icon representing skin tone and color
                            title: "Pigmentation",
                            description: "Lightens dark spots and evens skin tone.",
                        }
                        ,
                        {
                            icon: FaRegSmileBeam, // Icon representing surgical removal
                            title: "Mole Removal",
                            description: "Laser, cryotherapy, or surgery removes moles safely.",
                        }
                        ,
                    ],
                },
                {
                    url: "https://img.freepik.com/free-photo/woman-spa-having-skin-treatment_23-2148825320.jpg?t=st=1729249297~exp=1729252897~hmac=2913eead9fb1c66f38e2444ee0be9eaa8f71e8cf9a250c09305ea4851f0fdb53&w=900",
                    imgTitle: "Diode Laser",
                    // details: "After the procedure, you'll notice immediate improvements, with the full results visible over the coming weeks.",
                    points: [
                        {
                            icon: FaCut, // Icon representing surgical procedures
                            title: "Skin Tag Removal",
                            description: "Laser, cryotherapy, or surgery safely removes skin tags.",
                        }
                        ,
                        {
                            icon: FaTint, // Icon representing skin treatment or pigmentation
                            title: "Melasma / Dark Spots",
                            description: "Chemical peels and lasers lighten dark spots effectively.",
                        }
                        ,
                        {
                            icon: FaThermometerHalf, // Icon representing aging or time
                            title: "Wrinkles & Psoriasis",
                            description: "Wrinkles treated with Botox psoriasis managed with therapies.",
                        },
                        {
                            icon: FaRegClock, // Icon representing aging
                            title: "Anti-Aging Treatment",
                            description: "Botox, fillers, and lasers restore youthful skin appearance.",
                        }



                    ],
                },
                {
                    url: "https://img.freepik.com/free-photo/girl-spa-salon-receives-back-neck-massage-lies-cosmetology-table-relaxed-enjoys-process_343596-4329.jpg?t=st=1729249436~exp=1729253036~hmac=0c5b305e2e64c9dc8f30b9b2fe0874bd2879ff2c633d8ed6063e513772245b61&w=900",
                    imgTitle: "Diode Laser",
                    // details: "After the procedure, you'll notice immediate improvements, with the full results visible over the coming weeks.",
                    points: [
                        {
                            icon: FaWaveSquare, // Icon representing surgical procedures
                            title: "Radio Frequency Therapy",
                            description: "Stimulates collagen for smoother, firmer skin appearance.",
                        }
                        ,
                        {
                            icon: FaTint, // Icon representing skin treatment or pigmentation
                            title: "Facial Threads & Carbon Facial",
                            description: "Dissolvable threads lift sagging skin; carbon facials refine pores.",
                        }
                        ,
                        {
                            icon: FaThermometerHalf, // Icon representing aging or time
                            title: "HIFU Face Tightening & Many More",
                            description: "HIFU boosts collagen, tightening skin with complementary skin treatments.",
                        }




                    ],
                },
            ],
        },

        {
            id: 3,
            title: "Hair Treatment",
            backgroundImage: hairImage,
            description: "Revitalize skin, reduce scars, and enhance youthful appearance effectively.",
            images: [
                {
                    url: "https://img.freepik.com/free-photo/woman-getting-hair-loss-treatment-clinic_23-2149152750.jpg?t=st=1729248444~exp=1729252044~hmac=6bfc4bd1b225cfeff3d11f5d43b003dbd56940ab9206c36d32bdb082c22447b6&w=900",
                    imgTitle: "Hair Treatment",
                    details: "Revitalize skin, reduce scars, and enhance youthful appearance effectively.",
                    points: [
                        {
                            icon: FaCut, // Icon representing hair transplant/treatment
                            title: "Hair Transplant",
                            description: "Hair transplant relocates follicles for natural-looking, permanent hair restoration",
                        }
                        ,

                        {
                            icon: FaMedkit, // Icon representing medical or restorative treatments
                            title: "PRP Therapy & GFC Therapy",
                            description: "PRP and GFC therapies stimulate hair growth using blood-derived factors.",
                        }

                        ,
                        // {
                        //     icon: FaPills, // Icon representing medication and treatment
                        //     title: "Fungal Infection",
                        //     description: "Uses antifungals to eliminate infections and prevent recurrence.",
                        // },

                        // {
                        //     icon: FaHandHoldingMedical, // Icon representing care and treatment
                        //     title: "Eczema and Pimples",
                        //     description: "Moisturizers and medications treat eczema and pimples.",
                        // },

                    ],
                },
                {
                    url: "https://img.freepik.com/free-photo/closeup-profile-portrait-upset-astonished-woman-looking-her-dry-hair-having-problems-needs-change-shampoo-special-treatment-trichological-clinic_176532-14933.jpg?t=st=1729248353~exp=1729251953~hmac=d693891ad434b93287823bd596e8ce8408d764f37e99f1e2e67de440758070bf&w=900",
                    imgTitle: "Q-Switch Laser",
                    // details: "Minimally invasive treatment for all skin types, ensuring comfort and precision.",
                    points: [
                        {
                            icon: FaRegHeart, // Icon representing supportive treatments
                            title: "Hair Loss Treatment",
                            description: "ffective treatments to slow hair loss and strengthen existing hair.",
                        }
                        ,
                        {
                            icon: FaLeaf, // Icon symbolizing natural growth and hair health
                            title: "Hair Growth",
                            description: "Supports hair growth through care, nutrients, and targeted treatments.",
                        }

                        // ,
                        // {
                        //     icon: FaPaintBrush, // Icon representing skin tone and color
                        //     title: "Pigmentation",
                        //     description: "Treat dark spots for an even skin tone.",
                        // }
                        // ,
                        // {
                        //     icon: FaRegSmileBeam, // Icon representing surgical removal
                        //     title: "Mole Removal",
                        //     description: "Laser or surgery for safe mole removal.",
                        // }
                        // ,
                    ],
                },
                {
                    url: "https://img.freepik.com/free-photo/woman-getting-hair-loss-treatment-clinic_23-2149152754.jpg?t=st=1729248206~exp=1729251806~hmac=08c5524ac8c9d15179e1410f403cf861200f0cdd8ceceb5d91fa2f139120bee7&w=900",
                    imgTitle: "Diode Laser",
                    // details: "After the procedure, you'll notice immediate improvements, with the full results visible over the coming weeks.",
                    points: [
                        {
                            icon: FaShower, // Icon symbolizing scalp care and cleansing
                            title: "Dandruff Treatment",
                            description: "Eliminates flakes and itchiness using medicated shampoos and moisturizers.",
                        },
                        {
                            icon: FaLeaf, // Icon representing growth and nourishment
                            title: "Anti-Thinning Treatment",
                            description: "Strengthens hair, reduces fall using serums and scalp massages.",
                        }


                        // {
                        //     icon: FaRegClock, // Icon representing aging or time
                        //     title: "Wrinkles, Psoriasis",
                        //     description: "Treats wrinkles; manages psoriasis inflammation.",
                        // },
                        // {
                        //     icon: FaRegClock, // Icon representing aging
                        //     title: "Anti-Aging Treatment",
                        //     description: "Reduces wrinkles and restores youthful appearance.",
                        // }



                    ],
                },
            ],
        },

    ];


    const service = services.find((service) => service.id === parseInt(id));

    if (!service) {
        return <h2>Service not found</h2>;
    }
    return <>
        <div className="service-details-container py-12 ">
            {/* Hero Banner */}
            <div
                className="hero-banner bg-cover bg-center flex items-center justify-center text-center mb-12 
             h-40 sm:h-60 md:h-80 lg:h-72 "
                style={{
                    backgroundImage: `url(${service.backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >


            </div>
            {/* bg-[#FAF6F0] */}
            <div className="container mx-auto px-6 lg:px-24">
                <h2 className="text-4xl font-bold text-black mb-6 text-center">{service.title}</h2>
                <p className="text-xl text-gray-600 mb-8 text-center">{service.description}</p>

                {/* Display images related to the selected service in an alternating layout */}
                {service.images.map((image, index) => (
                    <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 py-10 px-5 ${index % 2 === 0 ? '' : 'lg:grid-flow-dense bg-[#FAF6F0]'}`}>
                        {/* Image */}
                        <div className={`service-image ${index % 2 === 0 ? '' : 'lg:order-last '}`}>
                            <img
                                src={image.url}
                                alt={`Image ${index + 1} for ${service.title}`}
                                className="w-full h-96 object-cover shadow-lg transform hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        {/* Information */}
                        <div className="service-info flex flex-col justify-cente">
                            <h3 className="text-3xl font-bold text-[#C59847] mb-2">{image.imgTitle} </h3>
                            <p className="text-lg text-gray-500">{image.details}</p>

                            {/* Points Info with Icon */}
                            {/* <div className="mt-1">
                                {image.points.map((point, pointIndex) => (
                                    <div key={pointIndex} className="flex items-center mt-4">
                                        {React.createElement(point.icon, { className: "text-blue-600 text-2xl mr-5" })}

                                        <div>
                                            <h4 className="font-semibold text-lg text-gray-900">{point.title}</h4>
                                            <p className="text-gray-600 text-md">{point.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div> */}
                            <div className="mt-1">
                                {image.points.map((point, pointIndex) => (
                                    <div
                                        key={pointIndex}
                                        className="group flex items-center bg-[#FAF6F0] p-2 rounded-md shadow-md hover:bg-[#C59847] transition-all duration-300 mt-4"
                                    >
                                        {React.createElement(point.icon, { className: "text-[#C59847] group-hover:text-white text-2xl mr-5" })}
                                        <div>
                                            <h4 className="font-semibold text-lg text-black group-hover:text-white">{point.title}</h4>
                                            <p className="text-gray-600 text-md group-hover:text-gray-200">{point.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>



                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
}

export default ServicesDetails