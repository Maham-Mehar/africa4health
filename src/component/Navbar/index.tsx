"use client";
import { useState } from "react";
import Link from "next/link";
import PngIcons from "@/Icons/pngIcons";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Initiatives", href: "/initiatives" },
  { label: "Ways to Give", href: "/givingways" },
  { label: "Get Involved", href: "/getinvolved" },
];
const Drawer = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const pathname = usePathname();
  return (
    <>
      <div
        className={`fixed inset-0 z-20 bg-black/30 transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={onClose}
      />
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-white z-30 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-6">
            <img src={PngIcons.logo} alt="logo" className="w-[105px] h-[40px]" />
            <button onClick={onClose} className="text-3xl text-gray-700 hover:text-red-500">
              &times;
            </button>
          </div>
          <ul className="space-y-4 text-[#333] font-medium">
            {navItems.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`text-base transition ${isActive
                        ? "text-[#621843] font-bold"
                        : "text-[#621843]/70 hover:text-[#621843]"
                      }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link href="/contact">
                <button className="bg-[#621843] text-white text-base font-bold px-5 py-2 rounded-full hover:bg-[#72122f] transition">
                  Contact Us
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto xl:px-0 lg:px-3 px-3 py-5 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img src={PngIcons.logo} alt="logo" className="w-[105px] h-[40px]" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex justify-center md:space-x-5 lg:space-x-7 xl:space-x-8 text-[#333]">
          {navItems.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`text-base transition ${isActive
                    ? "text-[#621843] font-bold"
                    : "text-[#621843]/70 hover:text-[#621843]"
                  }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
        {/* Contact Button */}
        <div className="hidden md:block">
          <Link href="/contact">
            <button className="bg-[#621843] text-white text-base font-bold px-5 py-2 rounded-full hover:bg-[#72122f] transition hover:cursor-pointer">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button onClick={() => setIsOpen(true)} className="md:hidden block">
          <svg className="w-6 h-6 text-[#333]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
};

export default Navbar;
