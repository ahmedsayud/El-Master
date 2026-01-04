"use client";

import React from 'react';
import { staticData } from "@/data/static-data";
import Image from 'next/image';
import { FiSearch, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { HiMenuAlt3 } from 'react-icons/hi';
const Header = () => {
    return (
        <header className="sticky top-0 w-full text-white z-50 h-[80px]" dir="rtl">
            <div className="w-11/12 mx-auto h-full flex items-center justify-between">               {/* القسم الأيمن: اللوجو والنص */}
                <div className="flex items-center gap-3">
                    <Image src="/images/logo.svg" alt="Logo" width={100} height={100} />
                </div>

                {/* القسم الأوسط: الروابط الرئيسية */}
                <nav className="flex items-center justify-between gap-8 border border-gray-200 px-8 py-2 rounded-full">
                    {staticData.header.navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className=" hover:text-indigo-600 font-medium transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* القسم الأيسر: الأيقونات */}
                <div className="flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-full">

                    {/* أيقونة القائمة (Menu) */}
                    <button className="p-1 hover:text-indigo-600 transition">
                        <HiMenuAlt3 size={24} />
                    </button>

                    {/* الحاجز (الفاصل) */}
                    <div className="h-6 w-[1px] bg-gray-300 mx-2"></div>

                    {/* أيقونات البحث والتواصل */}
                    <div className="flex items-center gap-3">
                        <button className="p-1 hover:text-indigo-600 transition">
                            <FiSearch size={20} />
                        </button>
                        <button className="p-1 hover:text-green-500 transition">
                            <FaWhatsapp size={20} />
                        </button>
                        <button className="p-1 hover:text-indigo-600 transition">
                            <FiMail size={20} />
                        </button>
                    </div>

                </div>

            </div>
        </header>
    );
};

export default Header;
