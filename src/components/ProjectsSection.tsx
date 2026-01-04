"use client";
import React, { useState } from 'react';
import { staticData } from '@/data/static-data';
import Image from 'next/image';

const ProjectsSection = () => {
    const { projects } = staticData;
    const [activeCategory, setActiveCategory] = useState("جازان");

    const filteredProjects = projects.items.filter(project =>
        activeCategory === "الكل" ? true : project.category === activeCategory
    );

    // For the UI, we'll show the first project of the filtered list as the "featured" project
    const featuredProject = filteredProjects[0] || projects.items[0];

    return (
        <section className="bg-[#F7F6F6] py-16 px-6 md:px-12 lg:px-24" dir="rtl">
            <div className="container mx-auto">
                {/* Header with Tabs */}
                <div className="flex flex-col items-center mb-12">
                    <div className="bg-white/50 backdrop-blur-sm p-1.5 rounded-full border border-gray-200 flex flex-wrap justify-center gap-1 md:gap-4">
                        <span className="px-6 py-2.5 font-bold text-[#141414] border-l border-gray-200 ml-2 hidden md:block">
                            {projects.title}
                        </span>
                        {projects.categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${activeCategory === category
                                    ? "bg-[#141414] text-white shadow-md"
                                    : "text-gray-500 hover:text-[#141414] hover:bg-gray-100"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Featured Project Display */}
                {featuredProject && (
                    <div className=" rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row min-h-[500px]">
                        {/* Content Side */}
                        <div className="lg:w-1/2  md:p-16 flex flex-col items-start justify-center text-right">
                            {/* Logo and Location */}
                            <div className="flex flex-col items-start w-full mb-8">
                                <div className="relative w-20 h-20 mb-">
                                    <Image
                                        src={featuredProject.logo}
                                        alt="Mun Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                                    <span className="w-2 h-2 rounded-full bg-black"></span>
                                    {featuredProject.location}
                                </div>
                            </div>

                            <h3 className="text-3xl md:text-4xl font-extrabold text-[#141414] mb-6">
                                {featuredProject.title}
                            </h3>

                            <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-xl">
                                {featuredProject.description}
                            </p>

                            <button className="bg-[#0A0A0A] text-white px-10 py-4 rounded-xl hover:bg-black/90 transition-all flex items-center gap-3 group">
                                <span className="font-bold text-lg">{featuredProject.ctaText}</span>
                                <span className="text-2xl transition-transform group-hover:translate-x-[-5px]">»</span>
                            </button>
                        </div>

                        {/* Image Side */}
                        <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-full">
                            <Image
                                src={featuredProject.image}
                                alt={featuredProject.title}
                                fill
                                className="object-cover p-6 rounded-[3rem]"
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectsSection;
