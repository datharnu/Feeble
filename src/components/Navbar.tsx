import React from 'react';
import logo from '../assets/logo.png';
const Navbar: React.FC = () => {
    return (
        <nav className=" w-full flex justify-center  px-4">
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-[20px] flex items-center justify-between shadow-sm w-full max-w-[1200px]">
                <div className="flex items-center gap-2">
                    {/* Logo */}
                    <div className="flex items-center gap-1 font-bold text-xl tracking-tight text-black">

                        <img src={logo} alt="logo" className='w-[106.94px] h-[34px]' />

                    </div>
                </div>

                <div className="hidden md:flex items-center gap-8 text-[16px] font-medium text-[#8C97A8]">
                    <a href="#" className="hover:text-black transition-colors">How it Works</a>
                    <a href="#" className="hover:text-black transition-colors">Pricing</a>
                    <a href="#" className="hover:text-black transition-colors">Use Case</a>
                    <a href="#" className="hover:text-black transition-colors">FAQ</a>
                </div>

                <div className="flex items-center gap-4">
                    <button className="hidden md:block relative overflow-hidden bg-[#007AFF] text-white px-5 py-2 rounded-full text-[16px] font-medium transition-all duration-300 group hover:shadow-xl">
                        <span className="relative z-10 group-hover:text-[#007AFF] transition-colors duration-300">
                            Contact Sales
                        </span>
                        <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
