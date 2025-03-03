import React from 'react'
import Card from '../Card'

function AllCard() {
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 gap-10 my-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className='text-center my-10'>
                <button className="mt-5 text-left px-6 py-1 cursor-pointer bg-[#f70776] text-white rounded-md hover:bg-[#f70776] focus:outline-none focus:ring-2 focus:ring-[#f70777ef]">
                    Show More
                </button>
            </div>
        </div>
    )
}

export default AllCard