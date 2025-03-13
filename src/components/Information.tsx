"use client";
import { logout } from "@/app/api/auth";
import { useUser } from "@/context/userContext";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function FadeLeftDropDown() {
    const { user, setIsLoading } = useUser();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        console.log("User Data:", user); // Debugging user data
    }, [user,setIsLoading]);

    const handleLogout = () => {
        setIsLoading(true);
        logout();
        setOpen(false);
    };

    return (
        <div className="relative mx-auto w-fit text-white">
            {/* User Icon */}
            <i
                onClick={() => setOpen((prev) => !prev)}
                className="fa-solid fa-user cursor-pointer text-2xl p-2"
            ></i>

            {/* Dropdown Menu */}
            {open && (
                <ul className="absolute right-0 top-12 z-50 w-40 rounded-md bg-white shadow-lg transition-all duration-300 ease-in-out">
                    {user && user.id ? (
                        <>
                            <li 
                                onClick={handleLogout} 
                                className="cursor-pointer p-2 text-black hover:bg-gray-200"
                            >
                                Logout
                            </li>
                            <li className="p-2 text-black hover:bg-gray-200">
                                <Link href="/dashboard">Dashboard</Link>
                            </li>
                        </>
                    ) : (
                        <li className="p-2 text-black hover:bg-gray-200">
                            <Link href="/login">Login</Link>
                        </li>
                    )}
                </ul>
            )}
        </div>
    );
}
