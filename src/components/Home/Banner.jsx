import React from 'react'
import icon_1 from '../../../public/assets/icon_1.png'
import icon_2 from '../../../public/assets/icon_2.png'
import icon_3 from '../../../public/assets/icon_3.png'
import icon_4 from '../../../public/assets/icon_4.png'
import icon_5 from '../../../public/assets/icon_5.png'
import Image from 'next/image'

const Banner = () => {

    const concerns = [
        {
            icon: icon_1,
            title: "poor maintenance & upkeep of your villa?",
        },
        {
            icon: icon_2,
            title: "the kind of people spending time in your villa?",
        },
        {
            icon: icon_3,
            title: "never-ending troubles and expenses of owning your villa?",
        },
        {
            icon: icon_4,
            title: "your villa being idle for a long period of time?",
        },
        {
            icon: icon_5,
            title: "possible hassles of renting your villa to strangers?",
        },
    ];

    return (
        <>
            <div className="bg-[url('/assets/banner.png')] bg-cover  bg-center h-screen relative w-full">
                <div className='flex flex-col justify-center items-center w-full'>
                    <p className='text-4xl font-SandeMore_SemiBold lg:text-[60px] text-center lg:font-SandeMore_medium mt-16 md:mt-24'>
                        start your property’s next chapter
                    </p>
                    <p className='text-xs lg:text-base font-lexend text-center lg:mt-3 md:font-medium'>
                        get rented out by Spacez and start earning hassle-free income!
                    </p>

                    <div className='md:block hidden'>
                        <div className='flex font-lexend space-x-4 mt-16'>
                            <button className='bg-[#BD693D] text-[#FAF4EE] border border-[#E0AB8F] px-16 py-3'>
                                List your home
                            </button>
                            <button className='bg-white text-[#51311F] border border-[#9B938A] px-20 py-3'>
                                contact us
                            </button>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 w-full bg-[#FBF7F2] bg-opacity-70 px-5 py-5 lg:px-10 lg:py-10 xl:px-20 xl:py-10">

                    <div className="max-w-8xl mx-auto">
                        <h2 className="text-[#442208] font-lexend font-semibold md:text-2xl mb-6">
                            are you still worried about your property?
                        </h2>

                        {/* Desktop Layout */}
                        <div className="hidden md:flex justify-between items-center gap-6">
                            {concerns.map((concern, index) => (
                                <div key={index} className="flex items-center gap-3 max-w-[250px]">
                                    <Image src={concern.icon} className='lg:w-[65px] lg:h-[65px] xl:w-[75px] xl:h-[75px]' alt='icon' />
                                    <p className="text-[#4D2B06] text-xs lg:text-sm xl:text-base font-lexend font-medium">{concern.title}</p>
                                </div>
                            ))}
                        </div>

                        {/* Mobile Layout - 2 Column Grid */}
                        <div className="md:hidden grid grid-cols-2 gap-2">
                            {concerns.map((concern, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <Image src={concern.icon} alt='icon' />
                                    <p className="text-[#65605A] text-xs mt-1 font-lexend font-medium">{concern.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Banner