"use client";
import React from 'react';
import { staticData } from '@/data/static-data';
import Image from 'next/image';
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaWhatsapp,
    FaChevronRight,
    FaMapMarkerAlt,
    FaEnvelope,
    FaPhoneAlt,
    FaArrowLeft
} from 'react-icons/fa';

const Footer = () => {
    const { footer } = staticData;

    return (
        <footer className="bg-[#0A0A0A] text-white pt-20 pb-10 px-6 md:px-12 lg:px-24" dir="rtl">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

                    {/* Column 1: Logo & Description */}
                    <div className="flex flex-col items-start text-right">
                        <div className="relative w-32 h-16 mb-8 brightness-0 invert">
                            <Image
                                src="/images/iRACe50G_400x400 1.svg"
                                alt="Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
                            {footer.description}
                        </p>
                        <a href="#" className="text-gray-400 hover:text-white transition-all text-sm font-bold flex items-center gap-2 mb-8 border-b border-gray-800 pb-1">
                            {footer.socials && "المزيد عنا"} <FaChevronRight className="text-[10px]" />
                        </a>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                                <FaFacebookF size={14} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                                <FaInstagram size={14} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                                <FaLinkedinIn size={14} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                                <FaWhatsapp size={14} />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="flex flex-col items-start text-right">
                        <h3 className="text-xl font-bold mb-8">روابط سريعة</h3>
                        <ul className="space-y-4">
                            {footer.quickLinks.map((link, idx) => (
                                <li key={idx}>
                                    <a href={link.href} className="text-gray-400 hover:text-white transition-all text-sm flex items-center gap-2 group">
                                        <FaChevronRight className="text-[10px] transition-transform group-hover:translate-x-[-4px]" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Projects */}
                    <div className="flex flex-col items-start text-right">
                        <h3 className="text-xl font-bold mb-8">مشاريعنا</h3>
                        <ul className="space-y-4">
                            {footer.projects.map((link, idx) => (
                                <li key={idx}>
                                    <a href={link.href} className="text-gray-400 hover:text-white transition-all text-sm flex items-center gap-2 group">
                                        <FaChevronRight className="text-[10px] transition-transform group-hover:translate-x-[-4px]" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div className="flex flex-col items-start text-right">
                        <h3 className="text-xl font-bold mb-8">تواصل معنا</h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                                    <FaMapMarkerAlt className="text-gray-400" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-gray-400 text-sm whitespace-pre-line">{footer.contactInfo.address}</p>
                                    <a href="#" className="text-white text-xs mt-2 underline font-bold">الحصول على الاتجاهات</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                                    <FaEnvelope className="text-gray-400" />
                                </div>
                                <a href={`mailto:${footer.contactInfo.email}`} className="text-gray-400 hover:text-white transition-all text-sm">
                                    {footer.contactInfo.email}
                                </a>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                                    <FaPhoneAlt className="text-gray-400" />
                                </div>
                                <a href={`tel:${footer.contactInfo.phone}`} className="text-gray-400 hover:text-white transition-all text-sm dir-ltr text-right">
                                    {footer.contactInfo.phone}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Newsletter & Copyright Bottom Area */}
                <div className="border-t border-gray-900 pt-12 flex flex-col lg:flex-row justify-between items-center gap-8">
                    {/* Newsletter Container */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start text-right">
                        <h4 className="text-sm font-bold mb-4">{footer.newsletterTitle}</h4>
                        <div className="w-full max-w-md relative flex items-center">
                            <input
                                type="email"
                                placeholder={footer.newsletterPlaceholder}
                                className="w-full bg-white rounded-full py-3.5 px-8 text-black text-sm outline-none pr-10"
                            />
                            <button className="absolute left-1.5 bg-black text-white w-11 h-11 rounded-full flex items-center justify-center hover:bg-gray-800 transition-all">
                                <FaArrowLeft size={16} />
                            </button>
                        </div>
                        <p className="text-[10px] text-gray-500 mt-3">سيتم الحفاظ على سرية عنوان بريدك الإلكتروني ولن يتم استخدامه إلا لإرسال النشرة الإخبارية أو الرد على أي استفسارات.</p>
                    </div>

                    {/* Copyright Section */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end text-center lg:text-right">
                        <p className="text-xs text-gray-500 leading-relaxed">
                            {footer.copyright}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
