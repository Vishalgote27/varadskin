import React from 'react'
import { useParams } from 'react-router-dom';
import backgroundImage from '/photos/lasercover_page-0001.jpg'
import skinImage from '/photos/skincover_page-0001.jpg'
import hairImage from '/photos/haircover_page-0001.jpg'
import { FaRegSmileBeam, FaSpa, FaCompressArrowsAlt, FaCut, FaRegSadTear, FaRegHeart, FaPills, FaHandHoldingMedical, FaShieldAlt, FaPaintBrush, FaTint, FaRegClock, FaMedkit, FaLeaf, FaShower, FaRegHandPeace, FaRegTrashAlt, FaRegStar, FaMicrochip, FaLightbulb, FaRegSmile, FaThermometerHalf, FaAllergies, FaPalette, FaWaveSquare, FaWater, FaSyringe, FaCamera, FaRegCircle, FaTachometerAlt, FaTag, FaBolt } from "react-icons/fa"


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
                            title: "Full-Body Hair Reduction",
                            description: "Achieve long-lasting hair reduction with advanced laser technology.",
                        },
                        {
                            icon: FaRegSmile,
                            title: "Underarm Hair Reduction",
                            description: "Experience smooth, hair-free underarms with targeted laser treatment.",
                        },
                        {
                            icon: FaLightbulb, // Consider an icon related to facial or upper lip hair reduction
                            title: "Upper Lip Hair Reduction",
                            description: "Gentle and precise laser treatment for long-lasting upper lip hair reduction.",
                        }


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
                            icon: FaLightbulb, // Consider an icon related to skin care or pigmentation treatment
                            title: "Melasma Treatment",
                            description: "Reduce melasma and restore an even skin tone.",
                        }
                        ,

                        {
                            icon: FaLightbulb, // Consider an icon related to skin tone or pigmentation
                            title: "Hyperpigmentation Treatment",
                            description: "Diminish dark spots and achieve a balanced complexion.",
                        }

                        ,
                        {
                            icon: FaLeaf, // Suggesting an icon related to skin care or renewal
                            title: "Chemical Peeling",
                            description: "Reveal fresh, radiant skin with targeted exfoliation treatment.",
                        }
                        ,

                        {
                            icon: FaRegSmile, // Consider an icon representing clear or healthy skin
                            title: "Treatment for Acne & Melasma",
                            description: "Target acne and melasma for clearer, healthier skin.",
                        }
                        ,

                    ],
                },
                {
                    url: "https://img.freepik.com/free-photo/female-client-salon-face-care-routine-with-cleansing-disks_23-2148875466.jpg?t=st=1730182057~exp=1730185657~hmac=6b8918b61f179af816a6e3a821107c9f3f5920a0f1a876c51a7eec02a22ab19e&w=900",
                    imgTitle: "Comprehensive Skin Treatments",
                    // details: "Minimally invasive treatment for all skin types, ensuring comfort and precision.",
                    points: [
                        {
                            icon: FaWater, // Consider an icon related to hydration or facial treatments
                            title: "Hydrafacial",
                            description: "Deeply cleanse and hydrate for radiant skin.",
                        }
                        ,
                        {
                            icon: FaRegStar, // Consider an icon related to skin rejuvenation
                            title: "Microneedling",
                            description: "Stimulate collagen production for smoother skin."
                        }

                        ,
                        {
                            icon: FaSyringe, // Consider an icon related to injectables or facial aesthetics
                            title: "Botox Therapy",
                            description: "Reduce wrinkles and enhance facial contours."
                        }

                        ,
                        {
                            icon: FaLeaf, // Consider an icon related to skin health or detox
                            title: "Glutathione Treatment for Dark Skin",
                            description: "Brighten and even skin tone with antioxidants."
                        }

                        ,
                    ],
                },
                {
                    url: "https://img.freepik.com/free-photo/woman-spa-having-skin-treatment_23-2148825320.jpg?t=st=1729249297~exp=1729252897~hmac=2913eead9fb1c66f38e2444ee0be9eaa8f71e8cf9a250c09305ea4851f0fdb53&w=900",
                    imgTitle: "Q-Switch Treatments",
                    // details: "After the procedure, you'll notice immediate improvements, with the full results visible over the coming weeks.",
                    points: [
                        {
                            icon: FaCamera, // Consider an icon related to facial treatments or rejuvenation
                            title: "Photo Facial",
                            description: "Brighten and rejuvenate skin using light therapy.",
                        }

                        ,
                        {
                            icon: FaRegCircle, // Consider an icon related to carbon or detoxification
                            title: "Carbon Facial",
                            description: "Deeply cleanse and exfoliate for radiant skin.",
                        }

                        ,
                        {
                            icon: FaTachometerAlt, // Consider an icon related to tightening or lifting
                            title: "Skin Tightening",
                            description: "Enhance firmness and elasticity for youthful skin.",
                        }
                        ,
                        {
                            icon: FaLightbulb, // Consider an icon related to laser treatments or skin care
                            title: "IPL Laser for Pigmentation",
                            description: "Reduce pigmentation and achieve an even skin tone.",
                        }




                    ],
                },
                {
                    url: "https://img.freepik.com/free-photo/close-up-woman-applying-cream-mole_23-2149359570.jpg?t=st=1730181267~exp=1730184867~hmac=20baf9a86da4d47a1cd440191044e2b6a32e98c95b9be9285b577509ac21757a&w=900",
                    imgTitle: "Radio Frequency Theory",
                    // details: "After the procedure, you'll notice immediate improvements, with the full results visible over the coming weeks.",
                    points: [
                        {
                            icon: FaBolt, // Consider an icon related to radio frequency or energy
                            title: "Radio Frequency",
                            description: "Tighten skin and reduce wrinkles with radio frequency technology.",
                        }

                        ,
                        {
                            icon: FaTag, // Consider an icon related to skin or dermatological procedures
                            title: "Skin Tag Removal",
                            description: "Safe and effective removal of skin tags for smooth skin.",
                        }

                        ,
                        {
                            icon: FaCut, // Consider an icon related to dermatological or surgical procedures
                            title: "Mole Removal",
                            description: "Professional removal of moles for a clear complexion.",
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
                    // details: "Revitalize skin, reduce scars, and enhance youthful appearance effectively.",
                    points: [
                        {
                            icon: FaLightbulb, // Consider an icon related to laser treatments or hair care
                            title: "Hair Laser Light Therapy",
                            description: "Stimulate hair growth and reduce hair loss with advanced laser technology.",
                        },

                        {
                            icon: FaCut, // Icon representing hair transplant/treatment
                            title: "Hair Transplant",
                            description: "Hair transplant relocates follicles for natural-looking, permanent hair restoration",
                        }
                        ,
                    ],
                },

                {
                    url: "https://img.freepik.com/free-photo/young-woman-getting-prp-injection-high-angle_23-2149341429.jpg?t=st=1730182391~exp=1730185991~hmac=d64d06c732d848abef6e04fefcafc56de5a262c4f059137d1948a186e16747c9&w=900",
                    imgTitle: "PRP Hair Restoration",
                    // details: "After the procedure, you'll notice immediate improvements, with the full results visible over the coming weeks.",
                    points: [
                        {
                            icon: FaSyringe, // Consider an icon related to injections or rejuvenation
                            title: "PRP Therapy",
                            description: "Revitalize your hair with PRP Therapy, utilizing your body's own growth factors to stimulate hair follicles, promote natural growth, and restore thickness for a fuller, healthier appearance."
                        }


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
                    <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:mb-10 py-10 px-5 ${index % 2 === 0 ? '' : 'lg:grid-flow-dense bg-[#FAF6F0]'}`}>
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