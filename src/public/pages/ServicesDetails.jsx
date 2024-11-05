import React from 'react'
import { useParams } from 'react-router-dom';
import backgroundImage from '/photos/lasertratment_page-0001.jpg'
import skinImage from '/photos/skintratment_page-0001.jpg'
import hairImage from '/photos/hairtransplant_page-0001.jpg'

import skin1 from "/photos/skintretment1.jpeg"
import skin2 from "/photos/skintretment2.avif"
import skin3 from "/photos/skintretment3.webp"
import skin4 from "/photos/skintretment4.avif"
import skin5 from "/photos/skintretment5.avif"


import laser1 from "/photos/laser1.avif"
import laser2 from "/photos/laser2.avif"
import laser3 from "/photos/laser3.avif"
import laser4 from "/photos/laser4.avif"

import hair1 from "/photos/hair1.avif"
import hair2 from "/photos/hair2.avif"


import { FaRegSmileBeam, FaSpa, FaCompressArrowsAlt, FaCut, FaRegSadTear, FaRegHeart, FaPills, FaHandHoldingMedical, FaShieldAlt, FaPaintBrush, FaTint, FaRegClock, FaMedkit, FaLeaf, FaShower, FaRegHandPeace, FaRegTrashAlt, FaRegStar, FaMicrochip, FaLightbulb, FaRegSmile, FaThermometerHalf, FaAllergies, FaPalette, FaWaveSquare, FaWater, FaSyringe, FaCamera, FaRegCircle, FaTachometerAlt, FaTag, FaBolt, FaRegSun, FaEraser } from "react-icons/fa"


