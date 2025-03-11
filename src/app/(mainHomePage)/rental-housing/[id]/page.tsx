"use client";

import { getSingleLandlordLocation } from "@/app/api/landlords";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type LandlordLocation = {
    _id: string;
    details_description: string;
    multiple_images: string[];
    rent_amount: number;
    number_of_bedrooms: number;
    landlord: {
        _id: string;
        name: string;
        email: string;
        role: string;
        isBlocked: boolean;
        createdAt: string;
        updatedAt: string;
    };
    rental_house_location: string;
    amenities: string;
    createdAt: string;
    updatedAt: string;
};

type Review = {
    id: number;
    user: string;
    comment: string;
    rating: number;
};

const demoReviews: Review[] = [
    { id: 1, user: "John Doe", comment: "I have been a landlord for five years, and I believe providing a well-maintained property is key to attracting great tenants. Communication is also crucial—I make sure to address any maintenance requests quickly, and this has helped me maintain long-term tenants. Investing in security features and offering flexible payment options have also improved my rental experience. Highly recommend being proactive rather than reactive!", rating: 5 },
    { id: 2, user: "Jane Smith", comment: "Being a landlord comes with both opportunities and responsibilities. Renting out properties can generate a steady income, but it also requires effective management to ensure a smooth experience for both landlords and tenants. Key responsibilities include property maintenance, timely rent collection, handling tenant disputes, and complying with local rental laws. Proper tenant screening can help avoid problems like late payments or property damage. Additionally, offering well-maintained housing with amenities such as security, parking, and modern appliances can attract reliable tenants. To maximize returns, landlords should stay updated on market trends and set competitive rental prices while maintaining good landlord-tenant relationships.", rating: 4 },
];

function Page() {
    const params = useParams();
    const [data, setData] = useState<LandlordLocation | null>(null);
    const [selectedImage, setSelectedImage] = useState("");
    const [activeTab, setActiveTab] = useState("information");

    useEffect(() => {
        const fetchSingleData = async () => {
            try {
                const response = await getSingleLandlordLocation(params?.id as string);
                setData(response?.data);
            } catch (error) {
                console.error("Error fetching landlord location:", error);
            }
        };
        fetchSingleData();
    }, [params?.id]);

    if (!data) {
        return <div className="text-center text-gray-500">Loading...</div>;
    }

    const amenitiesList = data.amenities?.split(",") || [];

    return (
        <div className="container mx-auto px-5">
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                {/* Image Section */}
                <div>
                    <div className="flex justify-center">
                        {data.multiple_images.length > 0 && (
                            <Image
                                src={selectedImage || data.multiple_images[0]}
                                width={500}
                                height={500}
                                alt="Property Image"
                                className="rounded-lg"
                            />
                        )}
                    </div>
                    <div className="flex gap-3 mt-5 justify-center flex-wrap">
                        {data.multiple_images.map((img, index) => (
                            <Image
                                key={index}
                                src={img}
                                width={80}
                                height={80}
                                alt="Thumbnail"
                                className="cursor-pointer rounded-lg border"
                                onClick={() => setSelectedImage(img)}
                            />
                        ))}
                    </div>
                </div>

                {/* Details Section */}
                <div className="p-5 shadow-lg rounded-lg">
                    <h3 className="text-2xl font-bold text-gray-700">
                        Location: <span className="text-[#07588a]">{data.rental_house_location}</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                        <h2 className="text-lg font-semibold text-[#07588a]">House Rent: ${data.rent_amount}</h2>
                        <h2 className="text-lg font-semibold text-[#07588a]">Bedrooms: {data.number_of_bedrooms}</h2>
                    </div>
                    <hr className="my-4 border-gray-300" />
                    <div className="flex justify-between items-center">
                        <b>Landlord: {data.landlord.name.toUpperCase()}</b>
                        <b className="bg-[#07588a] text-white px-3 py-1 rounded-full">
                            Published: {new Date(data.createdAt).toLocaleDateString()}
                        </b>
                    </div>
                    <p className="mt-3 text-gray-700">
                        <span className="font-semibold">Description:</span> {data.details_description}
                    </p>
                    <hr className="my-4 border-gray-300" />
                    <div className="flex flex-wrap gap-2 mt-4">
                        <span className="font-semibold uppercase">Amenities:</span>
                        {amenitiesList.map((amenity, index) => (
                            <span
                                key={index}
                                className="bg-[#07588a] text-white px-3 py-1 text-xs rounded-full"
                            >
                                {amenity}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Toggle Section */}
            <div className="mt-8 p-3 flex gap-5 border border-[#07588a] rounded-lg">
                <button
                    className={`text-lg px-5 py-2 rounded-lg text-white bg-[#07588a]`}
                    onClick={() => setActiveTab("review")}
                >
                    Review
                </button>
                <button
                    className={`text-lg px-5 py-2 rounded-lg text-white bg-[#07588a]`}
                    onClick={() => setActiveTab("information")}
                >
                    Information
                </button>
            </div>

            {/* Content Section */}
            <div className="mt-5 p-5 bg-white  rounded-lg">
                {activeTab === "review" ? (
                    <div>
                        <h3 className="text-xl font-bold mb-3">User Reviews</h3>
                        {demoReviews.map((review) => (
                            <div key={review.id} className="shadow rounded p-5 m-5  py-3">
                                <h4 className="font-semibold">{review.user}</h4>
                                <p className="text-sm text-gray-600">{review.comment}</p>
                                <p className="text-yellow-500">Rating: {"⭐".repeat(review.rating)}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>
                        <h3 className="text-xl font-bold mb-3">Additional Information</h3>
                        <p className="text-gray-700">Being a landlord comes with both opportunities and responsibilities. Renting out properties can generate a steady income, but it also requires effective management to ensure a smooth experience for both landlords and tenants. Key responsibilities include property maintenance, timely rent collection, handling tenant disputes, and complying with local rental laws. Proper tenant screening can help avoid problems like late payments or property damage. Additionally, offering well-maintained housing with amenities such as security, parking, and modern appliances can attract reliable tenants. To maximize returns, landlords should stay updated on market trends and set competitive rental prices while maintaining good landlord-tenant relationships.

                        <br />
                        <br />
                        
                        Being a landlord comes with both opportunities and responsibilities. Renting out properties can generate a steady income, but it also requires effective management to ensure a smooth experience for both landlords and tenants. Key responsibilities include property maintenance, timely rent collection, handling tenant disputes, and complying with local rental laws. Proper tenant screening can help avoid problems like late payments or property damage. Additionally, offering well-maintained housing with amenities such as security, parking, and modern appliances can attract reliable tenants. To maximize returns, landlords should stay updated on market trends and set competitive rental prices while maintaining good landlord-tenant relationships.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Page;
