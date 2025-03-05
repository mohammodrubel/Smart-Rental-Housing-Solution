import React from 'react'
import Card from '../Card'
import Link from 'next/link'

function AllCard() {
    return (
        <div className='container mx-auto'>
            <h2 className='text-center mx-auto text-gray-900 text-2xl md:text-4xl lg:text-6xl font-bold mt-5'>Properties For Rent</h2>
            <p className='text-center text-gray-500'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, <br /> totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <div className='grid grid-cols-1 gap-10 my-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className='text-center my-10'>
                <Link href="/rental-housing">
                <button className="mt-5 text-left px-6 py-1 cursor-pointer bg-[#f70776] text-white rounded-md hover:bg-[#f70776] focus:outline-none focus:ring-2 focus:ring-[#f70777ef]">
                    Show More
                </button>
                </Link>
            </div>
        </div>
    )
}

export default AllCard