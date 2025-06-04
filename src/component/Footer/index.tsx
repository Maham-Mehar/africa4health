import { SlSocialFacebook } from "react-icons/sl";
import { IoLogoInstagram, IoIosSend } from "react-icons/io";
import type { FC } from "react";
import Image from "next/image";
import PngIcons from "@/Icons/pngIcons";

type FooterLinkSection = {
  title: string;
  links: string[];
};

const footerLinks: FooterLinkSection[] = [
  {
    title: "About",
    links: [ "Partners", "Impact"],
  },
  {
    title: "Initiatives",
    links: ["Healthcare Access", "Education", "Community Programs", "Research"],
  },
  {
    title: "Get Involved",
    links: ["Donate", "Volunteer", "Careers", "Contact Us"],
  },
];

const Footer: FC = () => {
  return (
    <div className="bg-[#621843] pt-9 pb-5">
      <div className="grid grid-cols-1 md:grid-cols-12 max-w-7xl mx-auto py-10">
        {/* Left Section */}
        <div className="md:col-span-7">
          <Image
            src={PngIcons.footerlogo}
            alt="Africa For Health Logo"
            width={228}
            height={140}
            className="mb-4 w-[280px] h-auto"
          />
          <p className="mb-4 text-white text-[24px] max-w-xs font-extrabold mt-[50px]">
            Improving Health Outcomes Across Africa
          </p>
          <div className="flex gap-4 mt-7">
            <SlSocialFacebook
              className="text-white text-[37px] cursor-pointer hover:text-[#F68E3F] transition"
              aria-label="Facebook"
            />
            <IoLogoInstagram
              className="text-white text-[45px] cursor-pointer hover:text-[#F68E3F] transition"
              aria-label="Instagram"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="md:col-span-5 flex flex-col ms-3">
          <p className="text-lg text-white font-semibold mb-5">Stay Updated</p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
            <div className="bg-[#814669] rounded-full pl-5 pr-3 flex items-center w-full max-w-sm">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="placeholder-gray-200 bg-transparent text-white font-poppins font-normal outline-none border-none w-full"
                aria-label="Enter your email"
              />
              <button
                className="p-2 flex justify-center items-center"
                aria-label="Send"
              >
                <IoIosSend className="text-white text-[24px]" />
              </button>
            </div>
            <button
              className="px-7 py-2 bg-white text-[#814669] text-base font-medium border border-gray-300 rounded-full"
              aria-label="Subscribe"
            >
              Subscribe
            </button>
          </div>

          {/* Footer Links Using map */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {footerLinks.map((section, index) => (
              <div key={index}>
                <p className="font-bold text-lg text-white mb-2">{section.title}</p>
                <ul className="text-gray-200 text-sm font-medium space-y-1">
                  {section.links.map((link, i) => (
                    <li key={i} className="cursor-pointer py-[7px] hover:underline">
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

        <footer className="w-full max-w-7xl flex justify-center mx-auto py-6 mt-4 border-t-2 border-[#A47F94] py-3 text-xs text-gray-400 flex flex-col sm:flex-row justify-between items-center sm:items-end gap-2 sm:gap-0">
          <p className="text-center font-medium text-sm text-gray-100 sm:text-left">© 2025 Africa for Health. All rights reserved.</p>
          
        </footer>
  

    </div>
  );
};

export default Footer;
