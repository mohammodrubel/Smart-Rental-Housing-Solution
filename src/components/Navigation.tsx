"use client"
import CustomLink from './CustomLink'
import Information from './Information'

function Navigation() {

    return (
        <div className='bg-[#f70776]'>
            <div className='container mx-auto'>
                <nav className='flex justify-between mx-10 items-center'>
                    <div className='text-[25px] font-bold text-white'>CityStay</div>
                    <div className='flex gap-5 items-center py-4'>
                        <ul className='flex gap-5'>
                            <li><CustomLink className="text-white font-semibold" href='/'>Home</CustomLink></li>
                            <li><CustomLink className="text-white font-semibold" href='/about'>About Us</CustomLink></li>
                            <li><CustomLink className="text-white font-semibold" href='/rental-housing'>Rental Housing</CustomLink></li>
                        </ul>
                        <Information />
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navigation