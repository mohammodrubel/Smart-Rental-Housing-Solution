import '../style/banner.css';

function Banner() {
    return (
        <div className="banner relative">
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#00000083] z-0"></div>

            <div className="relative w-full mx-auto z-10 flex justify-center items-center h-[80vh] px-6">
                <div className="text-center">
                    <h2 className="mb-5 text-4xl bg-[#000000b7] px-10 py-4 inline-block text-white">
                        Let’s find the
                    </h2>
                    <h1 className="text-4xl md:text-6xl lg:text-8xl text-[#07588a] font-extrabold mt-5">
                        <span className="text-white">Find a Home </span>You'll Love
                    </h1>
                    <button className="mt-5 px-6 py-3 cursor-pointer bg-[#07588a] text-white rounded-md hover:bg-[#07588a] focus:outline-none focus:ring-2 focus:ring-[#07588a]">
                        Explore Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Banner;
