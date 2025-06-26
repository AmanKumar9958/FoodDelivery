import React from 'react'

const Contact = () => {
    return (
        <section className="min-h-[calc(100vh-72px)] flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300 px-4 py-12">
            <div className="w-full max-w-lg bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-yellow-400 dark:text-yellow-400 mb-6 text-center">
                    Contact Us
                </h2>
                <form className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        required
                    />
                    <textarea
                        placeholder="Your Message"
                        rows={5}
                        className="px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                        required
                    />
                    <button
                        type="submit"
                        className="mt-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3 rounded-xl transition hover:cursor-pointer w-full shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    >
                        Send Message
                    </button>
                </form>
                <div className="mt-8 text-center text-gray-600 dark:text-gray-400 text-sm">
                    Or email us at <a href="mailto:support@khoobkhao.com" className="text-yellow-400 underline">support@khoobkhao.com</a>
                </div>
            </div>
        </section>
    )
}

export default Contact