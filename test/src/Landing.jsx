import React, { useState } from 'react';
import CardGrid from "./CardGrid.jsx";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md fixed w-full z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Brand Name */}
                    <img src="/summer_tec.svg"  className="w-45" alt=""/>

                    {/* Hamburger Menu for mobile */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-800 focus:outline-none md:hidden"
                    >
                        {/* Hamburger Icon and Close Icon */}
                        {isOpen ? (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        )}
                    </button>

                    {/* Navigation Links */}
                    <div
                        className={`md:flex md:items-center md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ease-in-out transform ${
                            isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 md:translate-x-0 md:opacity-100'
                        }`}
                    >
                        <a href="#home" className="block py-3 px-4 text-gray-800 hover:text-green-600 transition-colors duration-200">
                            Home
                        </a>
                        <a href="#about" className="block py-3 px-4 text-gray-800 hover:text-green-600 transition-colors duration-200">
                            About
                        </a>
                        <a href="#contact" className="block py-3 px-4 text-gray-800 hover:text-green-600 transition-colors duration-200">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};



export default function Landing() {
    return (
        <>
            <Navbar />
          <CardGrid/>
            <div className="text-black">
                Footer
            </div>
        </>
    );
}