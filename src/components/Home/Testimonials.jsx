import React from 'react';
import testimonial_image1 from '../../../public/assets/testimonial_image1.png'
import testimonial_image2 from '../../../public/assets/testimonial_image2.png'
import testimonial_image3 from '../../../public/assets/testimonial_image3.png'
import testimonial_image4 from '../../../public/assets/testimonial_image4.png'
import testimonial_image5 from '../../../public/assets/testimonial_image5.png'
import testimonial_image6 from '../../../public/assets/testimonial_image6.png'
import testimonial_image7 from '../../../public/assets/testimonial_image7.png'
import testimonial_image8 from '../../../public/assets/testimonial_image8.png'
import Image from 'next/image';

const Testimonials = () => {
    const properties = [
        {
            bgColor: "#F4FAF3",
            name: "namma woodland",
            owner: "mr. prajwal y s",
            beforeImage: testimonial_image1,
            afterImage: testimonial_image2,
            testimonial: "I used to deal with tenant issues constantly, but spacez has changed that completely. now I get steady income without the usual headaches. It's like I am earning without any effort."
        },
        {
            bgColor: "#FAF3F8",
            name: "urban escape",
            owner: "mr. sanjay nayek",
            beforeImage: testimonial_image3,
            afterImage: testimonial_image4,
            testimonial: "I used to deal with tenant issues constantly, but spacez has changed that completely. now I get steady income without the usual headaches. It's like I am earning without any effort."
        },
        {
            bgColor: "#F1F8FA",
            name: "house of two trees",
            owner: "mrs. h aansuyama",
            beforeImage: testimonial_image5,
            afterImage: testimonial_image6,
            testimonial: "I used to deal with tenant issues constantly, but spacez has changed that completely. now I get steady income without the usual headaches. It's like I am earning without any effort."
        },
        {
            bgColor: "#FAF5F1",
            name: "juggler's rest",
            owner: "mr. vasudevan",
            beforeImage: testimonial_image7,
            afterImage: testimonial_image8,
            testimonial: "I used to deal with tenant issues constantly, but spacez has changed that completely. now I get steady income without the usual headaches. It's like I am earning without any effort."
        }
    ];

    return (
        <>
            <div className='text-[28px] lg:text-5xl text-center mt-20 mb-10 font-SandeMore_medium'>
                know why our owners love us
            </div>
            {properties.map((property, index) => (
                <div key={index} className="space-y-6" style={{ backgroundColor: property.bgColor }}>
                    {/* Main Container */}
                    <div className="flex flex-col lg:flex-row gap-8 px-5 py-5 lg:px-10 lg:py-10 xl:px-20 xl:py-10 border border-b-[#e2e0dd]">
                        {/* Before/After Images */}
                        <div className="flex-1">
                            <div className="grid grid-cols-2 gap-1">
                                <div className="relative">
                                    <span className="absolute top-1.5 right-1.5 bg-white px-3 py-1 text-sm">
                                        before
                                    </span>
                                    <Image
                                        src={property.beforeImage}
                                        alt={`${property.name} before`}
                                        className="w-full rounded-sm"
                                    />
                                </div>
                                <div className="relative">
                                    <span className="absolute bottom-1.5 left-1.5 bg-white px-4 py-1 font-lexend text-sm">
                                        after
                                    </span>
                                    <Image
                                        src={property.afterImage}
                                        alt={`${property.name} after`}
                                        className="w-full rounded-sm"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Property Details - Now aligned to bottom */}
                        <div className="lg:w-1/3 flex flex-col font-lexend justify-end">
                            <div className="space-y-1 xl:w-3/4">
                                <h2 className="md:text-2xl font-semibold text-[#51311F]">
                                    {property.name}
                                </h2>
                                <div className="text-[#65605A] text-xs md:text-base">
                                    <span className="font-medium">owner: </span>
                                    {property.owner}
                                </div>
                                <p className="text-[#9B938A] text-xs md:text-base">
                                    what he has to say: &quot;{property.testimonial}&quot;
                                </p>
                                <a
                                    href="#"
                                    className="inline-block text-[#1A110B] text-xs md:text-sm"
                                >
                                    see the full revamp gallery →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Testimonials;