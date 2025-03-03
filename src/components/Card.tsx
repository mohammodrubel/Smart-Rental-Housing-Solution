import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../style/Card.css"

const data = [
    {
        _id: "67c350b7f76d249067cfaa38",
        details_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        multiple_images: [
            "https://homeid-elementor-demo6.g5plus.net/wp-content/uploads/2020/10/single-property-07.jpg",
            "https://homeid-elementor-demo6.g5plus.net/wp-content/uploads/2020/10/single-property-01.jpg",
            "https://homeid-elementor-demo6.g5plus.net/wp-content/uploads/2020/10/single-property-16.jpg",
        ],
        rent_amount: 200,
        number_of_bedrooms: 2,
        landlord_name: "Fardin Tazbeed",
        location: "Dhaka, Bangladesh",
    },
];

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

const Card = () => {
    return (
        <div>
            {data.map((item) => (
                <div key={item._id} className=" shadow-lg p-4 bg-white rounded-lg">
                    {/* Image Slider */}
                    <Slider {...settings}>
                        {item.multiple_images.map((image, index) => (
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
                                <i className="fas fa-dollar-sign text-green-500 mr-2"></i> ${item.rent_amount} / month
                            </p>
                            <p className="text-gray-600 font-bold flex items-center">
                                <i className="fas fa-bed text-[#f70776] mr-2"></i> {item.number_of_bedrooms} Bedrooms
                            </p>
                        </div>

                        {/* Landlord & Location */}
                        <div className="flex justify-between items-center mt-2 text-gray-700">
                            <p className=" font-semibold flex items-center">
                                <i className="fas fa-user text-[#f70776] mr-2"></i> {item.landlord_name}
                            </p>
                            <p className=" font-semibold flex items-center">
                                {item.location}
                                <i className="fas fa-map-marker-alt text-red-500 ml-2 animate-pulse"></i>
                            </p>
                        </div>


                        <p className="text-sm text-gray-500 mt-2 text-left">{item.details_description}</p>
                        <div className="text-left">
                            <button className="mt-5 text-left px-6 py-1 cursor-pointer bg-[#f70776] text-white rounded-md hover:bg-[#f70776] focus:outline-none focus:ring-2 focus:ring-[#f70777ef]">
                                Explore Now
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;
