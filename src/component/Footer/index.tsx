import { SlSocialFacebook } from "react-icons/sl";
import { IoLogoInstagram, IoIosSend } from "react-icons/io";
import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import PngIcons from "@/Icons/pngIcons";

type FooterLinkSection = {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
};

const footerLinks: FooterLinkSection[] = [
  {
    title: "About",
    links: [
      { label: "Partners", href: "/contact" },
      { label: "Impact", href: "/about" },
    ],
  },
  {
    title: "Initiatives",
    links: [
      { label: "Women’s Health", href: "/womenscare" },
      { label: "Men’s Health", href: "/menhealth" },
      { label: "Children’s  Health", href: "/childscare" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { label: "Donate", href: "/donate" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

const Footer: FC = () => {
  return (
    <div className="bg-[#621843] pt-10 pb-6 px-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-x-12">
          {/* Left Section */}
          <div className="md:col-span-7 flex flex-col items-start">
            {/* Responsive Logo */}
            <Image
              src={PngIcons.footerlogo}
              alt="Africa For Health Logo"
              width={228}
              height={140}
              className="mb-4 w-[180px] sm:w-[220px] md:w-[260px] h-auto"
            />

            {/* Responsive Text */}
            <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold mt-4 sm:mt-6 max-w-xs sm:max-w-sm">
              Improving Health Outcomes Across Africa
            </p>

            {/* Responsive Social Icons */}
            <div className="flex gap-4 mt-5 sm:mt-6">
              <SlSocialFacebook
                className="text-white text-[24px] sm:text-[30px] md:text-[34px] cursor-pointer hover:text-[#F68E3F] transition"
                aria-label="Facebook"
              />
              <IoLogoInstagram
                className="text-white text-[28px] sm:text-[36px] md:text-[40px] cursor-pointer hover:text-[#F68E3F] transition"
                aria-label="Instagram"
              />
            </div>
          </div>


          {/* Right Section */}
          <div className="md:col-span-5">
            <p className="text-lg text-white font-semibold mb-5">Stay Updated</p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
              <div className="bg-[#814669] rounded-full px-4 py-2 flex items-center w-full sm:max-w-xs">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="placeholder-gray-200 bg-transparent text-white font-normal outline-none border-none w-full text-sm sm:text-base"
                  aria-label="Enter your email"
                />
                <button className="p-2" aria-label="Send">
                  <IoIosSend className="text-white text-xl" />
                </button>
              </div>
              <button
                className="px-6 py-2 bg-white text-[#814669] text-sm sm:text-base font-medium border border-gray-300 rounded-full w-full sm:w-auto"
                aria-label="Subscribe"
              >
                Subscribe
              </button>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-6">
              {footerLinks.map((section, index) => (
                <div key={index} className="lg:text-left text-center">
                  <p className="font-bold text-lg text-white mb-2">{section.title}</p>
                  <ul className="text-gray-200 text-sm font-medium space-y-1">
                    {section.links.map((link, i) => (
                      <li key={i} className="cursor-pointer py-[6px] hover:underline">
                        <Link href={link.href}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <footer className="border-t border-[#A47F94] mt-10 pt-6 flex flex-col sm:flex-row justify-center items-center text-center text-sm text-gray-300 gap-2 sm:gap-0">
          <p>© 2025 Africa for Health. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
