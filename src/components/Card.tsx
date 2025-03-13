"use client";
import { createNewRequest } from "@/app/api/requests";
import { useUser } from "@/context/userContext";
import { LandData } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { toast, Toaster } from "sonner";
import "../style/Card.css";
export type formDataType = {
    landlord_phone_number: string;
    tenant_message: string;
    tenant_ID: string | undefined;
    rental_house_listing_ID: string;
}
const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 1, dots: true } },
        { breakpoint: 600, settings: { slidesToShow: 1 } },
        { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
};

const Card = ({ cardItem }: { cardItem: LandData }) => {
    const [openModal, setOpenModal] = useState(false);
    const [landlordPhoneNumber, setLandlordPhoneNumber] = useState('');
    const [tenantMessage, setTenantMessage] = useState("");
    const user = useUser();

    const handleInterested = () => {
        if (!user?.user) {
            toast.error("Please log in to express interest.");
            return;
        }
        setOpenModal(true);
    };

    const handleSubmit = async () => {
        if (!tenantMessage.trim()) {
            toast.error("Please enter a message.");
            return;
        }

        const formData = {
            landlord_phone_number: landlordPhoneNumber,
            tenant_message: tenantMessage,
            tenant_ID: user?.user?.id,
            rental_house_listing_ID: cardItem?._id,
        };

        try {
            const response = await createNewRequest(formData);
            if(response?.status){
                toast.success(response?.message)
            }
            if(!response?.status){
                toast.message(response?.message)
            }
            setTenantMessage(""); 
            setLandlordPhoneNumber("")
            setOpenModal(false);
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong. Please try again.");
        }
    };


    return (
        <div className="shadow-lg p-4 bg-white rounded-lg">
            {/* Image Slider */}
            <Slider {...settings}>
                {cardItem?.multiple_images.map((image, index) => (
                    <div key={index}>
                        <Image
                            src={image}
                            width={500}
                            height={300}
                            alt={`Slide ${index}`}
                            className="w-full h-48 object-cover rounded-lg"
                            priority
                        />
                    </div>
                ))}
            </Slider>

            {/* Details */}
            <div className="mt-4">
                <div className="flex justify-between items-center text-gray-800">
                    <p className="text-lg font-semibold flex items-center">
                        <i className="fas fa-dollar-sign text-green-500 mr-2"></i> {cardItem?.rent_amount} / month
                    </p>
                    <p className="text-gray-600 font-bold flex items-center">
                        <i className="fas fa-bed text-[#07588a] mr-2"></i> {cardItem?.number_of_bedrooms} Bedrooms
                    </p>
                </div>

                {/* Landlord & Location */}
                <div className="flex justify-between items-center mt-2 text-gray-700">
                    <p className="font-semibold flex items-center">
                        <i className="fas fa-user text-[#07588a] mr-2"></i> {cardItem?.landlord?.name}
                    </p>
                    <p className="font-semibold flex items-center">
                        {cardItem?.rental_house_location}
                        <i className="fas fa-map-marker-alt text-red-500 ml-2 animate-pulse"></i>
                    </p>
                </div>

                <p className="text-sm text-gray-500 mt-2 text-left">{cardItem?.details_description}</p>
                <div className="flex justify-between items-center">
                    <Link href={`/rental-housing/${cardItem?._id}`}>
                        <button className="mt-5 px-6 py-1 bg-[#07588a] text-white rounded-md hover:bg-[#06466e] focus:outline-none focus:ring-2 focus:ring-[#07588a]">
                            Explore Now
                        </button>
                    </Link>
                    <button
                        onClick={handleInterested}
                        className="mt-5 px-6 py-1 bg-green-600 text-white rounded-md hover:bg-green-700">
                        Interested
                    </button>
                </div>
            </div>

            {/* Modal */}
            {openModal && (
                <div
                    onClick={() => setOpenModal(false)}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white p-6 rounded-lg shadow-lg max-w-md relative">
                        <button
                            onClick={() => setOpenModal(false)}
                            className="absolute top-3 right-3 text-gray-600 hover:text-gray-800">
                            ✖
                        </button>
                        <div className="p-5">
                            <p className="text-gray-600 text-sm mb-2">
                                Please provide details about your interest in this property. <b>The landlord will get back to you soon</b>.
                            </p>
                            <p className="text-gray-600 text-sm mb-4">
                                Ensure your message is clear and includes any specific questions you may have.
                            </p>

                            <form>
                                {/* Landlord Phone Number (Editable) */}
                                <label className="block text-sm font-semibold text-gray-700">
                                    Landlord Phone Number:
                                </label>
                                <input
                                    type="text"
                                    value={landlordPhoneNumber}
                                    onChange={(e) => setLandlordPhoneNumber(e.target.value)}
                                    className="w-full border border-gray-300 rounded-lg p-3 bg-gray-100 text-gray-700"
                                />

                                {/* Tenant Message */}
                                <label className="block text-sm font-semibold text-gray-700 mt-4">
                                    Your Message:
                                </label>
                                <textarea
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#07588a] focus:border-transparent placeholder-gray-500"
                                    rows={4}
                                    value={tenantMessage}
                                    onChange={(e) => setTenantMessage(e.target.value)}
                                    placeholder="Send Message to Landlord..."
                                ></textarea>

                                <div className="text-center mt-4">
                                    <button
                                        type="button"
                                        onClick={handleSubmit}
                                        className="px-6 py-1 bg-[#07588a] text-white rounded-md hover:bg-[#06466e] focus:outline-none focus:ring-2 focus:ring-[#07588a]"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            <Toaster position="top-center" richColors />
        </div>
    );
};

export default Card;
