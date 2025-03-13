"use client";

import { useState } from "react";
import Link from "next/link";
import CustomLink from "./CustomLink";
import Information from "./Information";

function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="bg-[#07588a] z-[1000] sticky top-0">
            <div className="container mx-auto px-4">
                <nav className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div className="text-[25px] font-bold text-white">
                        <Link href="/">CityStay</Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-white text-2xl"
                    >
                        <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
                    </button>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex gap-5 items-center">
                        <ul className="flex gap-5">
                            <li><CustomLink className="text-white font-semibold" href="/">Home</CustomLink></li>
                            <li><CustomLink className="text-white font-semibold" href="/about">About Us</CustomLink></li>
                            <li><CustomLink className="text-white font-semibold" href="/rental-housing">Rental Housing</CustomLink></li>
                        </ul>

                        {/* Additional Information Component */}
                        <div className="mt-4 md:mt-0">
                            <Information />
                        </div>
                    </div>

                    {/* Mobile Navigation Links */}
                    <div
                        className={`absolute top-16 left-0 w-full bg-[#07588a] md:hidden transition-all duration-500 ease-in-out
                        ${menuOpen ? "max-h-screen opacity-100 translate-y-0" : "max-h-0 opacity-0 translate-y-5 overflow-hidden"}`}
                    >
                        <ul className="flex flex-col gap-5 p-5">
                            <li><CustomLink className="text-white font-semibold" href="/">Home</CustomLink></li>
                            <li><CustomLink className="text-white font-semibold" href="/about">About Us</CustomLink></li>
                            <li><CustomLink className="text-white font-semibold" href="/rental-housing">Rental Housing</CustomLink></li>
                        </ul>

                        {/* Additional Information Component */}
                        <div className="mt-4">
                            <Information />
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navigation;
