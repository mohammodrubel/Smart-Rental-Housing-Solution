"use client"
import { ReactNode, useState } from 'react';

const LandlordsLayout = ({ children }:{children:ReactNode}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className={`bg-[#f70776] text-white w-64 space-y-6 p-6 ${isSidebarOpen ? 'block' : 'hidden'} md:block`}>
        <div className="text-2xl font-semibold">Dashboard</div>
        <nav className="space-y-4">
          <a href="#" className="block text-white font-extrabold text">Home</a> 
          <a href="#" className="block text-white font-extrabold text">Users</a> 
          <a href="#" className="block text-white font-extrabold text">Profile</a> 
          <a href="#" className="block text-white font-extrabold text">Logout</a> 
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <div className="bg-[#f70776] p-4 shadow-md flex items-center justify-between">
          <button className="md:hidden  text-gray-800" onClick={toggleSidebar}>
            <i className="fas fa-bars"></i>
          </button>
          <div className="text-xl font-semibold">Welcome To Tenants Dashboard</div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6 flex-1">
          {children}
        </div>
      </div>
    </div>
  );
};

export default LandlordsLayout;
