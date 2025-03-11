/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Card from '../Card';
import { getAllLandlord } from '@/app/api/landlords';
import { LandData } from '@/types';


function AllCard() {
    const [landlords, setLandlords] = useState<LandData[] | null>(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLandlords = async () => {
            try {
                const result = await getAllLandlord([]);
                setLandlords(result.data.data); 
            } catch (err:any) {
                setError("Failed to load data.");
            } finally {
                setLoading(false);
            }
        };

        fetchLandlords();
    }, []);
    return (
        <div className='container mx-auto'>
            <h2 className='text-center mx-auto text-gray-900 text-2xl md:text-4xl lg:text-6xl font-bold mt-5'>Properties For Rent</h2>
            <p className='text-center text-gray-500'>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, <br />
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>

            <div className='grid grid-cols-1 gap-10 my-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto'>
                {loading && <p  className='flex h-screen justify-center items-center'>Loading ...</p>}
                {landlords && landlords.map((item: LandData) => (
                    <Card key={item._id} cardItem={item} />
                ))}
                {error && <p className='text-center py-10'>{error}</p>}
            </div>

            <div className='text-center my-10'>
                <Link href="/rental-housing">
                    <button className="mt-5 px-6 py-1 cursor-pointer bg-[#07588a] text-white rounded-md hover:bg-[#07588a] focus:outline-none focus:ring-2 focus:ring-[#07588a]">
                        Show More
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default AllCard;
