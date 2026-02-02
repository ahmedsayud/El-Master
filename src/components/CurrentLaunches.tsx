"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { staticData } from '@/data/static-data';
import { MapPin, Globe } from 'lucide-react'; // Using lucide-react for icons as seen in Hero

const ProjectCard = ({ project, index, total }: { project: any, index: number, total: number }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Fade In on entry, Fade Out on exit (Cross-fade effect)
    const opacity = useTransform(
        scrollYProgress,
        [0, 0.35, 0.5, 0.65, 1],
        [0, 1, 1, 1, 0]
    );

    const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.85, 1, 1, 0.85]);
    const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], ["20%", "0%", "0%", "-20%"]);

    return (
        <div ref={ref} className="sticky top-[100px] h-[calc(100vh-100px)] flex items-center justify-center overflow-hidden">
            <motion.div
                style={{ opacity }}
                className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12 h-[85%] items-center relative"
            >

                {/* Main Card Container */}
                <div className="w-full h-full bg-white rounded-[3rem] flex overflow-hidden relative">

                    {/* Left Content */}
                    <div className="w-full md:w-[45%] flex flex-col justify-center space-y-3 md:space-y-3 pl-10 pr-6 py-6 relative z-10">
                        {/* Header: Logo or Title */}
                        <div>
                            {project.logo ? (
                                <Image
                                    src={project.logo}
                                    alt={`${project.title} Logo`}
                                    width={140}
                                    height={70}
                                    className="object-contain h-16 w-auto"
                                />
                            ) : (
                                <h3 className="text-3xl font-serif text-black uppercase tracking-widest">{project.title}</h3>
                            )}
                        </div>

                        {/* Badge / Location */}
                        <div className="flex items-center gap-2 text-black/60 text-xs font-semibold uppercase tracking-wider">
                            <MapPin size={16} className="text-black" />
                            <span>{project.location}</span>
                        </div>

                        {/* Title (Big) */}
                        <h2 className="text-4xl md:text-5xl font-medium text-black font-suisse tracking-tight">
                            {project.title}
                        </h2>

                        {/* Description */}
                        <p className="text-gray-500 leading-relaxed max-w-sm text-xs font-normal">
                            {project.description}
                        </p>

                        {/* Details Grid */}
                        <div className="flex gap-8 border-l border-gray-200 pl-5 py-1">
                            <div>
                                <span className="block text-[9px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">Payment plan</span>
                                <span className="text-base font-medium text-black">{project.paymentPlan}</span>
                            </div>
                            <div>
                                <span className="block text-[9px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">Starting Price</span>
                                <span className="text-base font-medium text-black">{project.startingPrice}</span>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-3 pt-4">
                            <button className="px-8 py-3 bg-black text-white text-[9px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-gray-800 transition-colors shadow-lg shadow-black/20">
                                Learn More
                            </button>
                            <button className="px-8 py-3 bg-transparent border border-gray-300 text-black text-[9px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-black hover:text-white transition-colors">
                                Enquire Now
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="w-full md:w-[55%] h-full relative">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* SCROLL Indicator */}
                <div className="absolute right-2 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4">
                    <span className="text-[10px] font-bold tracking-[0.3em] text-black -rotate-90 origin-center whitespace-nowrap">SCROLL</span>
                    <div className="h-12 w-[1px] bg-black/20"></div>
                </div>
            </motion.div>
        </div>
    );
};

const CurrentLaunches = () => {
    const { launches } = staticData;

    return (
        <section className="relative bg-[#FAFAFA] text-black font-suisse" dir="ltr">
            {/* Header / Titles Section - Sticky but outside the card stack */}
            <div className="sticky top-0 z-50 bg-[#FAFAFA] w-full pt-5">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="relative flex flex-col md:flex-row items-center justify-center border-b border-black/5 pb-8 min-h-[120px]">
                        <div className="md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 self-start md:self-auto mb-6 md:mb-0">
                            <h2 className="text-[23px] font-normal tracking-tight text-black leading-tight">
                                Current
                                <br />
                                Launches
                            </h2>
                        </div>

                        <div className="z-10">
                            <div className="inline-flex items-center rounded-full border border-gray-300 px-6 py-3 bg-white/50 backdrop-blur-sm">
                                {["LATEST", "RESIDENTIAL", "COMMERCIAL", "COASTAL", "FLAGSHIP"].map((cat, i) => (
                                    <button
                                        key={i}
                                        className={`px-4 text-[11px] font-bold tracking-[0.15em] transition-colors ${i === 0 ? 'text-black' : 'text-gray-400 hover:text-gray-600'
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Container */}
            <div className="relative ">
                {launches?.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                        total={launches.length}
                    />
                ))}
            </div>
        </section>
    );
};

export default CurrentLaunches;
