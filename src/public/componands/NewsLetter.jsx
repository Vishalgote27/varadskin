import React from 'react'

const NewsLetter = () => {
    return <>
        <section className="py-12 bg-gradient-to-r from-blue-100 to-blue-200">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
                <p className="text-gray-600 mb-6">Subscribe to our newsletter for the latest news and exclusive offers.</p>
                <div className="flex justify-center">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="px-4 py-2 border rounded-l-lg w-64 focus:outline-none"
                    />
                    <button className="px-6 py-2 bg-primary text-white rounded-r-lg hover:bg-primary-dark transition duration-300">
                        Subscribe
                    </button>
                </div>
            </div>
        </section>
    </>
}

export default NewsLetter