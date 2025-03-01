import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { navItems } from "../constant/Navitems";
import Dropdown from "./Dropdown";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg
                width="76"
                height="40"
                viewBox="0 0 76 65"
                className="h-8 w-8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#FFFFFF" />
              </svg>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <div className="relative group flex">
                  {navItems.map((item, index) => (
                    <div
                      key={index}
                      className="relative group"
                      onMouseEnter={() => setOpenDropdownIndex(index)}
                      onMouseLeave={() => setOpenDropdownIndex(null)}
                    >
                      <a
                        href="#_"
                        className="gap-5 mx-1 px-2 py-1 rounded-md text-sm font-medium flex items-center justify-center leading-6 text-gray-600 whitespace-no-wrap hover:rounded-full hover:bg-gray-100 focus:outline-none focus:shadow-none"
                      >
                        {item.navTitle || item}{" "}
                        {item.navTitle ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          ""
                        )}
                      </a>
                      {item.navTitle && openDropdownIndex === index && (
                        <div className="absolute left-0 mt-2">
                          <Dropdown content={item.navContents} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <a
                href="#"
                className="text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Log in
              </a>
              <a
                href="#"
                className="button-primary ml-4 px-4 py-2 rounded-md text-sm font-medium"
              >
                Sign Up
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-vercel-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Features
            </a>
            <a
              href="#"
              className="text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Templates
            </a>
            <a
              href="#"
              className="text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Enterprise
            </a>
            <a
              href="#"
              className="text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Resources
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-vercel-gray-700">
            <div className="px-2 space-y-1">
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-white"
              >
                Log in
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium button-primary"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;