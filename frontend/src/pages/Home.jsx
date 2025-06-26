import React from 'react'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";

const Home = () => {
    return (
        <section className="min-h-[calc(100vh-72px)] flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-16 py-8 sm:py-12 bg-white dark:bg-gray-900 transition-colors duration-300">
            {/* Left Content */}
            <div className="flex-1 flex flex-col gap-6 max-w-xl w-full">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-yellow-400 leading-tight text-center md:text-left">
                    Delicious food, <span className="text-yellow-400 dark:text-blue-400">delivered fast</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 text-center md:text-left">
                    Order from <span className='text-yellow-400 font-bold'>Khoob Khao</span> and get your meal delivered to your doorstep in minutes. Fresh, hot, and tasty—every time!
                </p>
                <form className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-xl px-4 py-2 shadow-md w-full max-w-md mx-auto md:mx-0">
                    <div className="flex items-center gap-2 flex-1">
                        <CiSearch className="text-2xl text-yellow-400" />
                        <input
                            type="text"
                            placeholder="Search for food..."
                            className="flex-1 bg-transparent outline-none text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 py-2"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-4 py-2 rounded-lg transition hover:cursor-pointer w-full sm:w-auto"
                    >
                        Search
                    </button>
                </form>
                <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full max-w-md mx-auto md:mx-0">
                    <Link
                        to="/menu"
                        className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3 rounded-xl shadow-lg transition text-center"
                    >
                        Explore Menu
                    </Link>
                    <Link
                        to="/signup"
                        className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 font-bold px-6 py-3 rounded-xl transition text-center"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
            {/* Right Image */}
            <div className="flex-1 flex justify-center mt-10 md:mt-0 w-full">
                <img
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
                    alt="Delicious Food"
                    className="rounded-3xl shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md object-cover"
                />
            </div>
        </section>
    )
}

export default Home