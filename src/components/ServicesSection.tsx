"use client";
import React from 'react';
import { staticData } from '@/data/static-data';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
    const { services } = staticData;

    return (
        <section className="bg-[#F7F6F6] py-20 px-6 md:px-12 lg:px-24" dir="rtl">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Right Side: Header Section */}
                    <div className="lg:w-1/3 flex flex-col items-start text-right">
                        <span className="bg-black/10 text-[#141414] px-4 py-1.5 rounded-md text-sm font-medium mb-6">خدماتنا</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#141414] mb-8 leading-tight">
                            {services.title}
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed mb-10">
                            {services.description}
                        </p>
                        <button className="bg-[#0A0A0A] text-white px-10 py-4 rounded-full hover:bg-black/90 transition-all flex items-center gap-3 group">
                            <span className="font-bold text-lg">{services.ctaButton}</span>
                            <span className="text-2xl transition-transform group-hover:translate-x-[-5px]">»</span>
                        </button>
                    </div>

                    {/* Left Side: Services Grid */}
                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.items.map((service, index) => (
                            <ServiceCard
                                key={index}
                                title={service.title}
                                description={service.description}
                                image={service.image}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
