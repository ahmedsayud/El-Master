"use client";

import React, { useState } from 'react';
import { staticData } from "@/data/static-data";
import Image from 'next/image';
import { FiSearch, FiMail } from 'react-icons/fi';
import { HiMenuAlt3 } from 'react-icons/hi';
import { LuPhone } from "react-icons/lu";
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
                    transition={{ duration: 0.3, ease: "easeInOut" }}
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
        <header className="fixed top-0 w-full text-white z-50 h-[110px] flex items-center" dir="ltr">
            <div className="w-[95%] mx-auto flex items-center justify-between">

                {/* Left Side: Logo */}
                <div className="flex-shrink-0">
                    <Image
                        src="/image/Misr-italia-logo17082025130341.webp"
                        alt="Misr Italia"
                        width={220}
                        height={60}
                        className="object-contain h-14 w-auto brightness-0 invert"
                        priority
                    />
                </div>

                {/* Center: Navigation Pill */}
                <nav className="hidden xl:flex items-center gap-10 bg-black/15 backdrop-blur-lg border border-white/10 px-12 py-3.5 rounded-full shadow-2xl">
                    {staticData.header.navLinks.map((link, index) => (
                        <div key={index} className="relative flex flex-col items-center">
                            <AnimatedElement className="px-2 py-1">
                                <a
                                    href={link.href}
                                    className="text-[12px] font-bold tracking-[0.1em] uppercase hover:text-white/80 transition-all duration-300 pointer-events-none"
                                >
                                    {link.label}
                                </a>
                            </AnimatedElement>
                            {link.label === "HOME" && (
                                <div className="absolute -bottom-2 w-4 h-[2px] bg-white rounded-full"></div>
                            )}
                        </div>
                    ))}

                    {/* Hotline Section */}
                    <div className="flex items-center gap-3 border-l border-white/10 pl-10 ml-2">
                        <LuPhone size={18} className="text-white/80" />
                        <span className="text-[15px] font-extrabold tracking-widest">{staticData.header.hotline}</span>
                    </div>
                </nav>

                {/* Right Side: Icons Pill */}
                <div className="flex items-center bg-black/15 backdrop-blur-lg border border-white/10 rounded-full shadow-2xl overflow-hidden h-[54px]">
                    <div className="flex items-center gap-7 px-10 h-full">
                        <AnimatedElement className="w-8 h-8">
                            <button className="text-white/80 transition-all duration-300 pointer-events-none">
                                <LuPhone size={22} className="opacity-90 brightness-0 invert" />
                            </button>
                        </AnimatedElement>
                        <AnimatedElement className="w-8 h-8">
                            <button className="text-white/80 transition-all duration-300 pointer-events-none">
                                <FiMail size={22} />
                            </button>
                        </AnimatedElement>
                        <AnimatedElement className="w-8 h-8">
                            <button className="text-white/80 transition-all duration-300 pointer-events-none">
                                <FiSearch size={22} />
                            </button>
                        </AnimatedElement>
                    </div>

                    {/* Menu Toggle Section */}
                    <AnimatedElement className="bg-white/5 h-full px-8 border-l border-white/10">
                        <div className="h-full flex items-center justify-center">
                            <HiMenuAlt3 size={28} className="text-white" />
                        </div>
                    </AnimatedElement>
                </div>

            </div>
        </header>
    );
};

export default Header;
