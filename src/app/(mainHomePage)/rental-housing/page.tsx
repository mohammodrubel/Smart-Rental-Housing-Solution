/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { getAllLandlord, getAllLandlordLocation } from "@/app/api/landlords";
import Card from "@/components/Card";
import Container from "@/components/Container";
import { LandData } from "@/types";
import { useEffect, useState } from "react";

interface MetaData {
    total: number;
    limit: number;
    page: number;
}

function Page() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [landlords, setLandlords] = useState<LandData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");
    const [location, setLocation] = useState<LandData[]>([]);
    const [selectLocation, setSelectLocation] = useState("");
    const [priceRange, setPriceRange] = useState("");
    const [bedroom, setBedroom] = useState("");
    const [pageNumber, setPageNumber] = useState(0);
    const [meta, setMeta] = useState<MetaData>({ total: 0, limit: 1, page: 1 });
    const [limit, setLimit] = useState(10);

    const updatePageNumber = (num: number) => {
        if (num < 0 || num >= meta.page) return;
        setPageNumber(num);
    };

    // Function to clear all filters
    const clearFilters = () => {
        setSearch("");
        setSelectLocation("");
        setPriceRange("");
        setBedroom("");
        setPageNumber(0); // Optionally reset pagination
    };

    useEffect(() => {
        const fetchLandlords = async () => {
            try {
                setLoading(true);
                const result = await getAllLandlord([
                    { name: "search", value: search },
                    { name: "rental_house_location", value: selectLocation },
                    { name: "priceRange", value: priceRange },
                    { name: "number_of_bedrooms", value: bedroom },
                    { name: "limit", value: limit },
                    { name: "page", value: pageNumber + 1 }
                ]);
                setLandlords(result.data.data);
                setMeta(result.data.meta);
            } catch (err) {
                setError("Failed to load data.");
            } finally {
                setLoading(false);
            }
        };

        fetchLandlords();
    }, [search, selectLocation, bedroom, priceRange, limit, pageNumber]);

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const result = await getAllLandlordLocation();
                setLocation(result.data.data);
            } catch (err) {
                setError("Failed to load locations.");
            }
        };

        fetchLocations();
    }, []);

    const maximumPrice = location.length ? Math.max(...location.map(item => item.rent_amount)) : 5000;

    return (
        <div className="container mx-auto">
            <div className="flex flex-col sm:flex-row min-h-screen relative">
                <button
                    onClick={() => setSidebarOpen(true)}
                    className="sm:hidden p-2 m-2 bg-[#07588a] text-white rounded-lg"
                >
                    Open Filters
                </button>

                {sidebarOpen && (
                    <div className="fixed inset-0 bg-black opacity-50 z-40 md:hidden" onClick={() => setSidebarOpen(false)} />
                )}

                <aside
                    className={`fixed inset-y-0 left-0 bg-white shadow-md min-h-screen rounded-lg p-4 
                md:w-1/7 md:static md:block z-50 transition-transform duration-300 
                ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
                >
                    <button onClick={() => setSidebarOpen(false)} className="md:hidden bg-[#07588a] text-white p-2 rounded-lg mb-4">
                        Close Filters
                    </button>

                    <h2 className="text-xl font-semibold mb-4">Filters</h2>

                    {/* Clear Filters Button */}
                    <button
                        onClick={clearFilters}
                        className="w-full bg-red-500 text-white p-2 rounded-lg mb-4 hover:bg-red-600 transition-colors"
                    >
                        Clear Filters
                    </button>

                    <div className="space-y-4">
                        {/* Location Filter */}
                        <div>
                            <h3 className="font-medium">Location</h3>
                            <select
                                onChange={(e) => setSelectLocation(e.target.value)}
                                value={selectLocation}
                                className="w-full border rounded p-2 focus:ring-[#07588a] bg-[#07588a] text-white"
                            >
                                <option value="">Select Location</option>
                                {location.map((item, index) => (
                                    <option key={index} value={item.rental_house_location}>
                                        {item.rental_house_location}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Price Range Filter */}
                        <div>
                            <h3 className="font-medium">Price Range</h3>
                            <input
                                type="range"
                                min="0"
                                max={maximumPrice}
                                value={priceRange.split(",")[1] || "0"}
                                onChange={(e) => setPriceRange(`0,${e.target.value}`)}
                                className="w-full accent-[#07588a]"
                            />
                            <div className="flex justify-between text-sm text-gray-600">
                                <span>$0</span>
                                <span>${priceRange.split(",")[1] || "0"}</span>
                            </div>
                        </div>

                        {/* Bedrooms Filter */}
                        <div>
                            <h3 className="font-medium">Bedrooms</h3>
                            <div className="space-y-2">
                                {[
                                    ...new Set(location.map((item) => item.number_of_bedrooms)),
                                ].map((bedroom) => (
                                    <label key={bedroom} className="flex items-center space-x-2">
                                        <input
                                            onChange={(e) => setBedroom(e.target.value)}
                                            type="radio"
                                            name="number_of_bedrooms"
                                            value={bedroom}
                                            checked={bedroom === bedroom}
                                            className="form-radio"
                                        />
                                        <span>{bedroom} Bedrooms</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-6 overflow-x-auto">
                    <div className="w-full md:w-3/4 py-4 mx-auto">
                        <input
                            onChange={(e) => setSearch(e.target.value)}
                            value={search}
                            placeholder="Search Your Land"
                            className="w-full border-2 p-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#07588a] border-[#07588a]"
                        />
                    </div>

                    {/* Content Display */}
                    <div className="grid mx-auto items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                        {loading ? (
                            <p>Loading...</p>
                        ) : error ? (
                            <p className="text-red-500">{error}</p>
                        ) : (
                            landlords.map((item) => <Card key={item._id} cardItem={item} />)
                        )}
                    </div>
                </main>
            </div>
            <div className="text-center py-10">
                <div className='flex select-none justify-center items-center gap-5 '>
                    {/* left arrow */}
                    <div onClick={() => updatePageNumber(pageNumber - 1)} className='hover:scale-110 scale-100 transition-all duration-200 cursor-pointer hover:bg-zinc-200 px-1 py-1 rounded-full'>
                        <svg className='w-10' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M15 7L10 12L15 17" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </g></svg>
                    </div>
                    <div className='flex justify-center items-center gap-2 '>
                    {[...Array(Math.ceil(meta.total / meta.limit))].map((_, index) => {
                            return (
                                <div
                                    onClick={() => setPageNumber(index )}
                                    className={`cursor-pointer hover:scale-110 scale-100 transition-all duration-200 px-5 ${pageNumber === index  ? 'bg-[#07588a] text-white' : 'bg-white'
                                        } border-zinc-300 font-semibold text-gray-700 py-3 rounded-full`}
                                    key={index}
                                >
                                    {index + 1}
                                </div>
                            )
                        })}
                    </div>
                    {/* right arrow */}
                    <div onClick={() => updatePageNumber(pageNumber + 1)} className='bg-gray-200 hover:scale-110 scale-100 transition-all duration-200 cursor-pointer hover:bg-zinc-100 px-4 py-4 rounded-full'>
                        <svg className='w-4' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z" fill="#000000" /> </g></svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;