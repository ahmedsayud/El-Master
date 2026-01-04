"use client";
import React from 'react';
import Image from 'next/image';

interface ServiceCardProps {
    title: string;
    description: string;
    image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image }) => {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col h-full group">
            {/* Image Section */}
            <div className="relative h-56 w-full overflow-hidden group-hover:h-72 transition-all duration-500 ease-in-out">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 "
                />
            </div>

            {/* Content Section */}
            <div className="p-6 text-right flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#141414] mb-3">
                    {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default ServiceCard;
