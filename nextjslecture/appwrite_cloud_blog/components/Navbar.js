import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-purple-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-bold">CodeRockers</div>
                <div className="hidden md:flex space-x-4">
                    <a href="#" className="text-white hover:text-purple-300">Home</a>
                    <a href="#" className="text-white hover:text-purple-300">About</a>
                    <a href="#" className="text-white hover:text-purple-300">Services</a>
                    <a href="#" className="text-white hover:text-purple-300">Contact</a>
                </div>
                <div className="md:hidden">
                    <button className="text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
