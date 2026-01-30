"use client";

import React, { useState } from 'react';
import { staticData } from "@/data/static-data";
import Image from 'next/image';
import { FiSearch, FiMail, FiCompass, FiSmartphone } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedElement = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`relative cursor-pointer overflow-hidden ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={isHovered ? "hovered" : "normal"}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
                    className="flex items-center justify-center w-full h-full"
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

const Header = () => {
    return (
        <header className="fixed top-0 w-full text-white z-50 h-[85px] flex items-center font-sans tracking-tight" dir="ltr">
            <div className="w-[94%] mx-auto flex items-center justify-between">

                {/* Left Side: Logo */}
                <div className="flex-shrink-0">
                    <Image
                        src="/image/Misr-italia-logo17082025130341.webp"
                        alt="Misr Italia Properties"
                        width={180}
                        height={40}
                        className="object-contain h-9 w-auto brightness-0 invert"
                        priority
                    />
                </div>

                {/* Center: Navigation Pill */}
                <nav className="hidden xl:flex items-center bg-white/5 backdrop-blur-xl border-[0.5px] border-white/20 px-8 py-2.5 rounded-full shadow-2xl">
                    <div className="flex items-center gap-9">
                        {staticData.header.navLinks.map((link, index) => (
                            <div key={index} className="relative flex flex-col items-center">
                                <AnimatedElement className="px-1 py-1">
                                    <a
                                        href={link.href}
                                        className="text-[10px] font-bold tracking-[0.05em] uppercase hover:text-white/80 transition-all duration-300 pointer-events-none"
                                    >
                                        {link.label}
                                    </a>
                                </AnimatedElement>
                                {link.label === "HOME" && (
                                    <div className="absolute -bottom-1 w-3 h-[1.5px] bg-white rounded-full"></div>
                                )}
                            </div>
                        ))}

                        {/* Hotline Section */}
                        <div className="flex items-center gap-2 border-l border-white/10 pl-9 ml-1">
                            <FiSmartphone size={14} className="text-white/90" />
                            <span className="text-[12px] font-bold tracking-tight">{staticData.header.hotline}</span>
                        </div>
                    </div>
                </nav>

                {/* Right Side: Icons Pill */}
                <div className="flex items-center bg-white/5 backdrop-blur-xl border-[0.5px] border-white/20 rounded-full shadow-2xl overflow-hidden h-[42px]">
                    <div className="flex items-center gap-7 px-8 h-full">
                        <AnimatedElement className="w-5 h-5">
                            <FiCompass size={18} className="text-white/90 pointer-events-none" />
                        </AnimatedElement>
                        <AnimatedElement className="w-5 h-5">
                            <FiMail size={18} className="text-white/90 pointer-events-none" />
                        </AnimatedElement>
                        <AnimatedElement className="w-5 h-5">
                            <FiSearch size={18} className="text-white/90 pointer-events-none" />
                        </AnimatedElement>
                    </div>

                    {/* Menu Toggle Section (2 lines as per image) */}
                    <AnimatedElement className="h-full px-7 border-l border-white/20">
                        <div className="flex flex-col gap-[4px] items-center justify-center h-full">
                            <div className="w-5 h-[1.5px] bg-white rounded-full"></div>
                            <div className="w-5 h-[1.5px] bg-white rounded-full"></div>
                        </div>
                    </AnimatedElement>
                </div>

            </div>
        </header>
    );
};

export default Header;
