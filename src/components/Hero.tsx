import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import apple from '../assets/apple.png';
import cloudLayer from '../assets/cloudLayer.png';
import upBird from '../assets/up bird.png';
import downBirdFirstLeft from '../assets/downbirdFirstLeft.png';
import downBirdSecondLeft from '../assets/downbirdSecondLef.png';
import downBirdFirstRight from '../assets/downbirdFirstright.png';
import downBirdSecondRight from '../assets/downbirdSecondRight.png';
import ArrowDownIcon from './icon/arrowIcon';
import Navbar from './Navbar';

const Hero: React.FC = () => {
    return (
        <div className="relative min-h-screen lg:min-h-[110vh] bg-[#007AFF] overflow-hidden flex flex-col items-center pt-4 lg:pt-10">
            <div className="absolute inset-0 bg-white/90 pointer-events-none" />
            <Navbar />

            {/* Background Elements - Up Birds (Flying High) */}
            {/* Using percentage-based positioning for responsiveness */}
            <motion.img
                src={upBird}
                initial={{ y: 500, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                className="absolute top-[15%] sm:top-[25%] left-[5%] sm:left-[14%] w-10 sm:w-12 lg:w-[42.36px] h-auto aspect-[42.36/13.96]"
                alt="Flying bird"
            />

            <motion.img
                src={upBird}
                initial={{ y: 500, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                className="hidden lg:block absolute top-[40%] right-[20%] w-[42.36px] h-[13.96px]"
                alt="Flying bird"
            />

            <motion.img
                src={upBird}
                initial={{ x: 0, y: 0, opacity: 0 }}
                animate={{ y: [0, -8, 0], opacity: 1 }}
                className="hidden lg:block absolute top-[28%] right-[23%] w-[42.36px] h-[13.96px]"
                alt="Flying bird"
            />

            <motion.img
                src={upBird}
                initial={{ y: 500, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}

                className="absolute top-[28%] right-[23%] w-[42.36px] h-[13.96px]"
                alt=""
            />

            <motion.img
                src={upBird}
                initial={{ x: 0, y: 0, opacity: 0 }}
                animate={{ y: [0, -12, 0], opacity: 1 }}
                className="hidden lg:block absolute top-[30%] left-[25%] w-[42.36px] h-[13.96px]"
                alt="Flying bird"
            />

            <motion.img
                src={upBird}
                initial={{ y: 500, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                className="absolute top-[30%] left-[25%] w-[42.36px] h-[13.96px]"
                alt=""
            />


            {/* Main Content */}
            <div className="relative z-10 w-full max-w-6xl px-4 sm:px-6 lg:px-8 text-center mt-6 lg:mt-10">

                {/* Pill Tag */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-blue-100 rounded-full px-4 py-1.5 sm:py-2 shadow-sm mb-6 sm:mb-8"
                >
                    <div className="bg-[#007AFF] rounded-full p-1">
                        <MessageCircle size={12} className="text-white" />
                    </div>
                    <span className="text-[#007AFF] text-xs sm:text-sm font-semibold tracking-wide">
                        #1 iMessage Automation Tool
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-4 sm:mb-6"
                >
                    <span className="text-[#007AFF]">iMessage</span> Automation <br className="hidden sm:block" />
                    for Teams and AI <br className="hidden sm:block" />
                    Workflows.
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto mb-6 sm:mb-10 leading-relaxed px-2"
                >
                    Coup lets you, your team, or AI workflows send iMessages directly from your phone number, running securely on your Mac or Mac Mini.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-16 sm:mb-20"
                >
                    <button className="bg-[#007AFF] text-white px-4 sm:px-[20px] py-2 sm:py-[12px] rounded-[50px] font-semibold text-sm sm:text-base transition-all shadow-lg shadow-blue-500/20 w-full sm:w-auto min-w-[136px]">
                        Get Started
                    </button>
                    <button className="bg-transparent border border-[#6C788F] text-slate-800 px-4 sm:px-[20px] py-2 sm:py-[12px] rounded-full font-semibold text-sm sm:text-base transition-all w-full sm:w-auto min-w-[266px]">
                        <div className="flex items-center justify-center gap-2 sm:gap-3">
                            <img src={apple} alt="Apple Icon" className="w-4 h-4 sm:w-5 sm:h-5" />
                            <div className="h-4 sm:h-[18px] w-px sm:w-[1px] bg-[#6C788F]" />
                            <span className="text-xs sm:text-base">Download the Mac app</span>
                        </div>
                    </button>
                </motion.div>
            </div>

            {/* Floating Scroll Indicator */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, ease: "easeInOut" }}
                className="absolute bottom-6 lg:bottom-20 z-20 flex flex-col items-center gap-1 sm:gap-2 text-[#1D2026]"
            >
                <span className="text-xs sm:text-sm lg:text-[18px] font-medium">Scroll to learn more</span>
                <ArrowDownIcon className="" />
            </motion.div>

            {/* Bottom Clouds Layer - Slide Up Entrance */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                className="absolute bottom-0 left-0 right-0 w-full pointer-events-none z-0"
            >
                {/* Main Cloud Layer */}
                <img
                    src={cloudLayer}
                    alt="Clouds"
                    className="w-full h-auto object-cover min-h-[150px] sm:min-h-[200px] lg:min-h-[250px]"
                />
            </motion.div>

            {/* Container for all bottom birds */}
            <div className="absolute bottom-0 left-0 right-0 w-full h-32 sm:h-48 lg:h-64 pointer-events-none z-10">

                {/* Far Left Bird - Hidden on mobile, shown on tablet+ */}
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                    className="hidden sm:block absolute bottom-[20%] sm:bottom-[35%] left-[5%] sm:left-[10%] lg:left-[15%] w-16 sm:w-20 lg:w-24 xl:w-[103.38px]"
                >
                    <motion.img
                        animate={{ y: [0, -8, 0] }}
                        src={downBirdFirstLeft}
                        className="w-full h-auto"
                        alt="Bird"
                    />
                </motion.div>

                {/* Inner Left Bird - Hidden on mobile, shown on tablet+ */}
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                    className="hidden md:block absolute bottom-[60%] left-[25%] lg:left-[33%] w-12 sm:w-16 lg:w-20 xl:w-[87.74px]"
                >
                    <motion.img
                        animate={{ y: [0, -6, 0] }}
                        src={downBirdSecondLeft}
                        className="w-full h-auto"
                        alt="Bird"
                    />
                </motion.div>

                {/* Inner Right Bird - Hidden on mobile, shown on tablet+ */}
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                    className="hidden md:block absolute bottom-[15%] sm:bottom-[30%] right-[25%] lg:right-[30%] w-16 sm:w-20 lg:w-24 xl:w-[128.21px]"
                >
                    <motion.img
                        animate={{ y: [0, -7, 0] }}
                        src={downBirdFirstRight}
                        className="w-full h-auto"
                        alt="Bird"
                    />
                </motion.div>

                {/* Far Right Bird - Hidden on mobile, shown on tablet+ */}
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
                    className="hidden lg:block absolute bottom-[35%] right-[10%] lg:right-[10%] w-20 lg:w-24 xl:w-[128.93px]"
                >
                    <motion.img
                        animate={{ y: [0, -9, 0] }}
                        src={downBirdSecondRight}
                        className="w-full h-auto"
                        alt="Bird"
                    />
                </motion.div>

                {/* Flying bird animations - only on larger screens */}
                <motion.div
                    initial={{ y: 0, x: 0, opacity: 0 }}
                    animate={{
                        y: -600,
                        x: '100vw',
                        opacity: [0, 1, 1, 0]
                    }}
                    transition={{
                        duration: 3,
                        ease: "easeOut",
                        delay: 3,
                        times: [0, 0.2, 0.7, 1]
                    }}
                    className="hidden lg:block absolute bottom-[40%] left-0 w-20 pointer-events-none"
                >
                    <img
                        src={downBirdSecondLeft}
                        className="w-full h-auto"
                        alt="Bird"
                    />
                </motion.div>

                <motion.div
                    initial={{ y: 0, x: 0, opacity: 0 }}
                    animate={{
                        y: -700,
                        x: '-100vw',
                        opacity: [0, 1, 1, 0]
                    }}
                    transition={{
                        duration: 3,
                        ease: "easeOut",
                        delay: 3,
                        times: [0, 0.2, 0.7, 1]
                    }}
                    className="hidden lg:block absolute bottom-[20%] right-0 w-20 pointer-events-none"
                >
                    <img
                        src={downBirdFirstRight}
                        className="w-full h-auto"
                        alt="Bird"
                    />
                </motion.div>

            </div>

        </div>
    );
};

export default Hero;