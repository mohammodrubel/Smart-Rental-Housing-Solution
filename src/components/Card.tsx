import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../style/Card.css";
import { LandData } from "@/types";
import Link from "next/link";

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true, dots: true } },
        { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1, initialSlide: 1 } },
        { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
};

const Card = ({ cardItem }: { cardItem: LandData }) => {
    return (
        <div key={cardItem?._id} className="shadow-lg p-4 bg-white rounded-lg">
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
                <div className="text-left">
                    <Link href={`/rental-housing/${cardItem?._id}`}>
                    <button className="mt-5 text-left px-6 py-1 cursor-pointer bg-[#07588a] text-white rounded-md hover:bg-[#07588a] focus:outline-none focus:ring-2 focus:ring-[#07588a]">
                        Explore Now
                    </button>
                    </Link>
                </div>
            </div>
            
        </div>
    );
};

export default Card;
