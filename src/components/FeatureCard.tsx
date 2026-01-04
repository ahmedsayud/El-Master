"use client";
import React from 'react';

interface FeatureCardProps {
    id: number;
    title: string;
    desc: string;
    icon: React.ReactNode;
    isActive: boolean;
    onClick: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
    title,
    desc,
    icon,
    isActive,
    onClick
}) => {
    return (
        <div
            onClick={onClick}
            className={`p-8 rounded-xl shadow-sm border transition-all cursor-pointer flex items-center justify-between group hover:translate-y-[-5px] ${isActive
                    ? "bg-[#0A0A0A] border-transparent shadow-lg"
                    : "bg-white border-gray-100"
                }`}
        >
            <div className={`p-3 ml-2 rounded-full transition-all ${isActive
                    ? "bg-white text-black"
                    : "bg-gray-100 text-gray-400"
                }`}>
                {icon}
            </div>
            <div className={isActive ? "text-white" : "text-[#141414]"}>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className={`text-sm leading-relaxed ${isActive ? "text-gray-400" : "text-gray-500"
                    }`}>
                    {desc}
                </p>
            </div>
        </div>
    );
};

export default FeatureCard;
