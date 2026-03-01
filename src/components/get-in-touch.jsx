"use client";

import React from 'react';
import { Phone, Mail, MapPin, FileText } from 'lucide-react';

const GetInTouch = () => {
  const goldenBtnStyle = `
    w-full md:flex-1 flex items-center justify-center gap-2 px-4 py-4 
    bg-[#c5a04d] text-black font-bold rounded-xl 
    transition-all duration-300 cursor-pointer
    hover:scale-105 hover:shadow-[0_0_25px_rgba(197,160,77,0.8)] 
    border-2 border-transparent hover:border-white/50 
    whitespace-nowrap text-sm md:text-base
  `;

  const whatsappBtnStyle = `
    w-full md:flex-1 flex items-center justify-center gap-2 px-4 py-4 
    bg-[#25D366] text-white font-bold rounded-xl 
    transition-all duration-300 cursor-pointer
    hover:scale-105 hover:shadow-[0_0_25px_rgba(37,211,102,0.8)] 
    border-2 border-transparent hover:border-white/50 
    whitespace-nowrap text-sm md:text-base
  `;

  return (
    <section id="contact" className="bg-[#121212] py-20 md:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-3xl md:text-6xl font-bold text-center mb-12 md:mb-20 uppercase tracking-tight">
          Get In <span className="text-[#c5a04d]">Touch</span>
        </h2>

        <div className="bg-[#0a0a0a] rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-white/5">
          
          <div className="lg:w-1/2 p-8 md:p-16 flex flex-col justify-center">
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-center md:text-left">
              Contact Sagar Das
            </h3>
            
            <div className="space-y-6 md:space-y-8 mb-10 md:mb-14">
              <div className="flex items-start gap-4 md:gap-5">
                <Phone className="text-[#c5a04d] mt-1 shrink-0 w-6 h-6 md:w-7 md:h-7" />
                <div className="text-gray-300 text-base md:text-xl font-medium">
                  <p>+91 98364 21193</p>
                  <p>+91 79803 83184</p>
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-5">
                <Mail className="text-[#c5a04d] shrink-0 w-6 h-6 md:w-7 md:h-7" />
                <p className="text-gray-300 text-base md:text-xl font-medium break-all">
                  sagardas811980@gmail.com
                </p>
              </div>

              <div className="flex items-start gap-4 md:gap-5">
                <MapPin className="text-[#c5a04d] mt-1 shrink-0 w-6 h-6 md:w-7 md:h-7" />
                <p className="text-gray-300 text-base md:text-xl font-medium">
                  Laketown, Kolkata, West Bengal
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 w-full">
              <button className={goldenBtnStyle}>
                <Phone className="w-5 h-5" /> Call Now
              </button>
              
              <button className={whatsappBtnStyle}>
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.414 0 12.05c0 2.123.55 4.197 1.594 6.02l-1.694 6.185 6.33-1.661a11.81 11.81 0 005.815 1.521h.005c6.637 0 12.05-5.413 12.05-12.05a11.829 11.829 0 00-3.414-8.513z" />
                </svg>
                WhatsApp
              </button>

              <button className={goldenBtnStyle}>
                <FileText className="w-5 h-5" /> Get Quote
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 h-87.5 md:h-auto min-h-100 p-4 md:p-12">
            <div className="w-full h-full rounded-[25px] md:rounded-[30px] overflow-hidden border-2 border-[#c5a04d]/40 shadow-[0_0_40px_rgba(197,160,77,0.3)]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14732.148408466102!2d88.3912190871582!3d22.615065000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89de4d0e9a685%3A0x6b7c3d790d56b681!2sLake%20Town%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1709400000000!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;