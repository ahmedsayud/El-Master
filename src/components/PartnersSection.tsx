"use client";
import React from 'react';
import { staticData } from '@/data/static-data';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const PartnersSection = () => {
    const { partners } = staticData;

    return (
        <section className="bg-white py-20 px-6 md:px-12 lg:px-24" dir="rtl">
            <div className="container mx-auto">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-16">
                    <span className="bg-gray-100 text-gray-600 px-4 py-1.5 rounded-md text-sm font-bold mb-6">
                        {partners.badge}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#141414] mb-6">
                        {partners.title}
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed max-w-3xl">
                        {partners.description}
                    </p>
                </div>

                {/* Partners Slider / Grid */}
                <div className="relative mb-12 border-[1px] border-gray-100 rounded-[2.5rem] overflow-hidden">
                    <div className="flex flex-col lg:flex-row">
                        {partners.items.map((partner, index) => (
                            <div
                                key={partner.id}
                                className={`group relative w-full lg:w-1/3 h-[450px] cursor-pointer transition-all duration-300 ${index !== partners.items.length - 1 ? 'border-b-[1px] lg:border-b-0 lg:border-l-[1px] border-gray-100' : ''
                                    }`}
                            >
                                {/* Front Face: White Background + Logo */}
                                <div className="absolute inset-0 bg-[#F7F6F6] flex items-center justify-center p-12 transition-all duration-700 ease-in-out group-hover:opacity-0 group-hover:scale-95">
                                    <div className="relative w-full h-32">
                                        <Image
                                            src={partner.logo}
                                            alt={partner.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Back Face: Black Background + Logo + Text */}
                                <div className="absolute inset-0 bg-[#0A0A0A] p-10 flex flex-col items-center justify-center text-center opacity-0 scale-105 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:scale-100">
                                    <div className="relative w-32 h-16 mb-8 brightness-0 invert transition-all duration-500 delay-100">
                                        <Image
                                            src={partner.logo}
                                            alt={partner.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <h4 className="text-white text-xl font-bold mb-4 opacity-0 translate-y-4 transition-all duration-500 delay-200 group-hover:opacity-100 group-hover:translate-y-0 text-center">
                                        {partner.name}
                                    </h4>
                                    <p className="text-gray-400 text-sm leading-relaxed opacity-0 translate-y-4 transition-all duration-500 delay-300 group-hover:opacity-100 group-hover:translate-y-0 text-center">
                                        {partner.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-start gap-4">
                    <button className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-black hover:text-white transition-all">
                        <FaChevronRight className="text-xl" />
                    </button>
                    <button className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-black hover:text-white transition-all">
                        <FaChevronLeft className="text-xl" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;
