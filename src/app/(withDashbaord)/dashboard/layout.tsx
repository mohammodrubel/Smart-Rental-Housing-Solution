"use client";
import { logout } from "@/app/api/auth";
import { IuserProviderValueTyps, useUser } from "@/context/userContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";
import { dashbordAdminMenu, landlordsMenu, tenantsMenu } from "../../../components/DashboardManu/DashboardManu";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { user, setIsLoading } = useUser() as IuserProviderValueTyps;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    setIsLoading(true);
    logout();
    setIsLoading(false);
    router.push("/login");
  };

  // Determine menu based on user role
  const getMenu = () => {
    switch (user?.role as string) {
      case "Admin":
        return dashbordAdminMenu;
      case "Landlord":
        return landlordsMenu;
      case "Tenant":
        return tenantsMenu;
      default:
        return [];
    }
  };

  const menuItems = getMenu();

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-[#f70776] text-white w-64 p-6 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-64"
        } transition-transform md:relative md:translate-x-0 md:flex md:flex-col`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center md:hidden">
          <span className="text-2xl font-semibold">Dashboard</span>
          <button className="text-white" onClick={toggleSidebar}>
            ✖
          </button>
        </div>

        <div className="hidden md:block text-2xl font-semibold mb-4">Dashboard</div>

        {/* Sidebar Menu */}
        <nav className="space-y-4">
          {menuItems.map((item, index) => (
            <Link key={index} href={item.path} className="block p-2 hover:bg-[#d6065a] rounded">
              {item.text}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <div className="bg-[#f70776] p-4 text-white flex items-center justify-between md:px-6">
          <button className="md:hidden" onClick={toggleSidebar}>
            <i className="fas fa-bars text-xl"></i>
          </button>
          <h2 className="text-xl font-semibold">Dashboard</h2>
          <h3 className="font-bold cursor-pointer" onClick={handleLogout}>
            Logout
          </h3>
        </div>

        {/* Dashboard Content */}
        <div className="p-6 overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
