"use client"
import { useState } from "react";

function Page() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex flex-col md:flex-row min-h-screen relative">
            {/* Mobile Sidebar Toggle */}
            <button
                onClick={() => setSidebarOpen(true)}
                className="md:hidden p-2 m-2 bg-[#f70776] text-white rounded-lg"
            >
                Open Filters
            </button>

            {/* Sidebar Overlay (Click outside to close) */}
            {sidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar (Collapsible on Small Screens) */}
            <aside className={`fixed inset-y-0 left-0 bg-white shadow-md min-h-screen rounded-lg p-4 
                md:w-1/4 md:static md:block z-50 transition-transform duration-300 
                ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
                
                {/* Close Button */}
                <button 
                    onClick={() => setSidebarOpen(false)} 
                    className="md:hidden bg-[#f70776] text-white p-2 rounded-lg mb-4"
                >
                    Close Filters
                </button>

                <h2 className="text-xl font-semibold mb-4">Filters</h2>
                <div className="space-y-4">
                    {/* Location Filter */}
                    <div>
                        <h3 className="font-medium">Location</h3>
                        <select className="w-full border rounded p-2 focus:ring-[#f70776] bg-[#f70776] text-white">
                            <option className="text-white bg-[#f70776]" value="">Select Location</option>
                            <option className="text-white bg-[#f70776]" value="new-york">New York</option>
                            <option className="text-white bg-[#f70776]" value="los-angeles">Los Angeles</option>
                            <option className="text-white bg-[#f70776]" value="chicago">Chicago</option>
                        </select>
                    </div>

                    {/* Price Range Filter */}
                    <div>
                        <h3 className="font-medium">Price Range</h3>
                        <input type="range" min="500" max="5000" step="100" className="w-full accent-[#f70776]" />
                        <div className="flex justify-between text-sm text-gray-600">
                            <span>$500</span>
                            <span>$5000</span>
                        </div>
                    </div>

                    {/* Bedrooms (Radio Instead of Checkbox) */}
                    <div>
                        <h3 className="font-medium">Bedrooms</h3>
                        <div className="space-y-2">
                            <label className="flex items-center">
                                <input type="radio" name="bedrooms" value="1" className="mr-2 accent-[#f70776]" />
                                1 Bedroom
                            </label>
                            <label className="flex items-center">
                                <input type="radio" name="bedrooms" value="2" className="mr-2 accent-[#f70776]" />
                                2 Bedrooms
                            </label>
                            <label className="flex items-center">
                                <input type="radio" name="bedrooms" value="3+" className="mr-2 accent-[#f70776]" />
                                3+ Bedrooms
                            </label>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content (Responsive) */}
            <main className="flex-1 p-6 overflow-x-auto">
                {/* Search Bar */}
                <div className="w-full md:w-2/3 py-4 mx-auto">
                    <input
                        placeholder="Search Your Land"
                        className="w-full border-2 p-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#f70776] border-[#f70776]"
                    />
                </div>

                {/* Scrollable Content */}
                <div className="p-6 bg-white shadow-md rounded-lg min-w-[1200px]">
                    <h2 className="text-2xl font-semibold">Dashboard Content</h2>
                    <p className="text-gray-600">This is where the main content goes.</p>
                </div>
            </main>
        </div>
    );
}

export default Page;
