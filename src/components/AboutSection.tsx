"use client";
import React, { useState } from 'react';
import { staticData } from '@/data/static-data';
import Image from 'next/image';
import FeatureCard from './FeatureCard';

const AboutSection = () => {
    const { about } = staticData;
    const [activeCard, setActiveCard] = useState(1);
    return (
        <section className="bg-[#F7F6F6] py-20 px-6 md:px-12 lg:px-24" dir="rtl">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-center mb-16">
                    {/* Right: Text Section */}
                    <div className="lg:w-1/2 flex flex-col items-start text-right">
                        <span className="bg-black/30 text-black px-4 py-2 rounded-lg text-lg mb-4">{about.subtitle}</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-[#141414] mb-6 leading-tight">
                            {about.title}
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            {about.description}
                        </p>
                        <button className="bg-[#0A0A0A] text-white px-10 py-3 rounded-lg hover:bg-black/80 transition-all flex items-center gap-2">
                            <span>{about.ctaButton}</span>
                            <span className="text-xl">»</span>
                        </button>
                    </div>


                    {/* Left: Image Section */}
                    <div className="lg:w-1/2 relative h-[400px] md:h-[500px]">
                        {/* Decorative background border (behind) */}
                        <div className="absolute top-0 left-0 w-[50%] h-[50%] border-[3px] border-[#141414] rounded-sm"></div>

                        {/* Main Image Layer (above) */}
                        <div className="absolute top-5 left-5 w-[85%] h-[85%] rounded-lg overflow-hidden shadow-xl z-10">
                            <Image
                                src="/images/Frame 8.svg"
                                alt="About Main"
                                fill
                                className="object-cover"
                            />
                        </div>


                    </div>

                </div>

                {/* Bottom Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {about.features.map((card) => (
                        <FeatureCard
                            key={card.id}
                            id={card.id}
                            title={card.title}
                            desc={card.desc}
                            icon={card.icon}
                            isActive={activeCard === card.id}
                            onClick={() => setActiveCard(card.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
