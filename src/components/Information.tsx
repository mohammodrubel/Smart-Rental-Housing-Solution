"use client";
import { logout } from "@/app/api/auth";
import { useUser } from "@/context/userContext";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function FadeLeftDropDown() {
    const { user, setIsLoading } = useUser();
    const [open, setOpen] = useState(false);
    const dropDownRef = useRef<HTMLDivElement>(null);

    const handleLogout = () => {
        setIsLoading(true);
        logout();
    };

    useEffect(() => {
        const close = (e: MouseEvent) => {
            if (dropDownRef.current && !dropDownRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", close);
        return () => document.removeEventListener("mousedown", close);
    }, []);

    return (
        <div ref={dropDownRef} className="relative mx-auto w-fit text-white">
            {/* User Icon */}
            <i 
                onClick={() => setOpen((prev) => !prev)} 
                className="fa-solid fa-user cursor-pointer text-2xl p-2"
            ></i>

            {/* Dropdown Menu */}
            <ul
                className={`absolute right-0 top-12 z-50 w-40 rounded-md bg-white shadow-lg transition-all duration-300 ease-in-out ${
                    open ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
                }`}
            >
                {user ? (
                    <li
                        onClick={handleLogout}
                        className="cursor-pointer p-2 text-black hover:bg-gray-200"
                    >
                        Logout
                    </li>
                ) : (
                    <li className="p-2 text-black hover:bg-gray-200">
                        <Link href="/login">Login</Link>
                    </li>
                )}
            </ul>
        </div>
    );
}
