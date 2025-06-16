'use client';
import Link from "next/link";
import React from 'react';
import Slider from 'react-slick';
import { X } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PngIcons from '@/Icons/pngIcons';

const SaveLives = ({ onClose }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div
        style={{
          position: 'absolute',
          bottom: 3,
          width: '100%',
          zIndex: 10,
        }}
      >
        <ul className="flex justify-center gap-[2px]">{dots}</ul>
        <style>{`
          .slick-dots li.slick-active .dot {
            background-color: #F37021 !important;
          }
        `}</style>
      </div>
    ),
    customPaging: () => (
      <div className="dot w-2 h-2 bg-white rounded-full m-0"></div>
    ),
  };

  const imageSlides = [
    '/images/slide1.png',
    '/images/slide2.png',
    '/images/slide3.png',
    '/images/slide4.png',
  ];

  return (
    <div className="fixed top-20 inset-0 z-50 bg-transparent bg-opacity-50 flex justify-center items-center p-4 ">
      <div className="relative bg-white rounded-xl max-w-lg w-full shadow-lg overflow-hidden ">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1 rounded-full hover:bg-gray-100 transition text-white hover:text-black z-20"
          aria-label="Close popup"
        >
          <X size={24} />
        </button>

        {/* Image Slider with increased height */}
        <div className="relative h-62 w-full">
          <Slider {...sliderSettings}>
            {imageSlides.map((src, index) => (
              <div key={index}>
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-64 object-cover rounded-t-xl"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Static Content */}
        <div className="p-6">
          <div className="flex justify-start">
            <img
              src={PngIcons.logo}
              alt="Africa For Health"
              className="h-10 mb-3"
            />
          </div>
          <h2 className="text-[24px] font-bold mb-2">
            Double the Impact, Save More Lives!
          </h2>
          <p className="text-sm text-gray-700 font-normal mb-3">
            Your donation will be matched for a limited time, doubling its impact to fund
            research, education, prevention, and breakthroughs in heart disease and stroke.
          </p>
          <p className="text-base font-bold text-gray-900 mb-5">
            Double your impact—donate now and make a difference!
          </p>
          <div className='flex justify-center items-center'>
            <Link href="/donate">
            <button className="bg-[#50023F] text-white font-semibold text-[20px] px-10 py-2 rounded-full hover:bg-[#6c255e] transition">
              Donate Now
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveLives;
