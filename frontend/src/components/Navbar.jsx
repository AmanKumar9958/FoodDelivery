import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FiMoon } from "react-icons/fi";
import { FiSun } from "react-icons/fi";

const Navbar = () => {

    // Theme toggle functionality
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark');
    }

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Menu', path: '/menu' },
        { name: 'Contact', path: '/contact' }
    ]

    return (
        <div className='flex items-center justify-between px-10 py-4 bg-white dark:bg-gray-900'>
            {/* Logo */}
            <div>
                <Link to={'/'} className='text-2xl font-bold text-yellow-400 hover:scale-110 transition-all duration-300'>
                    Khoob Khao
                </Link>
            </div>

            {/* Navigation Links */}
            <div className='flex space-x-4 text-yellow-400 font-bold text-lg'>
                {navItems.map(item => (
                    <NavLink
                        key={item.name}
                        to={item.path}
                        className={({ isActive }) => 
                            `relative ${isActive ? 'text-yellow-500 dark:text-blue-500' : 'text-yellow-400 hover:text-blue-500 dark:hover:text-blue-500'}`
                        }
                    >
                        {item.name}
                        <span className="absolute bottom-0 left-0 h-[2px] bg-blue-500 dark:bg-purple-400 w-0 group-hover:w-full transition-all duration-300"></span>
                    </NavLink>
                ))}
            </div>

            {/* Functionality */}
            <div className='flex items-center space-x-4'>
                {/* Search */}
                <CiSearch className='text-2xl cursor-pointer' />
                {/* Cart */}
                <div className="relative">
                    <CiShoppingCart className="text-2xl cursor-pointer" />
                    <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-yellow-400"></span>
                </div>
                {/* Login */}
                <button className='font-bold cursor-pointer border-2 border-yellow-400 p-2 rounded-xl'>
                    Sign up
                </button>
                {/* Theme Toggle Button */}
                <div className='border-2 border-yellow-400 p-2 rounded-xl cursor-pointer' onClick={toggleTheme}>
                    {darkMode ? (
                        <FiSun className="w-5 h-5 text-purple-400 cursor-pointer" />
                    ) : (
                        <FiMoon className="w-5 h-5 text-blue-500 cursor-pointer" />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar