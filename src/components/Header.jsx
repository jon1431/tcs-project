import React from 'react';
import BWM_Logo from "../assets/rumah_penghulu_ic.png"
const Header = () => {
    return (
        <header className="flex justify-between items-center py-8 px-6">
            <div className="flex items-center gap-3">
                <div className="flex items-center justify-center">
                    {/* Simple representation of the BWM logo */}
                    <img src={BWM_Logo} className='w-full'/>
                </div>
            </div>

            <nav className="flex gap-6">
                <a href="#" className="text-xs font-bold uppercase tracking-widest text-gray-800 hover:text-black transition-colors">About</a>
                <a href="#" className="text-xs font-bold uppercase tracking-widest text-gray-800 hover:text-black transition-colors">Contact</a>
            </nav>
        </header>
    );
};

export default Header;