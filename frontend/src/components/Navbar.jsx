import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Menu', path: '/menu' },
        { name: 'Contact', path: '/contact' }
    ]

    return (
        <nav className='bg-white dark:bg-gray-900 border-b-2 border-yellow-400'>
            <div className='flex items-center justify-between px-6 py-4 max-w-7xl mx-auto'>
                {/* Logo */}
                <div>
                    <Link to={'/'} className='text-xl font-bold text-yellow-400 hover:scale-110 transition-all duration-300'>
                        Khoob Khao
                    </Link>
                </div>

                {/* Desktop Navigation Links */}
                <div className='hidden md:flex space-x-4 text-yellow-400 font-bold text-sm'>
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

                {/* Desktop Functionality */}
                <div className='hidden md:flex items-center space-x-4'>
                    <CiSearch className='text-2xl cursor-pointer' />
                    <div className="relative">
                        <CiShoppingCart className="text-2xl cursor-pointer" />
                        <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-yellow-400"></span>
                    </div>
                    <button className='font-bold cursor-pointer border-2 border-yellow-400 px-4 py-1 rounded-xl hover:bg-yellow-400 hover:text-gray-900 transition'>
                        Sign up
                    </button>
                </div>

                {/* Hamburger Icon */}
                <button
                    className="md:hidden text-yellow-400 text-3xl focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-60 flex justify-end">
                    <div className="bg-gray-900 w-4/5 max-w-xs h-full p-6 shadow-lg flex flex-col gap-8 z-50">
                        <div className="flex justify-end mb-4">
                            <button
                                className="text-yellow-400 text-3xl focus:outline-none"
                                onClick={() => setMenuOpen(false)}
                                aria-label="Close menu"
                            >
                                <FiX />
                            </button>
                        </div>
                        <ul className='flex flex-col gap-6'>
                            {navItems.map(item => (
                                <li key={item.name}>
                                    <NavLink
                                        to={item.path}
                                        onClick={() => setMenuOpen(false)}
                                        className={({ isActive }) =>
                                            `block font-bold text-lg ${isActive ? 'text-yellow-400' : 'text-white hover:text-yellow-400'}`
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                        <div className="flex gap-4 mt-6 items-center">
                            <CiSearch className='text-2xl text-white cursor-pointer' />
                            <CiShoppingCart className='text-2xl text-white cursor-pointer' />
                            <button className='font-bold cursor-pointer border-2 border-yellow-400 px-4 py-1 rounded-xl text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transition'>
                                Sign up
                            </button>
                        </div>
                    </div>
                    {/* Click outside to close */}
                    <div className="flex-1" onClick={() => setMenuOpen(false)} />
                </div>
            )}
        </nav>
    )
}

export default Navbar