const ServicesDetails = () => {
    const { id } = useParams();

    const services = [
        {
            id: 1,
            title: "Laser Treatments",
            backgroundImage: backgroundImage,
            description: "Transform Your Skin with Targeted Laser Therapy.",
            images: [
                {
                    // url: "https://img.freepik.com/free-photo/young-beautiful-girl-lies-beautician-s-table-receives-procedures_343596-4226.jpg?t=st=1729063133~exp=1729066733~hmac=35faf231d00f66ac8084fdccdd85edd3ce29f86f18bd52acf048b8c631c74042&w=900",
                    imgTitle: "Co2 Fractional Laser",
                    url: laser1,
                    // details: "Treats scars, wrinkles, and skin texture issues.",
                    points: [
                        {
                            icon: FaRegHeart,
                            title: "Acne Scars",
                            description: "Fades acne scars, boosts skin collagen.",
                        },
                        {
                            icon: FaRegSmileBeam,
                            title: "wrinkles",
                            description: "Reduces wrinkles, revitalizes skin for a youthful glow.",
                        },
                        {
                            icon: FaRegHandPeace,
                            title: "Other Skin Condition",
                            description: "Stimulates collagen to firm and tighten skin effectively.",
                        },
                        // {
                        //     icon: FaRegHeart,
                        //     title: "Scar Reduction",
                        //     description: "Enhances skin regeneration to improve scar texture effectively.",
                        // },
                    ],
                },
                {
                    // url: "https://img.freepik.com/free-photo/young-woman-having-skincare-treatment_23-2148906446.jpg?t=st=1729149952~exp=1729153552~hmac=783832e768a05327e8405ffa242bc253543a592fd4fb51b5da53ed56cc0f4646&w=900",
                    imgTitle: "Q-Switch Laser",
                    url: laser2,
                    // details: "Minimally invasive treatment for all skin types, ensuring comfort and precision.",
                    points: [
                        {
                            icon: FaRegTrashAlt,
                            title: "Tattoo Removal",
                            description: "This laser treatment can remove blue, grey, and black tattoos. Darcer like usually more affective",
                        },
                        {
                            icon: FaRegStar,
                            title: "Treating Pigmentation",
                            description: "This laser can treat various skin pigmentation issues, such as melasma, age spots, sunspots, sunburn birthmarks, and freckles.",
                        },
                        {
                            icon: FaRegSmileBeam,
                            title: "Skin Remodeling",
                            description: "This laser can treat fine lines, wrinkles, and skin sagging. It helps with skin tightening.",
                        },
                        {
                            icon: FaMicrochip,
                            title: "skin Toning",
                            description: "This laser can treat skin tone and sun tan.",
                        },
                    ],
                },
                {

                    // url: "https://img.freepik.com/free-photo/laser-epilation-hair-removal-therapy_1303-23432.jpg?t=st=1730348712~exp=1730352312~hmac=21733398a24779047ab30aa409444f118a11eec23df38b894dcb3849c9ad3375&w=900",
                    imgTitle: "Diode Laser",
                    url: laser3,
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
                        },
                        {
                            icon: FaLightbulb, // Consider an icon related to hair reduction
                            title: "Skin lighting Treatment",
                            description: "It help to improve your skin tone",
                        },


                    ],
                },
                {
                    // url: "https://img.freepik.com/free-photo/female-patient-receiving-cosmetic-treatment_107420-65218.jpg?t=st=1729149907~exp=1729153507~hmac=060c919a78d81b337ce8edc7f556dd5224ca050f970544947fee751eaea474e4&w=900",

                    imgTitle: "IPL Laser",
                    url: laser4,
                    // details: "After the procedure, you'll notice immediate improvements, with the full results visible over the coming weeks.",
                    points: [
                        {
                            icon: FaLightbulb, // Consider an icon related to hair reduction
                            title: "Anti-aging treatment",
                            description: "It helps reduce freckles, sun tanning, and find wrinkles.",
                        },
                        {
                            icon: FaRegSmile,
                            title: "Photo Facial",
                            description: "It helps with skin lightening treatment for hyperpigmentation",
                        },



                    ],
                },
                {
                    url: "/photos/Before-and-After-Tattoo-Removal-Get-the-Best-Res-34.jpg",
                    imgTitle: "Pico Laser Treatment",
                    points: [
                        {
                            icon: FaEraser, // Suitable icon for tattoo removal
                            title: "Tattoo Removal",
                            description: "Helps with permanent tattoo removal."
                        },
                        {
                            icon: FaRegSun, // Icon representing skin rejuvenation
                            title: "Skin Rejuvenation",
                            description: "Targets fine lines, wrinkles, and sun tan."
                        },
                        {
                            icon: FaCut, // Icon for stretch marks treatment
                            title: "Stretch Marks Treatment",
                            description: "Effectively reduces the appearance of stretch marks."
                        },
                        {
                            icon: FaLeaf, // Icon representing skin texture improvement
                            title: "Skin Texture",
                            description: "Improves skin texture and collagen production."
                        },
                        {
                            icon: FaTint, // Icon representing enlarged pores
                            title: "Enlarged Pores",
                            description: "Helps treat oily skin, acne, and enlarged pores."
                        },
                        {
                            icon: FaLeaf, // Icon representing acne scars
                            title: "Acne Scars",
                            description: "Reduces the appearance of acne scars."
                        },
                        {
                            icon: FaPalette, // Icon representing pigmentation
                            title: "Pigmentation",
                            description: "Reduces hyperpigmentation for a more even skin tone."
                        }
                    ]
                }

            ],
        },

        {
            id: 2,
            title: "Skin Treatments",
            backgroundImage: skinImage,
            description: "Revitalize skin, reduce scars, and enhance youthful appearance effectively.",
            images: [
                {
                    url: skin1,
                    // url: "https://crystalskinindia.com/wp-content/uploads/2024/09/facial-1024x683-1.jpeg",
                    imgTitle: "Skin Tretment",
                    // details: "Revitalize skin, reduce scars, and enhance youthful appearance effectively.",
                    points: [
                        {
                            icon: FaLightbulb, // Consider an icon related to skin care or pigmentation treatment
                            title: "Hydra Facials",
                            description: "It reduces hyperpigmentation. It helps remove dead cells and clears pores by removing excess sebum and dead cells. It helps to reduce acne scars and the reappearance of acne. It helps to rejuvenate your skin and provides instant glow.",
                        }
                        ,



                        ,
                        {
                            icon: FaLeaf, // Suggesting an icon related to skin care or renewal
                            title: "Chemical Peeling",
                            description: "It helps with hyperpigmentation and melasma, and it is beneficial for severe acne conditions.",
                        }
                        ,

                        {
                            icon: FaRegSmile, // Consider an icon representing clear or healthy skin
                            title: "Treatment for Acne & Melasma",
                            description: "Target acne and melasma for clearer, healthier skin.",
                        },
                        {
                            icon: FaRegSmile, // Consider an icon representing clear or healthy skin
                            title: "RF (Radio Frequency) Cotry",
                            description: "Mole removal and skin tag removal without blood loss",
                        }
                        ,

                    ],
                },
                {

                    // url: "https://img.freepik.com/free-photo/female-client-salon-face-care-routine-with-cleansing-disks_23-2148875466.jpg?t=st=1730182057~exp=1730185657~hmac=6b8918b61f179af816a6e3a821107c9f3f5920a0f1a876c51a7eec02a22ab19e&w=900",
                    imgTitle: "Microneedling",
                    url: skin2,
                    // details: "Minimally invasive treatment for all skin types, ensuring comfort and precision.",
                    points: [
                        {
                            icon: FaWater, // Consider an icon related to hydration or facial treatments
                            title: " It helps to Reduce the Acne scars",
                            description: "Deeply cleanse and hydrate for radiant skin.",
                        }
                        ,
                        {
                            icon: FaRegStar, // Consider an icon related to skin rejuvenation
                            title: "It help to Reduce, the injury scar",
                            description: "Stimulate collagen production for smoother skin."
                        }

                        ,
                        {
                            icon: FaSyringe, // Consider an icon related to injectables or facial aesthetics
                            title: "It help for Wrinkles fine line improvement ISC",
                            description: "Reduce wrinkles and enhance facial contours."
                        }

                        ,
                        // {
                        //     icon: FaLeaf, // Consider an icon related to skin health or detox
                        //     title: "Glutathione Treatment for Dark Skin",
                        //     description: "Brighten and even skin tone with antioxidants."
                        // }

                        ,
                    ],
                },

                {
                    // url: "https://aestheticclinicriyadh.com/wp-content/uploads/2023/10/Pico-Laser-Treatment-in-Riyadh-Saudi-Arabia-Cost-Price.jpg",
                    imgTitle: "Botox therapy",
                    url: skin3,
                    // details: "After the procedure, you'll notice immediate improvements, with the full results visible over the coming weeks.",
                    points: [
                        {
                            icon: FaCamera, // Consider an icon related to facial treatments or rejuvenation
                            title: "To Improve Forehead Lines",
                            description: "Brighten and rejuvenate skin using light therapy.",
                        },
                        {
                            icon: FaRegCircle, // Consider an icon related to carbon or detoxification
                            title: "To Improve Horizontal Lines of the Neck",
                            // description: "Deeply cleanse and exfoliate for radiant skin.",
                        },
                        {
                            icon: FaTachometerAlt, // Consider an icon related to tightening or lifting
                            title: "To Improve Dimpling on the Chin",
                            description: "Enhance firmness and elasticity for youthful skin.",
                        },
                        {
                            icon: FaLightbulb, // Consider an icon related to laser treatments or skin care
                            title: " Drooping Corners of the Mouth",
                            // description: "Reduce pigmentation and achieve an even skin tone.",
                        },

                    ],
                },

                {
                    // url: "https://img.freepik.com/free-photo/beautician-doing-filler-injection-female-client_23-2148875479.jpg?t=st=1730348636~exp=1730352236~hmac=f25a70b0fa2bb2e8c8d41e3d45c81674bede2f5b5976050d539558349a320c0b&w=740",
                    imgTitle: "Glutathione Treatment",
                    url: skin4,
                    // details: "After the procedure, you'll notice immediate improvements, with the full results visible over the coming weeks.",
                    points: [
                        {
                            icon: FaBolt, // Consider an icon related to radio frequency or energy
                            title: "Acne Treatment",
                            description: "Effectively target acne and promote clear, radiant skin."

                        }

                        ,
                        {
                            icon: FaTag, // Consider an icon related to skin or dermatological procedures
                            title: "Hyper pigmentation Treatment",
                            description: "Advanced hyperpigmentation treatments, designed to safely restore your skin's natural radiance.",
                        }

                        ,
                        {
                            icon: FaCut, // Consider an icon related to dermatological or surgical procedures

                            title: "Keloid Treatment",
                            description: "Expert care for keloids with personalized treatment plans designed to reduce scarring and restore your skin's smooth appearance.",


                        },
                        {
                            icon: FaCut, // Consider an icon related to dermatological or surgical procedures
                            title: "Injury Scar | Stretch Mark Treatment",
                            description: "Reduce scars and stretch marks for smoother skin."
                        },
                        {
                            icon: FaCut, // Consider an icon related to dermatological or surgical procedures
                            title: "Dark Circles Treatment for Under Eyes",
                            description: "Brighten and rejuvenate under eyes for a refreshed look."
                        },

                        {
                            icon: FaLightbulb, // Consider an icon related to laser treatments or skin care
                            title: "It help skin Brighting",
                            description: "Reduce pigmentation and achieve an even skin tone.",
                        }




                    ],
                },
                {
                    // url: "https://img.freepik.com/free-photo/front-view-young-female-green-t-shirt-showing-her-waist-pink-wall-waist-sport-exercise-workout-beauty-slim-athlete_140725-65212.jpg?t=st=1730723633~exp=1730727233~hmac=fbbbf060b77ee3f016af6f4c4c197d7c8cf6b791568b38d41c1b9b9ca77e9e47&w=900",
                    imgTitle: "Weight Loss",
                    url: skin5,
                    points: [
                        {
                            icon: FaBolt, // Consider an icon related to weight loss or fitness
                            title: "Personalized Weight Loss Plans",
                            description: "Customized programs designed to help you achieve sustainable weight loss through nutrition and exercise guidance."
                        },
                        {
                            icon: FaTag, // Consider an icon related to healthy living
                            title: "Nutrition and Diet Consultation",
                            description: "Expert advice on meal planning and healthy eating habits tailored to your lifestyle and weight loss goals."
                        },
                        {
                            icon: FaCut, // Consider an icon related to fitness or body contouring
                            title: "Body Contouring Treatments",
                            description: "Advanced body sculpting techniques to target stubborn fat areas and enhance your body shape."
                        },
                        {
                            icon: FaCut, // Consider an icon related to motivation and support
                            title: "Ongoing Support and Coaching",
                            description: "Continuous guidance and motivation to help you stay on track and reach your weight loss goals."
                        },
                        {
                            icon: FaLightbulb, // Consider an icon related to fitness motivation
                            title: "Transform Your Lifestyle",
                            description: "Develop healthy habits for long-term weight management and overall wellness."
                        }
                    ]
                }

            ],
        },

        {
            id: 3,
            title: "Hair Treatment",
            backgroundImage: hairImage,
            description: "Revitalize your hair with treatments designed to restore strength, shine, and vitality.",
            images: [
                {
                    // url: "https://img.freepik.com/free-photo/woman-getting-hair-loss-treatment-clinic_23-2149152750.jpg?t=st=1729248444~exp=1729252044~hmac=6bfc4bd1b225cfeff3d11f5d43b003dbd56940ab9206c36d32bdb082c22447b6&w=900",
                    imgTitle: "Hair Treatment",
                    url: hair1,
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
                    // url: "https://img.freepik.com/free-photo/young-woman-getting-prp-injection-high-angle_23-2149341429.jpg?t=st=1730182391~exp=1730185991~hmac=d64d06c732d848abef6e04fefcafc56de5a262c4f059137d1948a186e16747c9&w=900",
                    imgTitle: " Hair PRP Treatment ",
                    url: hair2,
                    // details: "After the procedure, you'll notice immediate improvements, with the full results visible over the coming weeks.",
                    points: [
                        {
                            icon: FaSyringe, // Consider an icon related to injections or rejuvenation
                            title: "PRP Treatment ",
                            description: "This hair treatment addresses hair loss and controls hair fall by stimulating stem cells at the hair root. It increases blood supply to the hair follicles, promoting healthier hair growth."
                        },
                        {
                            icon: FaSyringe, // Consider an icon related to injections or rejuvenation
                            title: "GFC Treatment",
                            description: "GFC Treatment is effectively for hair loss by stimulating hair follicles and improving blood flow for healthier hair growth."
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


        <div className="service-details-container py-12">
            {/* Hero Banner */}
            <div
                className="hero-banner bg-cover bg-center flex items-center justify-center text-center mb-12 h-40 sm:h-60 md:h-80 lg:h-80 xl:h-72"
                style={{
                    backgroundImage: `url(${service.backgroundImage})`,
                }}
            ></div>


            <div className="container mx-auto px-6 lg:px-24">
                <h2 className="text-4xl font-bold text-black mb-6 text-center">{service.title}</h2>
                <p className="text-xl text-gray-600 mb-8 text-center">{service.description}</p>
            </div>

            {/* Display images with alternating full-width background sections */}
            {service.images.map((image, index) => (
                <div
                    key={index}
                    className={`py-12 ${index % 2 !== 0 ? 'bg-[#FAF6F0]' : ''}`} // Full-width bg-[#FAF6F0] for odd-indexed sections
                >
                    <div className="container mx-auto px-6 lg:px-24">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:mb-10">
                            {/* Image Section */}
                            <div className={`${index % 2 !== 0 ? 'lg:order-last' : ''} flex items-center`}>
                                <img
                                    src={image.url}
                                    alt={`Image ${index + 1} for ${service.title}`}
                                    className="w-full h-60 sm:h-96 object-cover shadow-lg transform hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Information Section */}
                            <div className="service-info flex flex-col justify-center space-y-4">
                                <h3 className="text-3xl font-bold text-[#C59847]">{image.imgTitle}</h3>
                                <p className="text-lg text-gray-500 max-h-40 overflow-hidden">{image.details}</p>

                                {/* Points with Icons */}
                                <div className="space-y-3">
                                    {image.points.map((point, pointIndex) => (
                                        <div
                                            key={pointIndex}
                                            className="group flex items-center p-4 rounded-md shadow-md hover:bg-[#C59847] transition duration-300 bg-white"
                                        >
                                            {React.createElement(point.icon, {
                                                className: 'text-[#C59847] group-hover:text-white text-2xl mr-5',
                                            })}
                                            <div>
                                                <h4 className="font-semibold text-lg text-black group-hover:text-white">{point.title}</h4>
                                                <p className="text-gray-600 text-md group-hover:text-gray-200 ">{point.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>


    </>
}

export default ServicesDetails