import { useState, useRef, useEffect } from "react"
import { logout } from "@/app/api/auth"
import { useUser } from "@/context/userContext"
import CustomLink from "./CustomLink"

function Information() {
    const { user, setIsLoading } = useUser()
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)
    const handleLogout = () => {
        setIsLoading(true)
        logout()
    }

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    return (
        <div className="relative" ref={dropdownRef}>
            {/* User Icon Click to Toggle Dropdown */}
            <i
                className="text-white fa-solid fa-circle-user cursor-pointer text-[24px]"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            ></i>

            {/* Dropdown */}
            {isDropdownOpen && (
                <div className="absolute top-10 right-0 bg-white   px-5 py-1 rounded-md shadow-lg">
                    {user ? (
                        <span onClick={handleLogout}>
                            <CustomLink className="text-gray-900 text-[20px]" href="/">
                                Logout
                            </CustomLink>
                        </span>
                    ) : (
                        <CustomLink className="text-gray-900 text-[22px]" href="/login">
                            Login
                        </CustomLink>
                    )}
                </div>
            )}
        </div>
    )
}

export default Information
