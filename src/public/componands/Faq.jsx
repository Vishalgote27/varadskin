import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "How often should I get a facial treatment?",
            answer:
                "Facial treatments are recommended every 4-6 weeks for optimal results. However, this may vary based on your skin type and concerns.",
        },
        {
            question: "Which skincare products are best for sensitive skin?",
            answer:
                "For sensitive skin, it's essential to use gentle, hypoallergenic, and fragrance-free products to avoid irritation.",
        },
        {
            question: "How can I maintain glowing skin?",
            answer:
                "Maintaining glowing skin requires a consistent skincare routine, staying hydrated, and protecting your skin from the sun.",
        },
        {
            question: "How can I maintain glowing skin?",
            answer:
                "Maintaining glowing skin requires a consistent skincare routine, staying hydrated, and protecting your skin from the sun.",
        },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="py-14">
            {/* Container for Flex Layout */}
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-start justify-between md:gap-20 lg:px-24">

                {/* FAQ Page Title Section */}
                <div className="w-full lg:w-1/3 mb-10 lg:mb-0 ">
                    <p className="text-[#C59847] font-semibold text-md mb-2">FAQ</p>
                    <h1 className="text-2xl sm:text-4xl font-bold  mb-4">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-gray-600 text-md">
                        Find answers to the most common skincare questions and learn how we can help you achieve radiant, healthy skin.
                    </p>
                    <Link to={"/contact"}>
                        <button className="bg-[#C59847] mt-5 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300">
                            Contact Us
                        </button>
                    </Link>
                </div>

                {/* FAQ Section */}
                <div className="w-full lg:w-2/3 ">
                    {faqs.map((faq, index) => (
                        <div key={index} className="rounded-lg mb-6 bg-[#FAF6F0] transition-all duration-300">
                            {/* FAQ Question */}
                            <div
                                className="flex justify-between items-center cursor-pointer p-4"
                                onClick={() => toggleFAQ(index)}
                            >
                                <h2 className="text-lg font-semibold">
                                    {faq.question}
                                </h2>
                                <span className="text-[#C59847]">
                                    {activeIndex === index ? <FaMinus /> : <FaPlus />}
                                </span>
                            </div>

                            {/* FAQ Answer */}
                            {activeIndex === index && (
                                <div className="p-6 mt-4 bg-[#C59847] text-white rounded-b-lg">
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Faq;
